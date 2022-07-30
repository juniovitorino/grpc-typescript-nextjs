import { Server, ServerCredentials, loadPackageDefinition } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
import { ProtoGrpcType } from './proto/todo'
import { TodoServiceHandlers } from './proto/v1/todo/TodoService'

const server = new Server();
const options = { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true }

const TodoPackageDefinition = loadSync('./proto/todo.proto', options)
const TodoProto = (loadPackageDefinition(TodoPackageDefinition) as unknown) as ProtoGrpcType

const todos = [
  {
    id: 1,
    title: 'Todo 1',
  },
  {
    id: 2,
    title: 'Todo 2',
  },
  {
    id: 3,
    title: "My next task is share this code."
  }
]

const handlers: TodoServiceHandlers = {
  GetAllTodos: (_, callback) => {
    callback(null, { todos })
  }
}

server.addService(TodoProto.v1.todo.TodoService.service, handlers)

server.bindAsync('127.0.0.1:3333', ServerCredentials.createInsecure(), (err: Error | null) => {
  if (err) throw err;
  server.start()
})
