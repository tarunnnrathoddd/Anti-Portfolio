# ✦ Tarun Rathod | Creative Developer Portfolio

A high-performance "Scrollytelling" portfolio built with **Next.js 14**, **Framer Motion**, and **HTML5 Canvas**. 

The core mechanic is a cinematic scroll-linked animation that scrubs through a high-resolution 3D rendered image sequence, overlaid with parallax text and a glassmorphism project showcase.

![Portfolio Preview](https://github.com/tarunnnrathoddd/Anti-Portfolio/assets/preview.png)
*(Note: Replace with actual screenshot if available)*

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Rendering:** HTML5 Canvas (Hardware accelerated image sequence)
- **Icons:** [Lucide React](https://lucide.dev/)

## ✨ Key Features

- **🎞️ Canvas Scrollytelling**: Smooth 60fps scrubbing through ~114 WebP frames using HTML5 Canvas.
- **🌌 Parallax Overlays**: Text elements move at variable speeds relative to scroll depth, creating a 3D depth effect.
- **✨ Glassmorphism UI**: Modern, frosted-glass aesthetics for project cards and navigation.
- **📱 Fully Responsive**: Custom logic ensures the layout and 3D sequence scale perfectly from Mobile to 4K Desktops.
- **⚡ Performance First**: Preloading logic prevents flickering; `useScroll` hooks drive animations efficiently outside the React render loop where possible.

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/tarunnnrathoddd/Anti-Portfolio.git
   cd Anti-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it.

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📂 Project Structure

```
├── public/
│   └── sequence/       # compressed WebP frame sequence (000.webp - 113.webp)
├── src/
│   ├── app/
│   │   ├── layout.tsx  # Root layout with <Navbar />
│   │   └── page.tsx    # Main entry point composed of sections
│   ├── components/
│   │   ├── ScrollyCanvas.tsx  # Core engine: Canvas + Scroll logic
│   │   ├── Overlay.tsx        # Floating text layers (Parallax)
│   │   ├── Projects.tsx       # Glassmorphism project grid
│   │   ├── About.tsx          # Resume/Details section
│   │   └── Navbar.tsx         # Responsive floating navigation
│   └── styles/
└── tailwind.config.ts  # Custom animation config
```

## 🎨 Design Decisions

- **Dark Mode Native**: Built with a `#121212` base for OLED-friendly deep blacks and contrast.
- **Inter Font**: Used for its clean, industrial legibility which compliments 3D visuals.
- **Grid Layouts**: Used CSS Grid for the projects section to maintain structure amidst organic scrolling elements.

---

© 2026 Tarun Rathod. Built with ❤️ and Code.
