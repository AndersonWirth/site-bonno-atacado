// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Escolha a filial</h1>
      <Link href="/filial/home" className="bg-blue-500 text-white px-6 py-3 rounded">
        Filial Chapecó
      </Link>
      <Link href="/filial/bonno-dionisio" className="bg-green-600 text-white px-6 py-3 rounded">
        Filial Xaxim
      </Link>
    </main>
  )
}