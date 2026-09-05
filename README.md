# 🎨 Priyanshu Nagle - Modern Portfolio Website

A **premium, production-ready portfolio** built with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Showcasing full-stack development expertise with responsive design, advanced animations, and professional features.

---

## 🚀 Live Demo

**🔗 [View Portfolio](https://priyanshu-nagle-portfolio.vercel.app/)**

---

## ✨ Key Features

### **🎯 Professional Design**
- Luxury champagne bronze color scheme (#c5a059)
- Dual light/dark theme with seamless switching
- Glass morphism effects and modern UI patterns
- Responsive design from 375px to 1536px

### **⚡ Advanced Interactions**
- **Command Palette** (Cmd+K / Ctrl+K) - Fast navigation
- **Toast Notifications** - Success/error/info feedback
- **Magnetic Button Effects** - Interactive UI elements
- **Particle Field** - Canvas-based animated background
- **Floating Shapes** - SVG morphing animations with parallax
- **3D Gradient Text** - Letter-by-letter rotation animations
- **Staggered Reveals** - Smooth scroll-triggered animations

### **📱 Mobile Responsive**
- Mobile-first approach with progressive enhancement
- Optimal typography scaling using `clamp()`
- Touch-friendly buttons (44px+ minimum)
- Responsive image sizing and layout
- Hamburger menu navigation

### **🔧 Professional Features**
- Always-visible technology tags (no hover required)
- Contact form with EmailJS integration
- Project showcase with live demos and GitHub links
- Certifications and education display
- Animated statistics counter
- Smooth scroll-to-section navigation

---

## 🛠️ Technology Stack

### **Frontend**
- **React 18.3.1** - UI component framework
- **Vite 6.4.3** - Lightning-fast build tool
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion 11** - Advanced animations

### **Integration**
- **EmailJS** - Contact form backend
- **Canvas API** - Particle effects
- **Local Storage** - Theme persistence
- **Context API** - State management

### **Deployment**
- **Vercel** - Automatic deployment
- **Git/GitHub** - Version control

---

## 📊 Performance

| Metric | Value | Status |
|--------|-------|--------|
| **JavaScript** | 336.91 kB | ✅ |
| **JS Gzipped** | 105.81 kB | ✅ |
| **CSS** | 70.45 kB | ✅ |
| **CSS Gzipped** | 11.15 kB | ✅ |
| **Build Time** | 2.13s | ✅ |
| **Modules** | 426 | ✅ |

---

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── Navbar.jsx          # Responsive navigation
│   ├── TiltCard.jsx        # 3D tilt card effect
│   ├── MagneticButton.jsx  # Magnetic button interaction
│   ├── AnimatedGradient.jsx # 3D gradient text
│   ├── FloatingShapes.jsx  # SVG animations
│   ├── ParticleField.jsx   # Canvas particle system
│   ├── CommandPalette.jsx  # Command palette modal
│   ├── Counter.jsx         # Animated counter
│   ├── Reveal.jsx          # Scroll reveal animation
│   ├── ThemeToggle.jsx     # Dark/light mode toggle
│   └── SectionHeader.jsx   # Section header component
│
├── context/                # Context providers
│   ├── ThemeContext.jsx    # Theme management
│   └── ToastContext.jsx    # Toast notifications
│
├── sections/               # Page sections
│   ├── Hero.jsx           # Hero/welcome section
│   ├── About.jsx          # About & stats
│   ├── Skills.jsx         # Technical skills
│   ├── Projects.jsx       # Project showcase
│   ├── Education.jsx      # Education credentials
│   ├── Credentials.jsx    # Education & certifications
│   ├── Contact.jsx        # Contact form
│   └── Footer.jsx         # Footer section
│
├── data/
│   └── content.js         # All portfolio data (editable)
│
├── App.jsx                # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles & tokens
```

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 16+ and npm

### **Installation**

```bash
# Clone repository
git clone https://github.com/priyanshunagle14/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Build for Production**

```bash
npm run build
```

### **Preview Production Build**

```bash
npm run preview
```

---

## 📝 Content Editing

All portfolio content is centralized in `src/data/content.js`:

```javascript
export const profile = {
  name: "Priyanshu Nagle",
  role: "Full Stack Developer",
  tagline: "Your tagline here...",
  // ... more fields
}

export const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    image: "/assets/images/project.png",
    url: "https://...",
    github: "https://...",
    // ... more fields
  }
]
```

---

## 🎨 Design System

### **Color Palette**
- **Primary Accent**: Champagne Bronze (#c5a059)
- **Accent Soft**: Gold Soft (#d4af96)
- **Accent Dark**: Gold Dark (#8b6f47)
- **Light Theme**: #f8f9fa background, #0f172a text
- **Dark Theme**: #090a0f background, #e5e7eb text

### **Typography**
- **Serif**: Headlines (professional, elegant)
- **Mono**: Code, badges, technical content
- **System**: Body text (optimal readability)

### **Responsive Breakpoints**
- **Mobile**: < 640px
- **Tablet (sm)**: 640px
- **Tablet (md)**: 1024px
- **Desktop (lg)**: 1280px
- **Large (xl)**: 1536px

---

## 🎯 Featured Projects

### **1. InterviewForge**
Real-time collaborative technical interview platform with Monaco code editor, Socket.IO synchronization, and proctoring tools.
- **Tech**: React, Node.js, Socket.IO, Express, MongoDB, Monaco Editor
- **Live**: [interview-forge-delta.vercel.app](https://interview-forge-delta.vercel.app/)
- **GitHub**: [Repository Link](https://github.com/priyanshunagle14)

### **2. SigmaGPT**
High-speed AI chatbot powered by Groq LLM with persistent chat history and syntax-highlighted code blocks.
- **Tech**: React, MongoDB, Express, Node.js, Groq API, Tailwind CSS
- **Live**: [sigma-gpt-eta.vercel.app](https://sigma-gpt-eta.vercel.app/)
- **GitHub**: [Repository Link](https://github.com/priyanshunagle14)

---

## 📱 Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## ⚙️ Configuration

### **EmailJS Setup**
Contact form uses EmailJS for email delivery. Configure in `src/data/content.js`:

```javascript
export const emailjsConfig = {
  publicKey: "YOUR_PUBLIC_KEY",
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
};
```

### **Theme Persistence**
Theme preference is automatically saved to localStorage and persists across sessions.

---

## 🔧 Development Commands

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code (if configured)
npm run lint
```

---

## 📊 Responsive Design Features

- **Typography Scaling**: Uses `clamp()` for smooth transitions
- **Flexible Layouts**: Responsive grids (1/2/3 columns)
- **Touch Optimization**: 44px+ minimum touch targets
- **Image Optimization**: Lazy loading, responsive sizing
- **Mobile Menu**: Hamburger navigation on mobile
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

---

## 🎓 Certifications

**Full Stack Web Developer (MERN)** - Apna College
- Comprehensive mastery of React, Node.js, Express, MongoDB
- REST API development and deployment
- Real-world project implementation

---

## 📈 Performance Optimization

- **Code Splitting**: Vite automatic chunking
- **Lazy Loading**: Images and components on-demand
- **CSS Optimization**: Tailwind purging unused styles
- **Animation Performance**: GPU-accelerated transforms
- **Bundle Size**: < 350KB gzipped (well optimized)

---

## 🔐 Security

- ✅ EmailJS public key is safe to expose (client-side only)
- ✅ No sensitive credentials in version control
- ✅ CORS properly configured
- ✅ Input validation on contact form

---

## 📞 Contact

- **Email**: priyanshunagle2020@gmail.com
- **GitHub**: [@priyanshunagle14](https://github.com/priyanshunagle14)
- **LinkedIn**: [/in/priyanshunagle14](https://linkedin.com/in/priyanshunagle14)
- **Resume**: [Download](https://drive.google.com/file/d/1Uy0f9Rji2YTE3linr5Slui-ZQyXd4Qvl/view?usp=drive_link)

---

## 📝 License

This portfolio is open source and available for personal use and inspiration.

---

## 🙏 Acknowledgments

- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling framework
- **Vite** - Build tool
- **React** - UI framework
- **EmailJS** - Email service

---

## 📚 Additional Documentation

- **[Mobile Responsiveness Guide](./MOBILE_RESPONSIVENESS.md)** - Detailed responsive design documentation
- **[Final Summary](./FINAL_SUMMARY.md)** - Complete implementation overview
- **[Quick Start Guide](./QUICK_START.md)** - Deployment and feature reference
- **[Completion Report](./COMPLETION_REPORT.md)** - All work completed summary

---

**Last Updated**: September 5, 2026  
**Status**: ✅ Production Ready  
**Version**: 1.0.0
