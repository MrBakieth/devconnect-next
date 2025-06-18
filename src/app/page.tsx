import Link from "next/link";

export default function Home() {
  return (
    <main className="relative bg-gray-200 h-screen flex justify-center items-center overflow-hidden">
      {/* SVG Blob image for background */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] z-0 opacity-50 blur-2xl">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#6366F1"
            d="M41.3,-58.6C52.5,-51.2,59.7,-39,65.1,-25.7C70.5,-12.4,74.2,2,69.6,13.8C64.9,25.7,51.9,34.9,39.7,44.8C27.5,54.7,16.1,65.2,3.1,66.4C-9.8,67.6,-19.6,59.6,-33.3,52.2C-47,44.7,-64.6,37.7,-70.6,25.1C-76.7,12.6,-71.3,-5.4,-65.6,-21.3C-60,-37.2,-53.9,-51.1,-42.2,-58.7C-30.4,-66.2,-15.2,-67.5,-0.7,-66.5C13.9,-65.5,27.7,-62,41.3,-58.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="absolute -bottom-55 -right-55 w-[600px] h-[600px] z-0 opacity-50 blur-2xl">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#2466F8"
            d="M41.3,-58.6C52.5,-51.2,59.7,-39,65.1,-25.7C70.5,-12.4,74.2,2,69.6,13.8C64.9,25.7,51.9,34.9,39.7,44.8C27.5,54.7,16.1,65.2,3.1,66.4C-9.8,67.6,-19.6,59.6,-33.3,52.2C-47,44.7,-64.6,37.7,-70.6,25.1C-76.7,12.6,-71.3,-5.4,-65.6,-21.3C-60,-37.2,-53.9,-51.1,-42.2,-58.7C-30.4,-66.2,-15.2,-67.5,-0.7,-66.5C13.9,-65.5,27.7,-62,41.3,-58.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Main section */}
      <section className="relative z-10 flex flex-col items-center space-y-6 border-2 border-gray-400 rounded-xl bg-gray-100 shadow-xl p-12">
        <h1 className="text-5xl font-bold">Welcome!</h1>
        <p className="text-2xl text-center">
          <strong>Manage</strong>, <strong>edit</strong>, and{" "}
          <strong>view</strong> users effortlessly with a modern tech stack.
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
