// Original file: proto/todo.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _v1_todo_Empty, Empty__Output as _v1_todo_Empty__Output } from '../../v1/todo/Empty';
import type { TodoList as _v1_todo_TodoList, TodoList__Output as _v1_todo_TodoList__Output } from '../../v1/todo/TodoList';

export interface TodoServiceClient extends grpc.Client {
  GetAllTodos(argument: _v1_todo_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_v1_todo_TodoList__Output>): grpc.ClientUnaryCall;
  GetAllTodos(argument: _v1_todo_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_v1_todo_TodoList__Output>): grpc.ClientUnaryCall;
  GetAllTodos(argument: _v1_todo_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_v1_todo_TodoList__Output>): grpc.ClientUnaryCall;
  GetAllTodos(argument: _v1_todo_Empty, callback: grpc.requestCallback<_v1_todo_TodoList__Output>): grpc.ClientUnaryCall;
  getAllTodos(argument: _v1_todo_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_v1_todo_TodoList__Output>): grpc.ClientUnaryCall;
  getAllTodos(argument: _v1_todo_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_v1_todo_TodoList__Output>): grpc.ClientUnaryCall;
  getAllTodos(argument: _v1_todo_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_v1_todo_TodoList__Output>): grpc.ClientUnaryCall;
  getAllTodos(argument: _v1_todo_Empty, callback: grpc.requestCallback<_v1_todo_TodoList__Output>): grpc.ClientUnaryCall;
  
}

export interface TodoServiceHandlers extends grpc.UntypedServiceImplementation {
  GetAllTodos: grpc.handleUnaryCall<_v1_todo_Empty__Output, _v1_todo_TodoList>;
  
}

export interface TodoServiceDefinition extends grpc.ServiceDefinition {
  GetAllTodos: MethodDefinition<_v1_todo_Empty, _v1_todo_TodoList, _v1_todo_Empty__Output, _v1_todo_TodoList__Output>
}
