import { prisma } from '@/lib/db'

export default async function Home() {
  const posts = await prisma.post.findMany()
  return (
    <main className={'flex min-h-screen flex-col items-center gap-4 p-24'}>
      <h1 className={'text-3xl font-medium'}>This is a boilerplate</h1>

      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  )
}
