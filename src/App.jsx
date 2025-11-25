import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ExternalLink,
  Code2,
  Brain,
  Terminal,
  Cpu,
  Layers,
  Database,
  Globe,
  ChevronRight
} from 'lucide-react';

const content = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      spaces: "Spaces",
      experience: "Experience",
      contact: "Contact"
    },
    hero: {
      name: "Ben Khalifa Elhedi (Hedi.Bk)",
      role: "AI & Computer Vision Engineer",
      tagline: "Specialized in Agentic AI, LLMs and Computer Vision",
      cta: "View My Work"
    },
    skills: {
      title: "Technical Arsenal",
      categories: {
        ai: "AI & Machine Learning",
        dev: "Development",
        tools: "Tools & Frameworks"
      }
    },
    projects: {
      title: "Featured Projects",
      viewCode: "View Code"
    },
    spaces: {
      title: "My Knowledge Spaces",
      desc: "Curated collections of resources and experiments."
    },
    experience: {
      title: "Professional Journey"
    },
    footer: {
      rights: "All rights reserved."
    }
  },
  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      spaces: "Espaces",
      experience: "Expérience",
      contact: "Contact"
    },
    hero: {
      name: "Ben Khalifa Elhedi (Hedi.Bk)",
      role: "Ingénieur IA & Vision par Ordinateur",
      tagline: "Spécialisé en IA Agentique, LLMs et Vision par Ordinateur",
      cta: "Voir mes travaux"
    },
    skills: {
      title: "Arsenal Technique",
      categories: {
        ai: "IA & Machine Learning",
        dev: "Développement",
        tools: "Outils & Frameworks"
      }
    },
    projects: {
      title: "Projets en Vedette",
      viewCode: "Voir le code"
    },
    spaces: {
      title: "Mes Espaces de Connaissances",
      desc: "Collections de ressources et d'expériences."
    },
    experience: {
      title: "Parcours Professionnel"
    },
    footer: {
      rights: "Tous droits réservés."
    }
  }
};

const skillsData = {
  ai: [
    { name: "PyTorch", level: 65 },
    { name: "LangChain", level: 60 },
    { name: "OpenCV", level: 65 },
    { name: "YOLOv8", level: 60 },
    { name: "Mediapipe", level: 55 },
    { name: "Scikit-learn", level: 60 }
  ],
  dev: [
    { name: "Python", level: 75 },
    { name: "React.js", level: 60 },
    { name: "Node.js", level: 55 },
    { name: "React Native", level: 55 },
    { name: "MongoDB", level: 50 },
    { name: "SQL", level: 60 }
  ],
  tools: ["Git", "Hugging Face", "Gradio", "Streamlit"]
};

const projectsData = [
  {
    title: { en: "Platform User Analytics via Prompting", fr: "Analytique Utilisateur via Prompting" },
    desc: { en: "Mobile app with RAG agents for data analysis via natural language.", fr: "App mobile avec agents RAG pour l'analyse de données via langage naturel." },
    tags: ["Agentic AI", "RAG", "Mobile"],
    link: "https://github.com/Hedi-Bk/Mobile_App_ChatBot"
  },
  {
    title: { en: "LLaMA-2-7B Fine-Tuning with QLoRA", fr: "Fine-Tuning LLaMA-2-7B avec QLoRA" },
    desc: {
      en: "Fine-tuning the LLaMA-2-7B model using QLoRA on 1000 examples, entirely on Google Colab.",
      fr: "Fine-tuning du modèle LLaMA-2-7B avec QLoRA sur 1000 exemples, entièrement sur Google Colab."
    },
    tags: ["LLaMA-2-7B", "QLoRA", "Hugging Face", "Fine Tune LLMs", "Google Colab"],
    link: "https://github.com/Hedi-Bk/Fine_Tune_Llama2_7b"
  },
  {
    title: { en: "Brain Tumor Segmentation", fr: "Segmentation de Tumeurs Cérébrales" },
    desc: { en: "Swin-UNETR implementation on MRI scans (88.6% accuracy).", fr: "Implémentation Swin-UNETR sur scans IRM (Précision 88.6%)." },
    tags: ["Medical Imaging", "Swin-UNETR", "MRI"],
    link: "https://github.com/Hedi-Bk/Medical_Imaging_SwinTransformer"
  },
  {
    title: { en: "Anti-Spoofing Detection", fr: "Détection Anti-Spoofing" },
    desc: { en: "Real-time face spoofing detection (screens/print) using YOLOv8.", fr: "Détection de spoofing facial temps réel (écrans/imprimés) via YOLOv8." },
    tags: ["Computer Vision", "YOLOv8", "Security"],
    link: "https://github.com/Hedi-Bk/Anti-Spoofing-Detection"
  },
  {
    title: { en: "Car Counter & Traffic Estimation", fr: "Comptage de Voitures & Estimation Trafic" },
    desc: { en: "Traffic counting using YOLOv8 + SORT tracking.", fr: "Comptage de trafic utilisant YOLOv8 + tracking SORT." },
    tags: ["Computer Vision", "YOLOv8", "SORT"],
    link: "https://github.com/Hedi-Bk/Objetc_Detection__YOLO"
  },
];

