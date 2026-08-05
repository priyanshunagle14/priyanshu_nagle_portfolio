// ===============================
// Smooth Scrolling
// ===============================
function goTo(id) {
  scrollToSection(id);
}
console.log("script.js loaded");
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;

  const offset = 70; // Height of fixed navbar
  const top = section.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}

// ===============================
// Navigation Active Link
// ===============================
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {
  const scrollPos = window.scrollY + 100;

  let currentSection = sections[0];

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPos) {
      currentSection = section;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentSection.id}`
    );
  });
}

window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("load", updateActiveNav);

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection(link.getAttribute("href").substring(1));
  });
});

// ===============================
// Reveal Animations
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".rv, .section");

  revealElements.forEach((el) => {
    if (el.classList.contains("section")) {
      el.classList.add("reveal");
    }
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        if (entry.target.classList.contains("reveal")) {
          entry.target.classList.add("show");
        }

        if (entry.target.classList.contains("rv")) {
          entry.target.classList.add("on");
        }

        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
    }
  );

  document
    .querySelectorAll(".reveal, .rv")
    .forEach((el) => observer.observe(el));
});

// ===============================
// Custom Cursor
// ===============================
const cursor = document.getElementById("cur");
const cursorRing = document.getElementById("cur-r");

if (cursor && cursorRing) {
  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  function animateCursor() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;

    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;

    requestAnimationFrame(animateCursor);
  }

  animateCursor();
}

// ===============================
// Mobile Navigation
// ===============================
const hamburger = document.getElementById("ham");
const navigation = document.getElementById("nav");

if (hamburger && navigation) {
  hamburger.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  // Close menu after clicking a nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

// ===============================
// Contact Form
// ===============================
// ===============================
// Contact Form (EmailJS)
// ===============================
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await emailjs.send(
        "service_ebf2npo",
        "template_h8ifyxx",
        {
          from_name: name,
          from_email: email,
          message: message,
        }
      );

      alert("✅ Thank you! Your message has been sent successfully.");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message. Please try again.");
    }
  });
}