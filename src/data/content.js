// All editable portfolio content lives here.
// Update text, links, and lists in one place.

export const profile = {
  name: "Priyanshu Nagle",
  firstName: "Priyanshu",
  lastName: "Nagle",
  role: "Full Stack Developer",
  tagline:
    "Building scalable, high-performance web applications using React, Node.js, Express.js and MongoDB.",
  photo: "/assets/images/photo1-EkqnwwCP.jpeg",
  resumeUrl:
    "https://drive.google.com/file/d/10ofM9VVSIhAPaw1Hipm7bA5OczUKqfR0/view?usp=drive_link",
  location: "Nagpur, Maharashtra, India",
  status: "Open to Opportunities",
  rawEmail: "priyanshunagle2020@gmail.com",
};

export const socials = {
  email:
    "https://mail.google.com/mail/?view=cm&fs=1&to=priyanshunagle2020@gmail.com",
  github: "https://github.com/priyanshunagle14",
  linkedin: "https://linkedin.com/in/priyanshunagle14",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "9.0", label: "SGPA (6th Sem)" },
  { value: "∞", label: "Bugs Squashed" },
  { value: "Production", label: "Deployed Apps" },
];

export const aboutParagraphs = [
  "I am a final-year Information Technology undergraduate with a deep focus on full-stack architecture. From crafting responsive, accessible user interfaces to engineering robust RESTful backend services and databases, I thrive on building end-to-end web software.",
  "Certified in Full Stack Web Development (MERN), I combine strong computer science fundamentals with modern production frameworks to build resilient, maintainable, and user-centric web applications.",
];

export const aboutQuote =
  "I don't just write code — I engineer reliable digital products with performance, clean architecture, and precision.";

export const skills = [
  {
    name: "Frontend Architecture",
    tags: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Vite",
      "Responsive UI",
    ],
  },
  {
    name: "Backend & Systems",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB & Mongoose",
      "RESTful APIs",
      "JWT & Auth Systems",
      "Socket.IO",
      "API Security",
    ],
  },
  {
    name: "Tools & Workflow",
    tags: [
      "Git & GitHub",
      "Postman",
      "VS Code",
      "Vercel Deployment",
      "Render",
      "Netlify",

    ],
  },
];

export const projects = [
  {
    num: "1",
    title: "InterviewForge",
    url: "https://interview-forge-delta.vercel.app/",
    github: "https://github.com/priyanshunagle14",
    image: "/assets/images/interview_forge.png",
    tagline: "Real-time collaborative technical interview & code execution platform",
    description:
      "A comprehensive technical interview platform featuring a real-time collaborative Monaco code editor, live multi-user synchronization with Socket.IO, automated code execution with test-case grading, JWT-based role management (interviewer/candidate), and proctoring integrity tools like fullscreen enforcement and tab-switch detection.",
    highlights: [
      "Real-time bidirectional synchronization with Socket.IO",
      "Monaco Editor integration with live multi-language execution",
      "Proctoring engine with tab-switch detection & fullscreen enforcement",
      "Role-based authentication & room management",
    ],
    tags: ["React.js", "Node.js", "Socket.IO", "Express.js", "MongoDB", "Monaco Editor", "JWT"],
  },
  {
    num: "2",
    title: "SigmaGPT",
    url: "https://sigma-gpt-eta.vercel.app/",
    github: "https://github.com/priyanshunagle14",
    image:
      "/assets/images/sigma_gpt.png",
    tagline: "High-speed AI chatbot application powered by Groq LLM inference",
    description:
      "A full-stack AI conversation application built with MERN architecture and ultra-fast Groq API integration. Features persistent multi-session chat history, token-efficient prompt pipelines, dynamic markdown code formatting, and a low-latency responsive interface.",
    highlights: [
      "AI inference powered by Groq API",
      "Persistent chat history & session isolation in MongoDB",
      "Syntax-highlighted code block rendering & copy utilities",
      "Secure JWT user authentication & protected routes",
    ],
    tags: ["React.js", "MongoDB", "Express.js", "Node.js", "Groq API", "REST API", "Tailwind CSS"],
  },
];

export const certifications = [
  {
    title: "Full Stack Web Developer (MERN)",
    issuer: "Apna College",
    date: "Certified",
    badge: "Verified MERN Specialist",
    description:
      "Comprehensive mastery across the full MERN ecosystem: Frontend architecture with React.js, backend APIs with Node.js & Express.js, database modeling with MongoDB, authentication, and production deployments.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Full Stack Architecture"],
    verified: true,
  },
];

export const education = [
  {
    degree: "B.Tech in Information Technology",
    school: "RTM Nagpur University",
    year: "2023 — 2027",
    grade: "6th Sem SGPA: 9.0",
    icon: "cap",

  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    school: "Maharashtra State Board",
    year: "2023",
    grade: "Percentage: 60.00 %",
    icon: "monitor",

  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Maharashtra State Board",
    year: "2021",
    grade: "Percentage: 87.20 %",
    icon: "book",

  },
];

// EmailJS configuration (public keys — safe to expose client-side)
export const emailjsConfig = {
  publicKey: "lVv0a0uK0vk_GDNrG",
  serviceId: "service_ebf2npo",
  templateId: "template_h8ifyxx",
};
