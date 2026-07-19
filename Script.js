const projectData = {
  legiscounsel: {
    title: "LegisCounsel — AI-Based Legal Advisory System",
    role: "AI-driven legal advisory platform",
    date: "Sep 2025 – Apr 2026",
    desc: [
      "Designed and developed an end-to-end AI-powered legal advisory system that provides users with preliminary legal guidance, relevant laws, and case-specific insights through natural language queries.",
      "Built a Retrieval-Augmented Generation (RAG) pipeline that retrieves accurate legal information from a vector database to generate context-aware AI responses.",
      "Developed a fully automated knowledge ingestion pipeline, enabling administrators to upload new legal documents, automatically extract text, generate embeddings, and store them in ChromaDB for instant retrieval.",
      "Implemented an NLP-powered query analysis system to identify legal intent and retrieve the most relevant statutes, procedures, and recommendations.",
      "Created a scalable backend with secure document management, vector search, and AI integration for fast and reliable legal information retrieval.",
      "Built a responsive frontend with an intuitive interface, making complex legal information accessible to non-technical users.",

      // "Designed a platform delivering preliminary legal guidance and case-related insights to nontechnical users",
      // "Built an NLP-based query analysis pipeline to recommend relevant laws, procedures, and possible actions",
      // "Structured legal knowledge into a searchable system, improving retrieval efficiency for decision support"
    ],
    stack: [
      "React (TypeScript)",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python — AI training",
      "Retrieval-Augmented Generation (RAG)",
      "ChromaDB",
      "OpenAI API",
    ],
    media: 6,
  },
  gearshare: {
    title: "GearShare — Peer-to-Peer Tool Rental Platform",
    role: "Full-stack marketplace",
    date: "Sep 2025 – Mar 2026",
    desc: [
      "Developed a full-stack peer-to-peer tool rental platform enabling users to securely list, discover, and rent tools within their local community.",
      "Designed and implemented a responsive React.js (TypeScript) frontend featuring real-time tool listings, search functionality, and availability tracking.",
      "Built RESTful APIs using Node.js, Express.js, and MongoDB to manage user authentication, tool inventory, bookings, and rental transactions.",
      "Implemented secure authentication and authorization to protect user accounts and restrict access to authorized resources.",
      "Developed an integrated messaging system enabling seamless communication between lenders and renters for rental coordination.",
      "Integrated a secure payment gateway to facilitate protected online rental transactions.",
      "Implemented a review and rating system to establish trust and improve platform reliability.",
      "Designed a scalable and modular application architecture with reusable frontend components and maintainable backend services.",
      "Implemented a tool damage protection workflow with insurance support to enhance transaction security and user confidence.",
      "Developed a user review and rating system to establish trust and improve platform reliability.",
      "Designed a scalable and modular application architecture with reusable frontend components and maintainable backend services.",
    ],
    stack: ["React (TypeScript)", "Node.js", "Express.js", "MongoDB"],
    media: 4,
  },
  hospital: {
    title: "Hospital Appointment Scheduling Simulation",
    role: "Research paper — discrete event simulation",
    date: "Jan 2025 – Jun 2025",
    desc: [
      "Analyzed inefficiencies in manual hospital appointment scheduling through a structured survey of 2,000 respondents, identifying key bottlenecks: long queues, double-booking, and high patient drop-off",
      "Modeled the existing (as-is) workflow using BPMN 2.0 to visually map process flow, decision points, and failure points across patients, receptionists, and doctors",
      "Built a discrete-event simulation of the manual process in AnyLogic, quantifying baseline performance: 38.5 min average wait time, 31% of patients leaving without consultation",
      "Applied Business Process Reengineering (BPR) principles to design a digital appointment-booking solution, replacing manual steps with automated scheduling logic",
      "Simulated the redesigned (to-be) process in AnyLogic, achieving a 57% reduction in average wait time (38.5 → 16.5 min) and cutting patient drop-off from 31% to 12%",
      "Benchmarked the proposed solution against an AI-generated alternative design to compare performance and validate the modeling approach",
      "Ran ANOVA statistical testing across baseline, proposed, and AI-generated solutions, confirming improvements were statistically significant (F = 12.1, p = 0.0078)",
      "Delivered an end-to-end systems engineering workflow - requirements gathering, process modeling, simulation, and statistical validation - applicable to software requirements engineering and data-driven systems design",
    ],
    stack: [
      "AnyLogic",
      "Discrete Event Simulation",
      "BPMN 2.0",
      "Statistical Analysis",
    ],
    media: 4,
  },
  carshowroom: {
    title: "Car Showroom & Rental Management System",
    role: "Full CRUD enterprise application",
    date: "Jan 2025 – Jun 2025",
    desc: [
      "Developed a full CRUD web application for showroom sales, rentals, expenses, and admin management using ASP.NET Core MVC and Entity Framework (Database-First)",
      "Implemented server-side and client-side validation, improving data accuracy and reliability",
    ],
    stack: [
      "ASP.NET Core MVC",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "Bootstrap",
      "jQuery Validation",
    ],
    media: 4,
  },
  spotify: {
    title: "Spotify Clone — Music Streaming Web App",
    role: "UI / front-end build",
    date: "Jan 2024 – Apr 2024",
    desc: [
      "Built a responsive music streaming interface with search, playlist customization, and personalized recommendations",
    ],
    stack: ["HTML", "CSS", "UI/UX Design"],
    media: 4,
  },
  "whatsapp-appointment": {
    title: "AI-Powered WhatsApp Appointment Management System",
    role: "n8n workflow automation",
    date: "Fiverr — Freelance",
    desc: [
      "Designed and developed an end-to-end AI-powered automation using n8n",
      "Integrated a WhatsApp chatbot for appointment booking and customer interaction",
      "Automated appointment logging in Google Sheets and synced bookings with Google Calendar for real-time schedule management",
      "Connected multiple APIs and AI services to create a seamless, no-code/low-code business automation solution",
    ],
    stack: [
      "n8n",
      "WhatsApp API",
      "Google Sheets",
      "Google Calendar",
      "AI Services",
    ],
    media: 4,
  },
  "leadgen-automation": {
    title: "AI-Powered Lead Generation Automation System",
    role: "n8n workflow automation",
    date: "Fiverr — Freelance",
    desc: [
      "Designed and developed an end-to-end AI-powered lead generation workflow using n8n",
      "Automated business lead extraction from Google Maps",
      "Scraped business websites to collect verified contact email addresses",
      "Organized and managed lead data in Airtable for easy access and follow-up",
      "Integrated multiple APIs and web scraping tools to streamline lead generation and eliminate manual data collection",
    ],
    stack: [
      "n8n",
      "Google Maps API",
      "Web Scraping",
      "Airtable",
      "API Integration",
    ],
    media: 4,
  },
};

const overlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalRole = document.getElementById("modalRole");
const modalMeta = document.getElementById("modalMeta");
const modalDesc = document.getElementById("modalDesc");
const modalStack = document.getElementById("modalStack");
const modalMedia = document.getElementById("modalMedia");
let lastFocused = null;

function openModal(key) {
  const p = projectData[key];
  if (!p) return;
  modalTitle.textContent = p.title;
  modalRole.textContent = p.role;
  modalMeta.textContent = p.date.toUpperCase();
  modalDesc.innerHTML =
    "<ul>" + p.desc.map((d) => `<li>${d}</li>`).join("") + "</ul>";
  modalStack.innerHTML = p.stack
    .map((s) => `<span class="chip">${s}</span>`)
    .join("");
  modalMedia.innerHTML = Array.from({ length: p.media })
    .map(
      (_, i) =>
        `<div class="media-slot">
  <span class="icon">▢</span>
  <span class="label">
  <img style="width: 100%; height: 100%; object-fit: cover;" src="media/${key}${i + 1}.png" alt="${p.title} media ${i + 1}"/>
  </span>
  </div>`,
    )
    .join("");
  lastFocused = document.activeElement;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll(".proj").forEach((card) => {
  card.addEventListener("click", () => openModal(card.dataset.project));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(card.dataset.project);
    }
  });
});

document.getElementById("modalClose").addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
});

const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
revealEls.forEach((el) => io.observe(el));
