import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main id="top" className="container mx-auto max-w-6xl px-4">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
