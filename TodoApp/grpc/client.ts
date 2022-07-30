import { loadPackageDefinition, credentials } from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/todo'

const protoDefinition = loadSync('grpc/proto/todo.proto');
const TodoProto = (loadPackageDefinition(protoDefinition) as unknown) as ProtoGrpcType;

const TodoService = TodoProto.v1.todo.TodoService;

const todoService = new TodoService(`${process.env.GRPC_SERVER}`, credentials.createInsecure())

export default todoService;
