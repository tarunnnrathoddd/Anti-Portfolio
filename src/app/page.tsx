import ScrollyCanvas from '@/components/ScrollyCanvas';
import Projects from '@/components/Projects';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <ScrollyCanvas />
      <Projects />
      <About />
      <footer className="py-12 text-center text-white/30 font-light text-sm bg-[#121212] border-t border-white/5">
        <p>&copy; 2026 Tarun Rathod. Crafted with Next.js & Framer Motion.</p>
      </footer>
    </main>
  );
}
