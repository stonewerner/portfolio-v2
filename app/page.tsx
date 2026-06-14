import About from "@/components/About";
import BookCall from "@/components/BookCall";
import Contact from "@/components/Contact";
import ContentSection from "@/components/Content";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileBar from "@/components/MobileBar";
import Nav from "@/components/Nav";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-content px-6 md:px-8">
        <Hero />
        <About />
        <Work />
        <ContentSection />
        <Experience />
        <BookCall />
        <Contact />
        <Footer />
      </main>
      <MobileBar />
    </>
  );
}
