'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

// Project type definition
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  challenges: string;
  githubLink: string;
  websiteLink?: string; // Optional website link
}

// Experience type definition
interface Experience {
  title: string;
  company: string;
  logo: string;
  period: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
}

// Project Card Component
const ProjectCard = ({ project }: { project: Project }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Special styling for projects
  const isCougarWise = project.title === "CougarWise";
  const isOtakuConcerts = project.title === "OtakuConcerts";
  const isDailyDose = project.title === "Daily Dose";
  const isSentenceGenerator = project.title === "Interactive Random Sentence Generator";
  const isThreadFlow = project.title === "ThreadFlow";
  const isFlavorMind = project.title === "FlavorMind";
  const isStellarUrl = project.title === "Stellar URL Shortener";
  const isJobTracker = project.title === "Job Application Tracker Hub";
  const isFaceRecognition = project.title === "Face Recognition Security System";
  const isSkinCancer = project.title === "Skin Cancer Detection System";
  
  // Get appropriate styling based on project
  const getProjectStyle = () => {
    if (isCougarWise) {
      return {
        border: 'border-red-600',
        background: 'bg-blue-900/90',
        title: 'text-white',
        buttonBg: 'bg-red-600 hover:bg-red-500',
        buttonBorder: 'border-red-600 text-white hover:bg-red-600/20',
        tagBg: 'bg-red-900/30 text-white',
      };
    } else if (isOtakuConcerts) {
      return {
        border: 'border-purple-500',
        background: 'bg-gradient-to-br from-purple-900/90 to-pink-900/90',
        title: 'text-pink-300',
        buttonBg: 'bg-purple-600 hover:bg-purple-500',
        buttonBorder: 'border-pink-500 text-pink-300 hover:bg-pink-600/20',
        tagBg: 'bg-purple-800/40 text-pink-200',
      };
    } else if (isDailyDose) {
      return {
        border: 'border-amber-500',
        background: 'bg-gradient-to-br from-amber-100/95 to-amber-300/95',
        title: 'text-amber-950',
        buttonBg: 'bg-amber-600 hover:bg-amber-500',
        buttonBorder: 'border-amber-700 text-amber-900 hover:bg-amber-400/40',
        tagBg: 'bg-amber-500/50 text-amber-950 font-medium',
      };
    } else if (isSentenceGenerator) {
      return {
        border: 'border-blue-400',
        background: 'bg-gradient-to-br from-indigo-900/90 to-blue-800/90',
        title: 'text-blue-300',
        buttonBg: 'bg-blue-600 hover:bg-blue-500',
        buttonBorder: 'border-blue-400 text-blue-300 hover:bg-blue-700/30',
        tagBg: 'bg-indigo-700/50 text-blue-200',
      };
    } else if (isThreadFlow) {
      return {
        border: 'border-gray-400',
        background: 'bg-gradient-to-br from-gray-900/95 to-gray-800/95',
        title: 'text-gray-300',
        buttonBg: 'bg-gray-700 hover:bg-gray-600',
        buttonBorder: 'border-gray-500 text-gray-300 hover:bg-gray-700/50',
        tagBg: 'bg-gray-700/70 text-green-300',
      };
    } else if (isFlavorMind) {
      return {
        border: 'border-yellow-500',
        background: 'bg-black/95',
        title: 'text-yellow-400',
        buttonBg: 'bg-yellow-600 hover:bg-yellow-500',
        buttonBorder: 'border-yellow-500 text-yellow-400 hover:bg-yellow-600/20',
        tagBg: 'bg-yellow-900/30 text-yellow-300',
      };
    } else if (isStellarUrl) {
      return {
        border: 'border-blue-400',
        background: 'bg-gradient-to-br from-indigo-900/90 to-purple-900/90',
        title: 'text-blue-300',
        buttonBg: 'bg-blue-600 hover:bg-blue-500',
        buttonBorder: 'border-blue-400 text-blue-300 hover:bg-blue-700/30',
        tagBg: 'bg-indigo-800/40 text-blue-200',
      };
    } else if (isJobTracker) {
      return {
        border: 'border-teal-500',
        background: 'bg-gradient-to-br from-gray-900/95 to-teal-900/80',
        title: 'text-teal-300',
        buttonBg: 'bg-teal-600 hover:bg-teal-500',
        buttonBorder: 'border-teal-500 text-teal-300 hover:bg-teal-700/30',
        tagBg: 'bg-teal-800/40 text-teal-200',
      };
    } else if (isFaceRecognition) {
      return {
        border: 'border-red-600',
        background: 'bg-gradient-to-br from-gray-950/95 to-red-950/80',
        title: 'text-red-400',
        buttonBg: 'bg-red-700 hover:bg-red-600',
        buttonBorder: 'border-red-600 text-red-400 hover:bg-red-700/30',
        tagBg: 'bg-red-900/30 text-red-300',
      };
    } else if (isSkinCancer) {
      return {
        border: 'border-cyan-500',
        background: 'bg-gradient-to-br from-blue-950/95 to-cyan-900/80',
        title: 'text-cyan-300',
        buttonBg: 'bg-cyan-600 hover:bg-cyan-500',
        buttonBorder: 'border-cyan-500 text-cyan-300 hover:bg-cyan-700/30',
        tagBg: 'bg-cyan-900/30 text-cyan-200',
      };
    } else {
      return {
        border: 'border-yellow-500',
        background: 'bg-black/50',
        title: 'text-yellow-400',
        buttonBg: 'bg-yellow-600 hover:bg-yellow-500',
        buttonBorder: 'border-yellow-600 text-yellow-400 hover:bg-yellow-600/20',
        tagBg: 'bg-blue-500/20 text-blue-300',
      };
    }
  };
  
  const style = getProjectStyle();
  
  return (
    <div className={`border ${style.border} rounded-lg overflow-hidden ${style.background} backdrop-blur-sm transition-transform duration-300 hover:scale-102 hover:shadow-glow`}>
      <div 
        className="cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`h-48 relative ${isCougarWise ? 'bg-blue-900' : isOtakuConcerts ? 'bg-purple-900' : isDailyDose ? 'bg-amber-200' : isSentenceGenerator ? 'bg-indigo-900' : isThreadFlow ? 'bg-gray-900' : isFlavorMind ? 'bg-black' : isStellarUrl ? 'bg-purple-900' : isJobTracker ? 'bg-teal-900' : isFaceRecognition ? 'bg-gray-950' : isSkinCancer ? 'bg-blue-950' : ''}`}>
          {project.image ? (
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className={`${isCougarWise || isOtakuConcerts || isDailyDose || isSentenceGenerator || isThreadFlow || isFlavorMind || isStellarUrl || isJobTracker || isFaceRecognition || isSkinCancer ? 'object-contain p-4' : 'object-cover'}`}
            />
          ) : (
            <div className="h-full bg-yellow-900/30 flex items-center justify-center">
              <span className="text-xl text-yellow-400">{project.title}</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className={`text-xl ${style.title} mb-2`}>
            {isCougarWise ? (
              <span>
                <span className="text-red-600">Cougar</span>
                <span className="text-white">Wise</span>
              </span>
            ) : isOtakuConcerts ? (
              <span>
                <span className="text-purple-300">Otaku</span>
                <span className="text-pink-300">Concerts</span>
                <span className="ml-1 text-yellow-300 text-sm">🎵</span>
              </span>
            ) : isDailyDose ? (
              <span className="text-amber-950 font-medium">
                Daily Dose
                <span className="ml-1 text-sm">☀️</span>
              </span>
            ) : isSentenceGenerator ? (
              <span>
                <span className="text-blue-300">Interactive</span>
                <span className="text-indigo-300"> Random</span>
                <span className="block text-cyan-300">Sentence Generator</span>
                <span className="ml-1 text-white text-sm">📝</span>
              </span>
            ) : isThreadFlow ? (
              <span>
                <span className="text-gray-300">Thread</span>
                <span className="text-green-300">Flow</span>
                <span className="ml-1 text-green-200 text-sm">🧵</span>
              </span>
            ) : isFlavorMind ? (
              <span>
                <span className="text-yellow-400">Flavor</span>
                <span className="text-yellow-300">Mind</span>
                <span className="ml-1 text-yellow-200 text-sm">🍳</span>
              </span>
            ) : isStellarUrl ? (
              <span>
                <span className="text-blue-300">Stellar</span>
                <span className="text-purple-300">URL</span>
                <span className="text-pink-300">Shortener</span>
                <span className="ml-1 text-yellow-200 text-sm">🌟</span>
              </span>
            ) : isJobTracker ? (
              <span>
                <span className="text-teal-300">Job Tracker</span>
                <span className="text-teal-200">Hub</span>
                <span className="ml-1 text-teal-100 text-sm">🎯</span>
              </span>
            ) : isFaceRecognition ? (
              <span>
                <span className="text-red-400">Face Recognition</span>
                <span className="text-red-300">Security System</span>
                <span className="ml-1 text-red-200 text-sm">🔒</span>
              </span>
            ) : isSkinCancer ? (
              <span>
                <span className="text-cyan-300">Skin Cancer</span>
                <span className="text-cyan-200">Detection System</span>
                <span className="ml-1 text-cyan-100 text-sm">🔍</span>
              </span>
            ) : (
              project.title
            )}
          </h3>
          <p className={`${isDailyDose ? 'text-amber-950' : isSentenceGenerator ? 'text-blue-100' : 'text-gray-300'} line-clamp-2`}>{project.description}</p>
        </div>
      </div>
      
      {isOpen && (
        <div className="p-4 border-t border-yellow-500/50">
          <div className="mb-4">
            <h4 className={`text-lg ${isDailyDose ? 'text-amber-950 font-medium' : isSentenceGenerator ? 'text-blue-300 font-medium' : 'text-blue-400'} mb-2`}>Description</h4>
            <p className={`${isDailyDose ? 'text-amber-950 font-medium' : isSentenceGenerator ? 'text-blue-100' : 'text-gray-300'} text-sm`}>{project.description}</p>
          </div>

          <div className="mb-4">
            <h4 className={`text-lg ${isDailyDose ? 'text-amber-950 font-medium' : isSentenceGenerator ? 'text-blue-300 font-medium' : 'text-blue-400'} mb-2`}>Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className={`px-2 py-1 ${style.tagBg} text-xs rounded-full`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className={`text-lg ${isDailyDose ? 'text-amber-950 font-medium' : isSentenceGenerator ? 'text-blue-300 font-medium' : 'text-blue-400'} mb-2`}>Challenges</h4>
            <p className={`${isDailyDose ? 'text-amber-950 font-medium' : isSentenceGenerator ? 'text-blue-100' : 'text-gray-300'} text-sm`}>{project.challenges}</p>
          </div>
          
          <div className="flex space-x-2">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-block ${style.buttonBg} text-black font-bold py-2 px-4 rounded-md transition-colors`}
            >
              View on GitHub
            </a>
            
            {project.websiteLink && (
              <a 
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md transition-colors`}
              >
                Visit Website
              </a>
            )}
            
            <button 
              onClick={() => setIsOpen(false)}
              className={`inline-block bg-transparent ${style.buttonBorder} border font-bold py-2 px-4 rounded-md transition-colors`}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Projects data
const projects: Project[] = [
  {
    title: "CougarWise",
    description: "Your intelligent financial companion built for college students. Track expenses, create budgets, set goals, and get personalized financial advice all in one place.",
    image: "/projects/cougarwise.png",
    technologies: ["React 19", "Material UI", "FastAPI", "MongoDB", "OpenAI", "TensorFlow", "Chart.js", "Python"],
    challenges: "Developing AI-driven financial analysis algorithms tailored to student spending patterns, implementing secure authentication for sensitive financial data, and creating intuitive visualizations for complex financial information.",
    githubLink: "https://github.com/BG-legacy/CougarWise",
  },
  {
    title: "OtakuConcerts",
    description: "A cutting-edge ticket reservation system for anime music enthusiasts that allows fans to browse upcoming concerts from legendary anime artists and secure tickets using a point-based system.",
    image: "/projects/animeconcert.jpeg",
    technologies: ["Python", "SQLite", "TCP Sockets", "JSON", "Terminal UI"],
    challenges: "Implementing a point-based economy with loyalty discounts, ensuring secure user authentication, and creating a reliable socket-based communication protocol between client and server.",
    githubLink: "https://github.com/BG-legacy/OtakuConcerts",
  },
  {
    title: "Daily Dose",
    description: "A web app designed to inspire and support users in their daily lives by curating inspirational quotes, mental health tips, and productivity hacks with AI-driven recommendations based on mood and journal entries.",
    image: "/projects/Daily-Dose.png",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "AWS DynamoDB", "OpenAI API", "Chart.js", "NextAuth.js", "Docker", "Kubernetes"],
    challenges: "Designing accurate AI-driven recommendations based on journal tone analysis, balancing frontend and backend responsibilities, and maintaining sensitivity to mental health needs.",
    githubLink: "https://github.com/BG-legacy/daily-dose",
  },
  {
    title: "Interactive Random Sentence Generator",
    description: "A React-based web application that allows users to create random sentences by adding words to a word bank and generating grammatically correct sentences following specific syntactic rules.",
    image: "/projects/sentence-generator.jpg",
    technologies: ["React.js", "CSS3", "JavaScript ES6+", "HTML5"],
    challenges: "Implementing formal language grammar rules to ensure syntactically correct sentences, creating an intuitive user interface for word categorization, and developing responsive animated components.",
    githubLink: "https://github.com/BG-legacy/Interactive-Random-Sentence-Generator",
    websiteLink: "https://random-sentence-generator.vercel.app/",
  },
  {
    title: "ThreadFlow",
    description: "A high-performance full-stack application demonstrating the power of C programming for backend services combined with a sleek Next.js frontend, featuring efficient thread management, real-time communication, and task processing.",
    image: "/projects/threadflow.jpg",
    technologies: ["C", "libmicrohttpd", "Next.js", "Thread Pool", "RESTful API", "Docker","WebSockets"],
    challenges: "Implementing thread synchronization primitives, memory management and leak prevention, efficient network programming in C, and integrating C services with modern web technologies.",
    githubLink: "https://github.com/BG-legacy/ThreadFlow",
    websiteLink: "https://thread-flow.vercel.app/",
  },
  {
    title: "Stellar URL Shortener",
    description: "A lightning-fast, modern URL shortening service with custom aliases, detailed click analytics, and a responsive design built with Spring Boot and Angular.",
    image: "/projects/stellar-url.jpg",
    technologies: ["Spring Boot", "Angular", "MongoDB", "Docker", "TypeScript", "Material Design", "RxJS"],
    challenges: "Implementing real-time statistics tracking, optimizing redirect performance, and creating a responsive design that works across all devices while maintaining security.",
    githubLink: "https://github.com/BG-legacy/BG-URL-Shortener",
    websiteLink: "https://stellar-url.vercel.app/"
  },
  {
    title: "FlavorMind",
    description: "An AI-powered recipe recommendation system that generates personalized recipes with detailed cost estimates and cooking instructions using artificial intelligence.",
    image: "/projects/flavormind.jpg",
    technologies: ["React.js", "Node.js", "Python", "LangChain", "Firebase", "Material-UI", "USDA API", "OpenAI API", "Docker"],
    challenges: "Implementing AI-powered recipe generation, accurate ingredient cost calculation using USDA data, and creating a seamless user experience across multiple technologies.",
    githubLink: "https://github.com/BG-legacy/FlavorMind",
    websiteLink: "https://recipe-recommender-9d84c.web.app/"
  },
  {
    title: "ProsperIQ",
    description: "A cutting-edge platform revolutionizing how job seekers manage their applications with AI-powered insights, dynamic dashboards, and collaboration tools to simplify and optimize the job search process.",
    image: "/projects/job-tracker.jpg",
    technologies: ["React.js", "Django", "PostgreSQL", "TensorFlow", "JWT"],
    challenges: "Implementing AI-powered recommendation systems, creating interactive data visualizations, and building a secure collaboration system with role-based permissions.",
    githubLink: "https://github.com/BG-legacy/job-application-tracker-hub",
    
  },
  {
    title: "Face Recognition Security System",
    description: "A smart security system that uses facial recognition to control access and provide visual feedback through an Arduino-controlled LED and OLED display setup for real-time face detection and identification.",
    image: "/projects/face-recognition.jpg",
    technologies: ["Python", "OpenCV", "Arduino", "C++", "NumPy", "PySerial", "OLED Display"],
    challenges: "Implementing real-time face detection with confidence scoring, establishing reliable serial communication between Python and Arduino, and optimizing performance on limited hardware resources.",
    githubLink: "https://github.com/BG-legacy/Face-Recognition",
  },
  {
    title: "Skin Cancer Detection System",
    description: "A web application designed to assist in the detection and diagnosis of skin cancer using deep learning models, allowing users to upload images of skin lesions and receive predictions with confidence scores and explanations.",
    image: "/projects/skin-cancer.jpg",
    technologies: ["Python", "TensorFlow", "Flask", "Deep Learning", "HAM10000 Dataset", "HTML/CSS", "JavaScript"],
    challenges: "Training accurate deep learning models on medical imagery, providing meaningful confidence scores and explanations for predictions, and creating an intuitive interface for medical professionals.",
    githubLink: "https://github.com/BG-legacy/Ai--powered-skin-detection",
  }
];

// Experience data
const experiences: Experience[] = [
  // Most recent experiences (Present)
  {
    title: "Student Startup Co-Founder",
    company: "Daily Dose",
    logo: "/companies/Daily-Dose.png",
    period: "Jan. 2025 – Present",
    description: "Co-founded an AI-powered journaling application focused on enhancing mental wellness through personalized insights and analytics.",
    responsibilities: [
      "Led development of core features including mood tracking and intelligent journaling prompts",
      "Built the application using Next.js frontend and Node.js backend with AWS DynamoDB",
      "Conduct weekly team meetings to strategize product development and marketing initiatives",
      "Network with industry professionals and potential investors to promote startup growth"
    ],
    achievements: [
      "Generated 1,700+ impressions and reached 800+ users in early launch phase",
      "Drove 400+ video views with over 1 hour of total watch time, demonstrating strong user engagement",
      "Collaborated with mental health professionals to ensure app effectiveness and clinical relevance",
      "Successfully moved the application from concept to production with positive early user feedback"
    ]
  },
  {
    title: "Founder & President",
    company: "ColorStack CSU",
    logo: "/companies/colorstack.png",
    period: "Jan. 2025 – Present",
    description: "Founded and led Columbus State University's first ColorStack chapter, dedicated to increasing the number of Black and Latinx students in tech through community building and career development.",
    responsibilities: [
      "Established the organization's structure, mission, and strategic initiatives",
      "Organized and facilitated career workshops, networking events, and technical training sessions",
      "Developed and implemented mental health support programs for underrepresented tech students",
      "Collaborated with university administration and industry partners to secure resources and opportunities"
    ],
    achievements: [
      "Successfully launched CSU's first-ever ColorStack chapter, creating an inclusive tech community",
      "Organized 7 career workshops connecting students with industry professionals and career opportunities",
      "Initiated mental health initiatives specifically designed for underrepresented students in tech",
      "Built a supportive community that enhances retention and success of Black and Latinx CS students"
    ]
  },
  // Apprenticeship (ends May 2025)
  {
    title: "Software Developer Apprentice",
    company: "Propel2Excel",
    logo: "/companies/propel2excel.png",
    period: "Nov. 2024 – May 2025",
    description: "Selected from a highly competitive pool of applicants (3% acceptance rate) based on problem-solving abilities and technical potential.",
    responsibilities: [
      "Developed and implemented frontend components using Wix and React.js to enhance user experience",
      "Collaborated with a cross-functional apprenticeship team to deliver high-quality solutions",
      "Identified and resolved critical bugs and UI issues to improve site functionality",
      "Actively participated in knowledge-sharing sessions and technical discussions"
    ],
    achievements: [
      "Contributed significantly to the backbone architecture of the company's Wix website",
      "Received valuable mentorship from industry professionals, building a strong professional network",
      "Developed essential job search and interview skills through targeted career development sessions",
      "Applied debugging techniques that improved website stability and user experience"
    ]
  },
  // Internship (2024)
  {
    title: "Software Engineer Intern",
    company: "Cybernetics Global",
    logo: "/companies/cybernetics.png",
    period: "May 2024 – Sept. 2024",
    description: "Contributed to MVP development as part of an Agile/Scrum team, gaining valuable industry experience while working on both frontend and backend components.",
    responsibilities: [
      "Collaborated with cross-functional teams including design, product, and engineering to deliver user-centric features",
      "Developed responsive web interfaces using HTML, CSS, and JavaScript with focus on cross-device functionality",
      "Deployed and maintained backend services using AWS EC2 and S3 infrastructure",
      "Participated in regular code reviews and sprint planning sessions as part of the Agile workflow"
    ],
    achievements: [
      "Played a key role in helping the team reach MVP stage through timely feature delivery",
      "Implemented quality assurance testing processes that improved overall product stability",
      "Enhanced application performance by optimizing backend services and streamlining storage solutions",
      "Gained valuable industry experience working alongside both experienced professionals and fellow students"
    ]
  },
  // Remove the placeholder positions that don't represent real experience
];

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Add custom styles for hover effects
    const style = document.createElement('style');
    style.innerHTML = `
      .hover\\:scale-102:hover {
        transform: scale(1.02);
      }
      .hover\\:shadow-glow:hover {
        box-shadow: 0 0 15px rgba(234, 179, 8, 0.5);
      }
    `;
    document.head.appendChild(style);
    
    // Skills slider functionality
    const skillsContainer = document.getElementById('skills-container');
    const skillsSlider = document.getElementById('skills-slider');
    const prevSkillBtn = document.getElementById('prev-skill');
    const nextSkillBtn = document.getElementById('next-skill');
    const skillsPagination = document.querySelectorAll('#skills-pagination button');
    
    if (skillsContainer && skillsSlider && prevSkillBtn && nextSkillBtn) {
      let activeSkillIndex = 0;
      const skillCategories = skillsSlider.children.length;
      
      const scrollToSkill = (index: number) => {
        if (index >= 0 && index < skillCategories) {
          activeSkillIndex = index;
          const containerWidth = skillsContainer.offsetWidth;
          skillsContainer.scrollTo({
            left: index * containerWidth,
            behavior: 'smooth'
          });
          
          // Update active pagination dot
          skillsPagination.forEach((dot, i) => {
            if (i === index) {
              dot.classList.remove('bg-gray-600');
              dot.classList.add('bg-yellow-400');
            } else {
              dot.classList.remove('bg-yellow-400');
              dot.classList.add('bg-gray-600');
            }
          });
        }
      };
      
      prevSkillBtn.addEventListener('click', () => {
        const prevIndex = (activeSkillIndex - 1 + skillCategories) % skillCategories;
        scrollToSkill(prevIndex);
      });
      
      nextSkillBtn.addEventListener('click', () => {
        const nextIndex = (activeSkillIndex + 1) % skillCategories;
        scrollToSkill(nextIndex);
      });
      
      // Handle pagination dots
      skillsPagination.forEach((dot) => {
        dot.addEventListener('click', () => {
          const index = parseInt(dot.getAttribute('data-index') || '0');
          scrollToSkill(index);
        });
      });
    }
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const scrollToProject = (index: number) => {
    if (projectsContainerRef.current && index >= 0 && index < projects.length) {
      setActiveProjectIndex(index);
      const containerWidth = projectsContainerRef.current.offsetWidth;
      const scrollPosition = index * containerWidth;
      projectsContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNextProject = () => {
    const nextIndex = (activeProjectIndex + 1) % projects.length;
    scrollToProject(nextIndex);
  };

  const handlePrevProject = () => {
    const prevIndex = (activeProjectIndex - 1 + projects.length) % projects.length;
    scrollToProject(prevIndex);
  };

  const toggleExperience = (index: number) => {
    if (expandedExperience === index) {
      setExpandedExperience(null);
    } else {
      setExpandedExperience(index);
    }
  };

  return (
    <div className="min-h-screen overflow-y-auto relative"
      style={{
        background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
        color: 'white'
      }}>
      
      {/* Star background for entire page */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {/* Regular stars */}
        {[...Array(200)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          return (
            <div 
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: Math.random(),
                animationName: 'twinkle',
                animationDuration: `${Math.random() * 5 + 2}s`,
                animationIterationCount: 'infinite',
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          );
        })}
        
        {/* A few brighter stars */}
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 3 + 2;
          return (
            <div 
              key={`bright-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.7)',
                animationName: 'twinkle',
                animationDuration: `${Math.random() * 7 + 3}s`,
                animationIterationCount: 'infinite',
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          );
        })}
      </div>

      {/* Hero Section */}
      <section 
        data-section="intro" 
        className={`min-h-screen flex flex-col items-center justify-center p-6 relative transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Content */}
        <div className="z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl text-yellow-400 mb-8 font-['Star_Jedi'] tracking-wider" style={{
            textShadow: '0 0 10px rgba(255, 232, 31, 0.7), 0 0 20px rgba(255, 232, 31, 0.5)'
          }}>BERNARD GINN JR.</h1>
          <h2 className="text-2xl md:text-3xl mb-12 text-blue-400">PORTFOLIO</h2>
          <p className="text-xl max-w-2xl text-center text-gray-200">
            Welcome to my portfolio! Scroll down to explore my skills, projects, and experience.
          </p>
          <div className="mt-12 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        data-section="about"
        className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl text-yellow-400 mb-8">ABOUT ME</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Profile Image */}
          <div className="relative w-full h-80 md:h-[450px] rounded-lg overflow-hidden border-2 border-blue-400 mx-auto">
            <div className="h-full">
              <div className="absolute inset-0 w-full h-full">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  {/* <span className="text-yellow-400 text-xl">Your Photo</span> */}
                  <Image 
                    src="/your-image-1.jpg"
                    alt="Bernard Ginn Jr."
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* About Text */}
          <div className="space-y-5 self-start">
            <p className="text-base md:text-lg">
              Hi, I&apos;m Bernard Ginn Jr., a passionate and reliable software developer with a strong foundation in computer science and a genuine curiosity for how things work. What started as an interest in technology quickly turned into a purpose-driven career where I aim to build smart, meaningful solutions that make an impact.
            </p>
            <p className="text-base md:text-lg">
              I have a deep appreciation for all areas of software development—from full-stack and backend architecture to intuitive frontend design and the ever-evolving world of AI and machine learning. I take pride in writing clean, efficient code and creating user experiences that are both functional and thoughtful.
            </p>
            <p className="text-base md:text-lg">
              Beyond the technical side, I care deeply about people and community. Whether it&apos;s leading student tech clubs, organizing networking events, or simply sharing knowledge, I enjoy creating spaces where others feel supported and inspired to grow. I believe in staying grounded, being consistent, and always showing up—both for my team and for myself.
            </p>
            <p className="text-base md:text-lg">
              When I&apos;m not coding, you&apos;ll probably find me journaling, working out, or watching anime. These things keep me balanced, creative, and always ready for the next challenge. I bring energy, integrity, and a constant drive to learn to everything I do, and I&apos;m excited about what the future holds.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        data-section="skills"
        className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl text-yellow-400 mb-8">SKILLS</h2>
        
        <div className="w-full max-w-6xl mx-auto relative">
          {/* Left Arrow */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-yellow-400 p-2 rounded-full shadow-lg transform transition-transform hover:scale-110 -translate-x-1/2 md:translate-x-0"
            aria-label="Previous skill category"
            id="prev-skill"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Skills Container */}
          <div 
            className="overflow-x-hidden w-full"
            style={{ scrollSnapType: 'x mandatory' }}
            id="skills-container"
          >
            <div className="flex w-full" id="skills-slider">
              {/* Languages */}
              <div className="w-full flex-shrink-0" style={{ scrollSnapAlign: 'start' }}>
                <div className="border border-blue-500 rounded-lg p-6 bg-black/50 backdrop-blur-sm mx-auto max-w-2xl">
                  <h3 className="text-2xl text-blue-400 mb-4">Languages</h3>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/Java-Logo.jpg" alt="Java" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">Java</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/python-logo.png" alt="Python" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">Python</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/javascript.png" alt="JavaScript" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">JavaScript</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/typescript.png" alt="TypeScript" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">TypeScript</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/c.png" alt="C" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">C</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/c++.png" alt="C++" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">C++</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/html:css.png" alt="HTML/CSS" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">HTML/CSS</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/sql.png" alt="SQL" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">SQL</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Frontend */}
              <div className="w-full flex-shrink-0" style={{ scrollSnapAlign: 'start' }}>
                <div className="border border-green-500 rounded-lg p-6 bg-black/50 backdrop-blur-sm mx-auto max-w-2xl">
                  <h3 className="text-2xl text-green-400 mb-4">Frontend</h3>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/react.png" alt="React.js" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">React.js</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/next.png" alt="Next.js" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">Next.js</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/angular.jpeg" alt="Angular" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">Angular</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/html:css.png" alt="HTML/CSS" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">HTML/CSS</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Backend */}
              <div className="w-full flex-shrink-0" style={{ scrollSnapAlign: 'start' }}>
                <div className="border border-purple-500 rounded-lg p-6 bg-black/50 backdrop-blur-sm mx-auto max-w-2xl">
                  <h3 className="text-2xl text-purple-400 mb-4">Backend</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/node.png" alt="Node.js" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">Node.js</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/express.png" alt="Express.js" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">Express.js</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/springboot.png" alt="Spring Boot" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">Spring Boot</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/fastapi.png" alt="FastAPI" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">FastAPI</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/django.png" alt="Django" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">Django</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/flask.png" alt="Flask" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">Flask</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI & ML */}
              <div className="w-full flex-shrink-0" style={{ scrollSnapAlign: 'start' }}>
                <div className="border border-red-500 rounded-lg p-6 bg-black/50 backdrop-blur-sm mx-auto max-w-2xl">
                  <h3 className="text-2xl text-red-400 mb-4">AI & Machine Learning</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/tensorflow.png" alt="TensorFlow" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">TensorFlow</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/openai.png" alt="OpenAI API" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">OpenAI API</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/langchain.png" alt="LangChain" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">LangChain</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/deeplearning.jpeg" alt="Deep Learning" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">Deep Learning</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/numpy.png" alt="NumPy" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">NumPy</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/pandas.png" alt="pandas" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">pandas</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/scikit-learn.png" alt="scikit-learn" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">scikit-learn</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Databases */}
              <div className="w-full flex-shrink-0" style={{ scrollSnapAlign: 'start' }}>
                <div className="border border-yellow-500 rounded-lg p-6 bg-black/50 backdrop-blur-sm mx-auto max-w-2xl">
                  <h3 className="text-2xl text-yellow-400 mb-4">Databases</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/mongodb.png" alt="MongoDB" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">MongoDB</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/dynamodb .png" alt="DynamoDB" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">DynamoDB</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/sqlite.jpeg" alt="SQLite" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">SQLite</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/postgresql.png" alt="PostgreSQL" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">PostgreSQL</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Cloud & DevOps */}
              <div className="w-full flex-shrink-0" style={{ scrollSnapAlign: 'start' }}>
                <div className="border border-blue-500 rounded-lg p-6 bg-black/50 backdrop-blur-sm mx-auto max-w-2xl">
                  <h3 className="text-2xl text-blue-400 mb-4">Cloud & DevOps</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/aws.png" alt="AWS" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">AWS</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/docker.png" alt="Docker" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">Docker</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/kubernetes.png" alt="Kubernetes" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">Kubernetes</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Developer Tools */}
              <div className="w-full flex-shrink-0" style={{ scrollSnapAlign: 'start' }}>
                <div className="border border-green-500 rounded-lg p-6 bg-black/50 backdrop-blur-sm mx-auto max-w-2xl">
                  <h3 className="text-2xl text-green-400 mb-4">Developer Tools</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/vscode.png" alt="VS Code" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">VS Code</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/eclipse.png" alt="Eclipse" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">Eclipse</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image src="/logos/github.png" alt="GitHub" fill className="object-contain" />
                      </div>
                      <span className="text-gray-300 text-sm text-center">GitHub</span>
                    </div>
                    <div className="flex flex-col items-center">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Arrow */}
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-yellow-400 p-2 rounded-full shadow-lg transform transition-transform hover:scale-110 translate-x-1/2 md:translate-x-0"
            aria-label="Next skill category"
            id="next-skill"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2" id="skills-pagination">
            <button className="w-3 h-3 rounded-full bg-yellow-400" aria-label="Go to Languages" data-index="0"></button>
            <button className="w-3 h-3 rounded-full bg-gray-600 hover:bg-gray-400" aria-label="Go to Frontend" data-index="1"></button>
            <button className="w-3 h-3 rounded-full bg-gray-600 hover:bg-gray-400" aria-label="Go to Backend" data-index="2"></button>
            <button className="w-3 h-3 rounded-full bg-gray-600 hover:bg-gray-400" aria-label="Go to AI & Machine Learning" data-index="3"></button>
            <button className="w-3 h-3 rounded-full bg-gray-600 hover:bg-gray-400" aria-label="Go to Databases" data-index="4"></button>
            <button className="w-3 h-3 rounded-full bg-gray-600 hover:bg-gray-400" aria-label="Go to Cloud & DevOps" data-index="5"></button>
            <button className="w-3 h-3 rounded-full bg-gray-600 hover:bg-gray-400" aria-label="Go to Developer Tools" data-index="6"></button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        data-section="projects"
        className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl text-yellow-400 mb-8">PROJECTS</h2>
        
        <div className="w-full max-w-7xl mx-auto relative">
          {/* Left Arrow */}
          <button 
            onClick={handlePrevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-yellow-400 p-2 rounded-full shadow-lg transform transition-transform hover:scale-110 -translate-x-1/2 md:translate-x-0"
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Projects Container */}
          <div 
            ref={projectsContainerRef}
            className="overflow-x-hidden w-full"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <div className="flex w-full">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="mx-auto max-w-2xl">
                    <ProjectCard project={project} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Arrow */}
          <button 
            onClick={handleNextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-yellow-400 p-2 rounded-full shadow-lg transform transition-transform hover:scale-110 translate-x-1/2 md:translate-x-0"
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeProjectIndex ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        data-section="experience"
        className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl text-yellow-400 mb-8">EXPERIENCE</h2>
        <div className="max-w-5xl mx-auto w-full space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`border border-yellow-500 rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-300 ${
                expandedExperience === index ? 'bg-black/70' : 'bg-black/50 hover:bg-black/60'
              }`}
            >
              {/* Experience Header - Always visible */}
              <div 
                className="p-4 flex items-center cursor-pointer"
                onClick={() => toggleExperience(index)}
              >
                {/* Company Logo */}
                <div className="h-16 w-16 relative flex-shrink-0 mr-4 bg-white/10 rounded-md overflow-hidden">
                  <Image 
                    src={exp.logo} 
                    alt={exp.company} 
                    fill 
                    className="object-contain p-2" 
                  />
                </div>
                
                {/* Basic Info */}
                <div className="flex-grow">
                  <h3 className="text-xl text-blue-400">{exp.title}</h3>
                  <p className="text-yellow-400">{exp.company} • {exp.period}</p>
                </div>
                
                {/* Expand/Collapse Icon */}
                <div className="text-yellow-400 transition-transform duration-300 transform">
                  {expandedExperience === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
              </div>
              
              {/* Expanded Details */}
              {expandedExperience === index && (
                <div className="p-4 pt-0 border-t border-yellow-500/30">
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-lg text-blue-400 mb-2">Responsibilities</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg text-blue-400 mb-2">Key Achievements</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section 
        data-section="contact"
        className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl text-yellow-400 mb-8">CONTACT</h2>
        <div className="max-w-lg mx-auto w-full">
          <p className="text-center text-lg mb-8">
            Interested in working together or have questions? Feel free to reach out!
          </p>
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-xl text-blue-400">For Recruiters & Opportunities</h3>
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M22,17c0,1.1-0.9,2-2,2H4 c-1.1,0-2-0.9-2-2V7c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2V17z"/>
                  <path d="M12,11.7L22,7v2L12,13.7L2,9v-2L12,11.7z"/>
                </svg>
                <a href="mailto:bginnjr20@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  bginnjr20@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                </svg>
                <a href="https://www.linkedin.com/in/bernard-ginn-jr/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                linkedin.com/in/bernard-ginn-jr/
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <a 
                href="https://github.com/BG-legacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-3 px-6 rounded-md transition-transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Check out my GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 