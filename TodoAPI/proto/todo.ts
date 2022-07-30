import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { TodoServiceClient as _v1_todo_TodoServiceClient, TodoServiceDefinition as _v1_todo_TodoServiceDefinition } from './v1/todo/TodoService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  v1: {
    todo: {
      Empty: MessageTypeDefinition
      Todo: MessageTypeDefinition
      TodoList: MessageTypeDefinition
      TodoService: SubtypeConstructor<typeof grpc.Client, _v1_todo_TodoServiceClient> & { service: _v1_todo_TodoServiceDefinition }
    }
  }
}

