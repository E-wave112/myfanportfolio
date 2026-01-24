import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-linear-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg">
      <div className="text-white text-center py-16 px-8 my-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Osagie Iyayi Emmanuel
        </h1>
        <h3 className="text-2xl font-semibold mb-4">Howdy 👋</h3>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          <strong>
            I am a talented software and platform engineer who focuses on and
            enjoys optimizing the business-logic of the applications I build
            whilst ensuring their integrity and compatibility with other
            services at scale 👨‍💻
          </strong>
        </p>
        <Link
          href="https://docs.google.com/document/d/1cP1lHdp12W24TNG7F7dBzsDMi3Xg-c_k/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-blue-700 transition-colors duration-300"
        >
          Get to know more of skill-sets by checking out my Resume!
        </Link>
      </div>
    </section>
  );
}
