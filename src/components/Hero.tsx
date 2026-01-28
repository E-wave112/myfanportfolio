import Link from "next/link";

export default function Hero() {
  return (
    <section className="mt-8 rounded-lg bg-linear-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="my-8 px-8 py-16 text-center text-white">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Osagie Iyayi Emmanuel
        </h1>
        <h3 className="mb-4 text-2xl font-semibold">Howdy 👋</h3>
        <p className="mx-auto mb-8 max-w-3xl text-lg md:text-xl">
          I am a software and platform engineer who focuses on and enjoys
          optimizing the business-logic of the applications I build whilst
          ensuring their integrity and compatibility with other services at
          scale 👨‍💻
        </p>
        <Link
          href="https://docs.google.com/document/d/1cP1lHdp12W24TNG7F7dBzsDMi3Xg-c_k/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md border-2 border-white px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-blue-700"
        >
          View My Resume
        </Link>
      </div>
    </section>
  );
}
