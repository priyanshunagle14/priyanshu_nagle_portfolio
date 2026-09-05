import { ThemeProvider } from "./context/ThemeContext";
import { ToastProvider } from "./context/ToastContext";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import CommandPalette from "./components/CommandPalette";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Credentials from "./sections/Credentials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="relative min-h-screen bg-paper text-ink transition-colors duration-300 dark:bg-darker dark:text-zinc-100">
          <Cursor />
          <Navbar />
          <CommandPalette />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Credentials />
            <Contact />
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}
