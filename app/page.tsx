import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import CurrentlyBuilding from "@/components/sections/CurrentlyBuilding";
import Services from "@/components/sections/Services";
import Hobbies from "@/components/sections/Hobbies";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CurrentlyBuilding />
        <Services />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
