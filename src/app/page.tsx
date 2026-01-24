import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main id="top" className="container mx-auto px-4 max-w-6xl">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
