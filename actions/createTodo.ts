'use server'

import { prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function createTodo(data: FormData) {
  await prisma.todo.create({
    data: {
      title: data.get('title') as string,
    },
  })
  revalidatePath('/')
}
