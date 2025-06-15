import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-gray-200 h-screen flex justify-center items-center">
      <section className="flex flex-col items-center space-y-6 border-2 border-gray-400 rounded-xl bg-gray-100 shadow-xl p-12">
        <h1 className="text-5xl font-bold">Hoş geldiniz!</h1>
        <p className="text-2xl">
          This application made it with Next,js + Redux + TypeScript for User
          manager practise.
        </p>
        <Link href="/users">
          <button className="px-4 py-2 mt-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition text-xl animate-bounce">
            To See Users
          </button>
        </Link>
      </section>
    </main>
  );
}
