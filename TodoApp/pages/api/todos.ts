import type { NextApiRequest, NextApiResponse } from 'next'
import todoService from '@grpc/client'

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse
) {
  todoService.GetAllTodos({}, (_, todos) => {
    res.status(200).json(todos)
  })
}
