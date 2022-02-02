import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, User } from '@prisma/client'
import prisma from '../../lib/prisma'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<User[] | User>
) {
  if (req.method === 'GET') {
    const users = await prisma.user.findMany()

    res.status(200).json(users)
  } else if (req.method === 'POST') {
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
      }
    })

    res.status(200).json(user)
  }
}