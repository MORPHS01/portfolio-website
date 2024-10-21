import FloatingNavbar from "@/components/UI/FloatingNavbar";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";




export default async function Home() {
  await new Promise(resolve => setTimeout(resolve, 1000));


  return (
    <main>
      <FloatingNavbar navItems={navItems}/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <TechStack/>
      <Experience/>
      <Approach/>
      <Footer/>
    </main>
  );
}
