import { useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  name: string;
  category: string;
  tools: string;
  description: string;
  github: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "EviChain",
    category: "Forensic Integrity OS",
    tools: "Next.js App Router, TypeScript, Node.js, PostgreSQL (Prisma), SSE, PDFKit, 147 Tests",
    description:
      "Enterprise digital forensic evidence integrity & chain-of-custody platform with SHA-256 binary streaming, 4-tier RBAC, real-time SSE alerts, and forensic Cmd+K palette.",
    github: "https://github.com/ROhitg-upta",
    link: "https://github.com/ROhitg-upta",
    image: "/images/placeholder.webp",
  },
  {
    name: "Nyaya Revolution",
    category: "AI Legal Learning Startup",
    tools: "Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Supabase, Gemini API",
    description:
      "India's situation-based legal learning platform featuring interactive scenario simulation engine, Gemini AI legal tutoring, and comprehensive curriculum analytics.",
    github: "https://github.com/ROhitg-upta/Nyaya-Revolution-H",
    link: "https://nyaya-revolution-h-d6kt.vercel.app/",
    image: "/images/placeholder.webp",
  },
  {
    name: "Medi Mitra",
    category: "AI Medical Analyzer (SIH 2026)",
    tools: "React, TypeScript, Python (FastAPI), OpenCV, Tesseract OCR, BioBERT NER, Gemini Pro",
    description:
      "AI-driven medical report analyzer with 6-stage extraction pipeline, reference-range comparison, multilingual voice narration, and longitudinal biomarker tracking.",
    github: "https://github.com/ROhitg-upta/MEDI-MITRA",
    link: "https://medi-mitra-beryl.vercel.app/",
    image: "/images/placeholder.webp",
  },
  {
    name: "Evently",
    category: "AI Event Platform (UX Imperium)",
    tools: "React, Next.js, TypeScript, Tailwind CSS, AI Discovery Engine",
    description:
      "Trust-first AI event discovery and booking platform built with optimized user flows, social verification, and dynamic search indexing.",
    github: "https://github.com/Devansh0Tyagi-Codes/Evently",
    link: "https://evently-urcai.vercel.app/",
    image: "/images/placeholder.webp",
  },
  {
    name: "Paradox",
    category: "Narrative Puzzle Game",
    tools: "Next.js, React, TypeScript, Web Audio API, ARIA Accessibility, localStorage",
    description:
      "8-chamber browser-based narrative puzzle game with deterministic S/A/B/C performance rating engine, custom Web Audio synthesis, and full keyboard accessibility.",
    github: "https://github.com/ROhitg-upta/Paradox",
    link: "https://paradox-green.vercel.app/",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  useEffect(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p className="work-desc">{project.description}</p>
                <div className="work-action-links">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-btn"
                      data-cursor="disable"
                    >
                      Live Demo <MdArrowOutward />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-btn"
                      data-cursor="disable"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

