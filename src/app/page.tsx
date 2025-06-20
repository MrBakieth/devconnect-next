import Link from "next/link";

export default function Home() {
  return (
    <main className="relative bg-gray-200 h-screen flex justify-center items-center overflow-y-hidden px-4">
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Top-left SVG Blob */}
        <div className="absolute -top-32 -left-32 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] opacity-40 blur-2xl">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#6366F1"
              d="M41.3,-58.6C52.5,-51.2,59.7,-39,65.1,-25.7C70.5,-12.4,74.2,2,69.6,13.8C64.9,25.7,51.9,34.9,39.7,44.8C27.5,54.7,16.1,65.2,3.1,66.4C-9.8,67.6,-19.6,59.6,-33.3,52.2C-47,44.7,-64.6,37.7,-70.6,25.1C-76.7,12.6,-71.3,-5.4,-65.6,-21.3C-60,-37.2,-53.9,-51.1,-42.2,-58.7C-30.4,-66.2,-15.2,-67.5,-0.7,-66.5C13.9,-65.5,27.7,-62,41.3,-58.6Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Bottom-right SVG Blob */}
        <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] opacity-40 blur-2xl">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#2466F8"
              d="M41.3,-58.6C52.5,-51.2,59.7,-39,65.1,-25.7C70.5,-12.4,74.2,2,69.6,13.8C64.9,25.7,51.9,34.9,39.7,44.8C27.5,54.7,16.1,65.2,3.1,66.4C-9.8,67.6,-19.6,59.6,-33.3,52.2C-47,44.7,-64.6,37.7,-70.6,25.1C-76.7,12.6,-71.3,-5.4,-65.6,-21.3C-60,-37.2,-53.9,-51.1,-42.2,-58.7C-30.4,-66.2,-15.2,-67.5,-0.7,-66.5C13.9,-65.5,27.7,-62,41.3,-58.6Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative z-10 flex flex-col items-center gap-5 border border-gray-400 rounded-xl bg-white/70 shadow-xl p-4 sm:p-12 w-full max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">Welcome!</h1>
        <p className="text-lg sm:text-2xl text-center text-gray-800">
          <strong>Manage</strong>, <strong>edit</strong>, and{" "}
          <strong>view</strong> users effortlessly with a modern tech stack.
        </p>
        <Link href="/users">
          <button className="px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition text-lg sm:text-xl cursor-pointer">
            To See Users
          </button>
        </Link>
      </section>
    </main>
  );
}
