const projectData = {
  legiscounsel: {
    title: "LegisCounsel — AI-Based Legal Advisory System",
    role: "AI-driven legal advisory platform",
    date: "Sep 2025 – Apr 2026",
    desc: [
      "Designed a platform delivering preliminary legal guidance and case-related insights to nontechnical users",
      "Built an NLP-based query analysis pipeline to recommend relevant laws, procedures, and possible actions",
      "Structured legal knowledge into a searchable system, improving retrieval efficiency for decision support"
    ],
    stack: ["React (TypeScript)","Node.js","Express.js","MongoDB","Python — AI training"],
    media: 4
  },
  gearshare: {
    title: "GearShare — Peer-to-Peer Tool Rental Platform",
    role: "Full-stack marketplace",
    date: "Sep 2025 – Mar 2026",
    desc: [
      "Built a full-stack platform enabling community members to rent tools, with real-time listings and availability tracking",
      "Implemented secure payment processing and a review/rating system to build trust between borrowers and lenders",
      "Architected the system for scalability to support future community growth"
    ],
    stack: ["React (TypeScript)","Node.js","Express.js","MongoDB"],
    media: 4
  },
  hospital: {
    title: "Hospital Appointment Scheduling Simulation",
    role: "Research paper — discrete event simulation",
    date: "Jan 2025 – Jun 2025",
    desc: [
      "Modelled manual hospital appointment workflows using BPMN 2.0 and Discrete Event Simulation in AnyLogic",
      "Designed and tested an online, AI-assisted scheduling system that cut patient waiting time by 50%+",
      "Statistically validated results using ANOVA, confirming significance of the proposed improvements"
    ],
    stack: ["AnyLogic","Discrete Event Simulation","BPMN 2.0","Statistical Analysis"],
    media: 4
  },
  carshowroom: {
    title: "Car Showroom & Rental Management System",
    role: "Full CRUD enterprise application",
    date: "Jan 2025 – Jun 2025",
    desc: [
      "Developed a full CRUD web application for showroom sales, rentals, expenses, and admin management using ASP.NET Core MVC and Entity Framework (Database-First)",
      "Implemented server-side and client-side validation, improving data accuracy and reliability"
    ],
    stack: ["ASP.NET Core MVC","C#","Entity Framework Core","SQL Server","Bootstrap","jQuery Validation"],
    media: 4
  },
  spotify: {
    title: "Spotify Clone — Music Streaming Web App",
    role: "UI / front-end build",
    date: "Jan 2024 – Apr 2024",
    desc: [
      "Built a responsive music streaming interface with search, playlist customization, and personalized recommendations"
    ],
    stack: ["HTML","CSS","UI/UX Design"],
    media: 4
  },
  "whatsapp-appointment": {
    title: "AI-Powered WhatsApp Appointment Management System",
    role: "n8n workflow automation",
    date: "Fiverr — Freelance",
    desc: [
      "Designed and developed an end-to-end AI-powered automation using n8n",
      "Integrated a WhatsApp chatbot for appointment booking and customer interaction",
      "Automated appointment logging in Google Sheets and synced bookings with Google Calendar for real-time schedule management",
      "Connected multiple APIs and AI services to create a seamless, no-code/low-code business automation solution"
    ],
    stack: ["n8n","WhatsApp API","Google Sheets","Google Calendar","AI Services"],
    media: 4
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
      "Integrated multiple APIs and web scraping tools to streamline lead generation and eliminate manual data collection"
    ],
    stack: ["n8n","Google Maps API","Web Scraping","Airtable","API Integration"],
    media: 4
  }
};

const overlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalRole = document.getElementById('modalRole');
const modalMeta = document.getElementById('modalMeta');
const modalDesc = document.getElementById('modalDesc');
const modalStack = document.getElementById('modalStack');
const modalMedia = document.getElementById('modalMedia');
let lastFocused = null;

function openModal(key){
  const p = projectData[key];
  if(!p) return;
  modalTitle.textContent = p.title;
  modalRole.textContent = p.role;
  modalMeta.textContent = p.date.toUpperCase();
  modalDesc.innerHTML = '<ul>' + p.desc.map(d => `<li>${d}</li>`).join('') + '</ul>';
  modalStack.innerHTML = p.stack.map(s => `<span class="chip">${s}</span>`).join('');
  modalMedia.innerHTML = Array.from({length:p.media}).map((_,i)=>
    `<div class="media-slot"><span class="icon">▢</span><span class="label">Image ${i+1} — add file</span></div>`
  ).join('');
  lastFocused = document.activeElement;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalClose').focus();
}

function closeModal(){
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  if(lastFocused) lastFocused.focus();
}

document.querySelectorAll('.proj').forEach(card=>{
  card.addEventListener('click', ()=> openModal(card.dataset.project));
  card.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openModal(card.dataset.project); }
  });
});

document.getElementById('modalClose').addEventListener('click', closeModal);
overlay.addEventListener('click', (e)=>{ if(e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && overlay.classList.contains('open')) closeModal(); });

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, {threshold:0.12});
revealEls.forEach(el=>io.observe(el));