const spacesData = [
  {
    title: { en: "Computer Vision Space", fr: "Espace Vision par Ordinateur" },
    link: "https://github.com/Hedi-Bk/My_ComputerVision_Space",
    icon: <Brain className="w-12 h-12 mb-4 text-blue-400" />
  },
  {
    title: { en: "Agentic AI Space", fr: "Espace IA Agentique" },
    link: "https://github.com/Hedi-Bk/My_ComputerVision_Space",
    icon: <Cpu className="w-12 h-12 mb-4 text-purple-400" />
  }
];

const experienceData = [
  {
    role: { en: "Full-Stack Mobile Developer", fr: "Développeur Mobile Full-Stack" },
    company: "Netdata Innovation",
    location: { en: "France/Remote", fr: "France/Distanciel" },
    period: { en: "Summer 2025", fr: "Été 2025" }
  },
  {
    role: { en: "Front-End Web Developer", fr: "Développeur Web Front-End" },
    company: "Axia Solutions",
    location: { en: "Tunisia", fr: "Tunisie" },
    period: { en: "Summer 2024", fr: "Été 2024" }
  }
];

function App() {
  const [lang, setLang] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = content[lang];

  const toggleLang = () => setLang(prev => prev === 'en' ? 'fr' : 'en');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 left-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Hedi.Bk
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['about', 'skills', 'projects', 'spaces', 'experience'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="hover:text-blue-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium capitalize"
                  >
                    {t.nav[item]}
                  </a>
                ))}
                <button
                  onClick={toggleLang}
                  className="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 hover:border-blue-500 transition-all text-xs font-bold"
                >
                  <Globe className="w-3 h-3" />
                  {lang.toUpperCase()}
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleLang}
                className="px-2 py-1 rounded border border-slate-700 text-xs font-bold"
              >
                {lang.toUpperCase()}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['about', 'skills', 'projects', 'spaces', 'experience'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium capitalize"
                >
                  {t.nav[item]}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="relative mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
          <div className="relative w-32 h-32 rounded-full bg-slate-800 flex items-center justify-center border-2 border-slate-700 overflow-hidden">
            <span className="text-4xl font-bold text-slate-500">HB</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 tracking-tight">
          {t.hero.name}
        </h1>
        <h2 className="text-xl sm:text-2xl text-blue-400 font-medium mb-6">
          {t.hero.role}
        </h2>
        <p className="max-w-2xl text-slate-400 text-lg mb-8">
          {t.hero.tagline}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="https://github.com/Hedi-Bk" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-blue-400 transition-all border border-slate-700">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/benkhalifa-hedi/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-blue-400 transition-all border border-slate-700">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:elhedi.benkhalifa@supcom.tn" className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-blue-400 transition-all border border-slate-700">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Terminal className="text-blue-500" /> {t.skills.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* AI/ML */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all">
              <h3 className="text-xl font-semibold text-blue-300 mb-6 flex items-center gap-2">
                <Brain className="w-5 h-5" /> {t.skills.categories.ai}
              </h3>
              <div className="space-y-4">
                {skillsData.ai.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dev */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all">
              <h3 className="text-xl font-semibold text-purple-300 mb-6 flex items-center gap-2">
                <Code2 className="w-5 h-5" /> {t.skills.categories.dev}
              </h3>
              <div className="space-y-4">
                {skillsData.dev.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-slate-300 mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5" /> {t.skills.categories.tools}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.tools.map((tool) => (
                <span key={tool} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:text-white hover:border-blue-500 transition-all cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Database className="text-blue-500" /> {t.projects.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)] overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5 text-blue-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title[lang]}
                </h3>
                <p className="text-slate-400 mb-4 h-12">
                  {project.desc[lang]}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-slate-900 text-blue-300 border border-slate-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Spaces Section */}
      <section id="spaces" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t.spaces.title}
          </h2>
          <p className="text-slate-400 mb-12">{t.spaces.desc}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spacesData.map((space, index) => (
              <a
                key={index}
                href={space.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-10 bg-slate-800 rounded-2xl border border-slate-700 hover:border-purple-500 hover:bg-slate-800/80 transition-all duration-300 group"
              >
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {space.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {space.title[lang]}
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-300">
                  <span>Explore Space</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12">
            {t.experience.title}
          </h2>

          <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500"></div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">
                    {exp.role[lang]}
                  </h3>
                  <span className="text-sm font-mono text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full border border-blue-900/50 w-fit mt-2 sm:mt-0">
                    {exp.period[lang]}
                  </span>
                </div>

                <div className="text-lg text-slate-300 font-medium mb-1">
                  {exp.company}
                </div>
                <div className="text-sm text-slate-500">
                  {exp.location[lang]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Ben Khalifa Elhedi. {t.footer.rights}</p>
      </footer>
    </div>
  );
}

export default App;
