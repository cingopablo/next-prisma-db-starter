import { prisma } from '@/lib/db'
import { createTodo } from '@/actions/createTodo'

export default async function Home() {
  const todos = await prisma.todo.findMany()
  return (
    <main className={'flex min-h-screen flex-col items-center gap-4 p-24'}>
      <h1 className={'text-3xl font-medium'}>To do list ({todos.length})</h1>

      <ul>{todos?.map(todo => <li key={todo.id}>{todo.title}</li>)}</ul>

      <form action={createTodo} className={'flex flex-col gap-2'}>
        <input
          name={'title'}
          placeholder={'Write something'}
          className={
            'rounded-xl border-2 bg-slate-50 px-3 py-2 outline-none transition-colors hover:border-indigo-300 focus:border-indigo-300'
          }
        />
        <button
          className={
            'focus:bg-indigo-500/9å0 rounded-xl bg-indigo-500 px-3 py-2 text-white transition-colors hover:bg-indigo-500/90'
          }>
          Add item
        </button>
      </form>
    </main>
  )
}
