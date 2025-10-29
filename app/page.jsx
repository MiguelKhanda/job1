
import About from "@/components/About";
import Choice from "@/components/Choice";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <div className="fixed inset-0 -z-12 h-full w-full items-center px-5 py-24 [background:radial-gradient(145%_125%_at_50%_30%,#252627_40%,#6BD425_100%)]">
      </div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Choice/>
      <Contact/>
    </div>
  );
}
