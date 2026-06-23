import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import { Certificates } from "@/components/sections/Certificates";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";

function PortfolioContent() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="min-h-screen">
      <Header darkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates/>
        <Experience/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="soumya-portfolio-theme">
      <PortfolioContent />
    </ThemeProvider>
  );
};

export default Index;
