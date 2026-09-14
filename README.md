<div align="center">

# ⚡ Priyanshu Nagle — Full Stack Portfolio

**A modern, production-ready developer portfolio showcasing full-stack applications, interactive UI components, and software engineering expertise.**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://priyanshu-nagle-portfolio.vercel.app/)

[🌐 **View Live Website**](https://priyanshu-nagle-portfolio.vercel.app/) • [📄 **Download Resume**](https://drive.google.com/file/d/1Uy0f9Rji2YTE3linr5Slui-ZQyXd4Qvl/view?usp=drive_link) • [💼 **LinkedIn**](https://linkedin.com/in/priyanshunagle14) • [📧 **Contact Email**](mailto:priyanshunagle2020@gmail.com)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Featured Projects](#-featured-projects)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Content Management](#-content-management)
- [Design System](#-design-system)
- [Performance Optimization](#-performance-optimization)
- [Contact \& Socials](#-contact--socials)
- [License](#-license)

---

## 🌟 Overview

Designed with precision and built for performance, this portfolio represents a **high-end, interactive web application** constructed using React 18, Vite 6, Tailwind CSS v4, and Framer Motion. 

Rather than relying on template defaults, the project features custom canvas particle dynamics, glassmorphism UI patterns, interactive 3D card tilt effects, a global command palette, and smooth theme persistence.

### 🎨 Design Philosophy
- **Aesthetic**: Luxury Champagne Bronze accents (`#c5a059`) balanced against sleek dark and light backgrounds.
- **Interactivity**: Micro-animations, magnetic button triggers, dynamic cursor-following shapes, and letter-by-letter gradient text rotations.
- **Responsiveness**: Fluid layouts scaled continuously from 375px mobile viewports to ultra-wide 1536px+ displays.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| ⌨️ **Command Palette** | Press `Cmd + K` or `Ctrl + K` to open a global spotlight search for fast navigation across all sections. |
| 🌌 **Particle Background** | HTML5 Canvas-based animated particle physics background with dynamic node connections. |
| 🧲 **Magnetic Micro-Interactions** | Dynamic magnetic pull effects on key call-to-action buttons for engaging UX. |
| 🌓 **Dual Theme Engine** | Instant dark/light mode toggle with smooth CSS variable transitions and `localStorage` persistence. |
| 📩 **EmailJS Integration** | Working client-side contact form with real-time feedback and direct inbox routing. |
| 📱 **Mobile-First UX** | Touch-optimized target areas ($>44\text{px}$), fluid typography using CSS `clamp()`, and smooth slide-out navigation. |
| ⚡ **Scroll Animations** | Scroll-triggered staggered reveal effects powered by Framer Motion's `useInView`. |
| 🍞 **Toast Notification System** | Custom contextual toast alerts for copy-to-clipboard actions and form submissions. |

---

## 🛠️ Tech Stack

### **Frontend Core**
- **Framework**: [React 18.3.1](https://reactjs.org/) (Functional Components, Custom Hooks, Context API)
- **Build Tool**: [Vite 6.0.7](https://vitejs.dev/) (Ultra-fast HMR and optimized production bundling)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Design Tokens
- **Animations**: [Framer Motion 11.15](https://www.framer.com/motion/) & HTML5 Canvas API

### **Services & Utilities**
- **Form Service**: EmailJS (`@emailjs/browser`)
- **Icons & Graphics**: Inline SVG & Custom Vector Illustrations
- **State Management**: React Context (`ThemeContext`, `ToastContext`)

### **Tooling & Hosting**
- **Version Control**: Git & GitHub
- **Deployment**: Vercel (CI/CD Automated Deployment pipeline)
- **Code Formatting & Quality**: ES Modules & Vite Plugin Ecosystem

---

## 🚀 Featured Projects

### 1. ⚔️ **InterviewForge**
> **Real-time collaborative technical interview & code execution platform**

- **Tech Stack**: React.js, Node.js, Express.js, MongoDB, Socket.IO, Monaco Editor, JWT
- **Live Demo**: [interview-forge-delta.vercel.app](https://interview-forge-delta.vercel.app/)
- **Key Highlights**:
  - Real-time bidirectional editor synchronization via Socket.IO websockets.
  - In-browser code execution interface powered by VS Code's Monaco engine.
  - Proctoring integrity suite with fullscreen enforcement and tab-switch detection logs.
  - Role-based authentication (Interviewer vs. Candidate dashboards).

### 2. 🤖 **SigmaGPT**
> **High-speed AI chatbot application powered by Groq LLM inference**

- **Tech Stack**: React.js, MongoDB, Express.js, Node.js, Groq API, Tailwind CSS
- **Live Demo**: [sigma-gpt-eta.vercel.app](https://sigma-gpt-eta.vercel.app/)
- **Key Highlights**:
  - Ultra-fast token streaming powered by Groq Llama/Mixtral LLM hardware acceleration.
  - Multi-session chat history persistence and conversation branching stored in MongoDB.
  - Syntax-highlighted code block rendering with one-click copy functionality.
  - Secure JWT authentication and protected API endpoints.

---

## 📂 Project Architecture

```
priyanshu_nagle_portfolio/
├── public/
│   └── assets/
│       └── images/         # Static images & project screenshots
├── src/
│   ├── components/         # Reusable interactive UI components
│   │   ├── AnimatedGradient.jsx # 3D rotating text gradient
│   │   ├── CommandPalette.jsx  # Keyboard navigation modal (Cmd+K)
│   │   ├── Counter.jsx         # Animated numerical stat counters
│   │   ├── FloatingShapes.jsx  # Morphing background SVG shapes
│   │   ├── MagneticButton.jsx  # Spring physics magnetic button wrapper
│   │   ├── Navbar.jsx          # Responsive header navigation
│   │   ├── ParticleField.jsx   # Interactive canvas particle engine
│   │   ├── Reveal.jsx          # Motion scroll reveal wrapper
│   │   ├── SectionHeader.jsx   # Standardized section headings
│   │   ├── ThemeToggle.jsx     # Theme mode switcher
│   │   └── TiltCard.jsx        # 3D interactive card tilt effect
│   │
│   ├── context/            # Global state context providers
│   │   ├── ThemeContext.jsx    # Dark/Light theme state
│   │   └── ToastContext.jsx    # Global notification toasts
│   │
│   ├── sections/           # Modular page sections
│   │   ├── Hero.jsx            # Landing section with bio & actions
│   │   ├── About.jsx           # Background summary & key metrics
│   │   ├── Skills.jsx          # Categorized technical skill pills
│   │   ├── Projects.jsx        # Project showcases & cards
│   │   ├── Credentials.jsx     # Education & cert credentials
│   │   ├── Contact.jsx         # Interactive email form section
│   │   └── Footer.jsx          # Footer links & copyright info
│   │
│   ├── data/
│   │   └── content.js          # Centralized data file (all text/links)
│   │
│   ├── App.jsx             # Root layout component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global Tailwind & design system styles
│
├── package.json            # Project dependencies & scripts
└── vite.config.js          # Vite build settings
```

---

## ⚡ Getting Started

### **Prerequisites**
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### **1. Clone the Repository**
```bash
git clone https://github.com/priyanshunagle14/priyanshu_nagle_portfolio.git
cd priyanshu_nagle_portfolio
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Start Development Server**
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### **4. Build for Production**
```bash
npm run build
```

### **5. Preview Production Build**
```bash
npm run preview
```

---

## 📝 Content Management

All text, project details, skills, certifications, and social links are centrally stored in [`src/data/content.js`](file:///d:/WebDev/PROJS/priyanshu_nagle_porfolio/src/data/content.js).

To update portfolio contents:
1. Open [`src/data/content.js`](file:///d:/WebDev/PROJS/priyanshu_nagle_porfolio/src/data/content.js).
2. Modify the exported objects (`profile`, `skills`, `projects`, `education`, `certifications`).
3. Save the file. Hot Module Replacement (HMR) will update the UI immediately!

---

## 🎨 Design System

### **Color Palette**
| Token | Color Code | Description |
| :--- | :--- | :--- |
| **Accent Primary** | `#c5a059` | Champagne Bronze |
| **Accent Soft** | `#d4af96` | Soft Warm Gold |
| **Accent Dark** | `#8b6f47` | Deep Antique Gold |
| **Dark Background** | `#090a0f` | Deep Space Navy/Black |
| **Light Background** | `#f8f9fa` | Crisp Off-White |

### **Typography**
- **Headlines & Accents**: Serif typography fallback for classic elegance.
- **Body & Controls**: System Sans-Serif font stack for optimal legibility.
- **Code & Technical Data**: Monospace font stack for metrics and code snippets.

---

## 📊 Performance Optimization

- **Optimized Bundle**: Fast initial page load with Vite chunk splitting.
- **Hardware Acceleration**: Canvas and SVG animations execute smoothly.
- **Responsive Assets**: Vector graphics and optimized image assets.
- **Clean Lifecycle**: Canvas animation loops cancel cleanly on component unmount.

---

## 📬 Contact & Socials

- 👨‍💻 **Developer**: Priyanshu Nagle
- 📍 **Location**: Nagpur, Maharashtra, India
- 📧 **Email**: [priyanshunagle2020@gmail.com](mailto:priyanshunagle2020@gmail.com)
- 🐙 **GitHub**: [@priyanshunagle14](https://github.com/priyanshunagle14)
- 💼 **LinkedIn**: [Priyanshu Nagle](https://linkedin.com/in/priyanshunagle14)

---

## 📄 License

This repository is open source and available under the [MIT License](LICENSE).

<div align="center">
  <sub>Built with ❤️ by Priyanshu Nagle</sub>
</div>

