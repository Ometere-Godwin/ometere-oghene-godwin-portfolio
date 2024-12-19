import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}