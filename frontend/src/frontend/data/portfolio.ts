export const siteConfig = {
  name: "Bernard Ginn Jr.",
  initials: "BG",
  title: "Full-Stack Developer",
  tagline: "Full-Stack Developer",
  university: "Georgia Institute of Technology",
  classOf: "M.S. CS · Class of 2027",
  email: "bginnjr20@gmail.com",
  location: "United States",
  bio: "Software engineer focused on systems, AI, and meaningful impact — one product, one community, one line of code at a time.",
  socials: {
    github: "https://github.com/BG-legacy?tab=repositories",
    linkedin: "https://www.linkedin.com/in/bernard-ginn-jr-a40b01308/",
  },
};

/** Home — standalone intro section (scroll on the landing page). */
export const aboutIntroParagraphs = [
  "Hi, my name is Bernard. I'm a software engineer fascinated by how systems and technologies, especially AI, shape the way we live, work, and connect. I'm not interested in building things just to build them. I want a career that creates meaningful change, one product, one community, one line of code at a time.",
  "To learn more about me, I broke it into four sections: The Engineer, The AI/ML Thinker, The Co-Founder, and The Community Leader.",
] as const;

/** Image beside the intro copy (`public/` path — spaces URL-encoded). */
export const aboutIntroImage = {
  src: "/IMG_8270%202.jpg",
  alt: "Bernard Ginn Jr. in graduation regalia",
} as const;

export type AboutPersonaSection = {
  id: string;
  title: string;
  body: string;
  /** Set when you add an image under `public/` (e.g. `/about-engineer.jpg`). */
  imageSrc?: string;
  imageAlt?: string;
  /** Typewriter runs when this section scrolls into view (paragraphs use `\\n\\n` in `body`). */
  typewriterOnScroll?: boolean;
};

/** Each persona is its own section on the home page — room for image + copy. */
export const aboutSections: AboutPersonaSection[] = [
  {
    id: "engineer",
    title: "The Engineer",
    typewriterOnScroll: true,
    body: [
      `I didn't grow up knowing how to code. There was no early "aha" moment at age twelve, no computer science parent pointing me toward a terminal. I came to software the way most first-generation builders do, slowly, then all at once.`,
      `It started with confusion. A lot of it. Staring at error messages that felt personal, debugging code I barely understood, wondering if I was built for this.`,
      `Then came my internship. My first real taste of a product team: designers, engineers, stakeholders, all moving toward the same thing. I remember the first time I got a React component to actually render in the browser. It sounds small. It wasn't. Seeing something I built show up on a screen, styled, alive, clickable. Something shifted. Then we kept going. Working back and forth with the product and design team, iterating, pushing, until one day we hit MVP. And in that moment, surrounded by people who cared about what we were making, I stopped asking myself if I was built for this.`,
      `I knew.`,
      `That experience turned confusion into craft. Today I ship full-stack products end to end: typed frontends, reliable APIs, and data layers that hold up in production. I've refactored large React codebases, built out CI/CD pipelines, and stress-tested backends under real load. But what drives me has never changed from that first render: building things that actually work, for people who actually need them, with teams that actually care.`,
      `The code was never the destination. It was just the language I found to say what I wanted to build.`,
    ].join("\n\n"),
  },
  {
    id: "ai-ml-thinker",
    title: "The AI/ML Thinker",
    typewriterOnScroll: true,
    body: [
      `It started in a classroom at Columbus State University, junior year, with a group project I wasn't sure I was ready for. We were building a deep learning model, and for the first time, I wasn't just writing code that did something. I was writing code that learned something. That distinction never left me.`,
      `From there I started pulling on every thread I could find. I discovered LangChain and suddenly the idea of building with AI felt tangible, not just academic. That's where FlavorMind came to life, my first real AI project. It was messy, humbling, and I loved every second of it. Something about teaching a system to reason, to retrieve, to respond. It scratched an itch I didn't know I had.`,
      `Then I found the OpenAI API and the floodgates opened. I built project after project, each one teaching me something the last one couldn't. AI stopped feeling like a specialization and started feeling like a lens: a way of seeing every problem differently.`,
      `But the moment that meant the most came quietly. I co-authored and published a research paper, Evaluating the Efficacy of Random Forest in Mood Classification for Music Recommendation Systems, exploring how combining audio and lyrical features could improve how we classify music moods. The findings were real: multimodal integration genuinely outperformed single-source approaches. Since publication it's been referenced over eight times, cited in academic work, and viewed over 200 times.`,
      `I'm not just someone who uses AI. I'm someone who wants to understand it, push it, and build with it in ways that actually matter.`,
    ].join("\n\n"),
  },
  {
    id: "co-founder",
    title: "The Co-Founder",
    typewriterOnScroll: true,
    body: [
      `Something happens when you sit in a room with a CEO. Or on an investor call, listening to someone talk about a problem they saw, a bet they made, and a thing they built from nothing. I didn't just find it inspiring. I found it familiar. Like a version of something I already knew I wanted.`,
      `I couldn't shake it. The idea that you could see a gap in the world, gather the right people, and build something that fills it. Not for someone else's roadmap. Your own.`,
      `So I did something about it.`,
      `Together with a group of students, I co-founded Daily Dose, an AI-powered journaling platform designed to help people reflect, grow, and show up more intentionally in their lives. What made it real wasn't just the product. It was the moment I got to pitch it, talk about it, defend it, and then actually watch students at my own university use it. That feedback loop, from idea to user hands, is something I'll never forget.`,
      `That experience taught me what ownership really feels like. Not just ownership of code or features, but of vision. Of something you believe in enough to fight for.`,
      `I don't know exactly what my company will be one day. I haven't seen the problem yet that will make me stop and say that's it. But I know it's coming. And when it does, everything I'm building right now, the engineering, the AI work, the community, the hard lessons, it'll all have been preparation.`,
      `I don't want to build something just to put money in my pocket. I want to build something that genuinely changes how people live. That's the only finish line that's ever meant anything to me.`,
    ].join("\n\n"),
  },
  {
    id: "community-leader",
    title: "The Community Leader",
    typewriterOnScroll: true,
    body: [
      `I learned early that who you know matters just as much as what you know. Not in a transactional way, but in a real one. The right conversation at the right time can open a door you didn't even know existed. I've lived that. And once you live it, you can't stop wanting to create that same moment for someone else.`,
      `That's why I founded the ColorStack chapter at Columbus State University. ColorStack exists to support Black and Latino students in tech, and bringing it to CSU meant building something from scratch, finding the people who needed it before they even knew they needed it, and creating a space where ambition had somewhere to go. Watching students in that room land internships, make connections, and start believing they belonged in this industry, that's not something you measure in metrics.`,
      `Hackathons taught me a different kind of community. Rooms full of strangers who become collaborators by hour three. People from different schools, different stacks, different backgrounds, all converging around a shared problem. I've learned as much from those rooms as I have from any classroom.`,
      `I'm not naturally the loudest person in the room. But I've learned to show up, to reach out, to build relationships with intention. Networking isn't a strategy for me. It's how I grow. Every person I meet teaches me something. Every community I'm part of makes me better at the work and clearer on the why.`,
      `I believe the best technology gets built by people who are deeply connected to other people. That's the kind of builder I'm becoming.`,
    ].join("\n\n"),
  },
];

export const navLinks = [
  { label: "About", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Hackathons", href: "/hackathons" },
  { label: "Languages", href: "/languages" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

export const languages = [
  {
    name: "Java",
    level: "Intermediate",
    years: 3,
    description:
      "Spring Boot and OOP — e.g. Stellar URL shortener with RESTful APIs.",
  },
  {
    name: "Python",
    level: "Advanced",
    years: 3,
    description:
      "FastAPI backends and ML — e.g. CougarWise capstone with tested APIs.",
  },
  {
    name: "JavaScript",
    level: "Advanced",
    years: 3,
    description:
      "ES6+, Node.js, and React across internships and Propel2Excel.",
  },
  {
    name: "TypeScript",
    level: "Advanced",
    years: 3,
    description:
      "Typed frontends and APIs with React, Next.js, Angular, and Tailwind.",
  },
  {
    name: "HTML / CSS",
    level: "Advanced",
    years: 4,
    description:
      "Semantic markup, Tailwind CSS, and responsive layouts (e.g. Propel2Excel).",
  },
  {
    name: "SQL",
    level: "Intermediate",
    years: 3,
    description:
      "PostgreSQL and relational modeling across full-stack projects.",
  },
  {
    name: "Go",
    level: "Intermediate",
    years: 2,
    description:
      "Gin and services — e.g. ArmorUP with PostgreSQL and OpenAI API.",
  },
  {
    name: "C#",
    level: "Intermediate",
    years: 2,
    description:
      "ASP.NET Core and Entity Framework — e.g. HabitChain with JWT auth.",
  },
];

export const projects = [
  {
    title: "Daily Dose",
    year: "2025",
    description:
      "AI-powered journaling platform delivering personalized inspiration, mood tracking, and mental health insights — deployed to 4 universities with measurable wellness outcomes and sub-second AI response times under 1,000 concurrent users.",
    tags: ["Next.js", "Node.js", "DynamoDB", "OpenAI", "Docker", "Kubernetes"],
    link: "https://www.daily-dose.me/",
    github: "https://github.com/BG-legacy/Daily-Dose",
  },
  {
    title: "HabitChain",
    year: "2025",
    description:
      "A full-stack habit tracking app built with .NET 9 and React featuring gamification with 25+ badges, AI-powered recommendations via OpenAI, streak analytics, calendar heat maps, and a glassmorphism UI — all backed by Clean Architecture, JWT auth, and PostgreSQL.",
    tags: [".NET 9", "React", "PostgreSQL", "OpenAI", "C#", "MIT License"],
    link: "#",
    github: "https://github.com/BG-legacy/HabitChain",
  },
  {
    title: "ArmourUp",
    year: "2025",
    description:
      "A TypeScript-built faith and wellness platform helping users engage with the full Armor of God through daily spiritual disciplines, guided devotionals, and personal growth tracking.",
    tags: ["TypeScript", "React", "Node.js", "Tailwind CSS"],
    link: "https://armour-up.vercel.app/",
    github: "https://github.com/BG-legacy/ArmourUp",
  },
  {
    title: "ChronoPal",
    year: "2025",
    description:
      "Full-stack AI companion app blending retro-inspired UI with modern UX—think nostalgic virtual-pet energy with LLM-backed dialogue and progression. Built at PeachHacks with students across Atlanta-area schools; FastAPI + MongoDB API with auth and Pytest coverage, React 19 + TypeScript + Tailwind + React Router + Axios on the web.",
    tags: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "MongoDB",
      "OpenAI",
      "Pytest",
    ],
    link: "https://chrono-pal.vercel.app/",
    hideLiveDemo: true,
    github: "https://github.com/BG-legacy/ChronoPal",
  },
  {
    title: "FairPath",
    year: "2025",
    description:
      "An ethical, AI-powered career recommendation system built at ColorStack Winter Hack 2025 that matches users to careers based on skills, interests, and work values — never demographic data. Features ML-powered recommendations with explainability, demographic guardrails, confidence bands, model cards, and a trust panel for full transparency.",
    tags: ["FastAPI", "React", "TypeScript", "scikit-learn", "OpenAI", "Responsible AI"],
    link: "https://fair-path.vercel.app/",
    github: "https://github.com/BG-legacy/colorstackwinterhack2025-FairPath",
  },
  {
    title: "CougarWise",
    year: "2025",
    description:
      "A full-stack financial management app for CSU students: track spending, set budgets, visualize finances with Chart.js, and get AI-powered insights via OpenAI plus ML spending analysis — React 19 + Material UI frontend, FastAPI + MongoDB backend.",
    tags: ["React 19", "FastAPI", "MongoDB", "Material UI", "OpenAI", "Chart.js"],
    link: "https://cougar-wise.vercel.app/",
    hideLiveDemo: true,
    github: "https://github.com/BG-legacy/CougarWise",
  },
  {
    title: "BGFitness",
    year: "2025",
    description:
      "Full-stack fitness app for workout tracking, goals, and motivation — AI-generated plans via OpenAI, TDEE calculator, unit conversions, and PDF/CSV exports. React 19 + Tailwind UI with a Node.js/Express API.",
    tags: ["React 19", "Express", "Node.js", "Tailwind CSS", "OpenAI", "Jest"],
    link: "https://bg-fitness-seven.vercel.app/",
    github: "https://github.com/BG-legacy/BGFitness",
  },
];

export const hackathons = [
  {
    name: "ColorStack Winter Hackathon 2025",
    date: "December 2025",
    placement: "Participant",
    project: "FairPath",
    description:
      "Built FairPath, an ethical AI-powered career recommendation platform, during ColorStack Winter Hackathon 2025. I learned how to quickly balance model quality, fairness guardrails, and clear user-facing explanations under hackathon time pressure.",
    tags: [
      "FastAPI",
      "React",
      "TypeScript",
      "scikit-learn",
      "OpenAI",
      "Responsible AI",
    ],
  },
  {
    name: "PeachHacks",
    date: "April 2025 · Atlanta, GA",
    placement: "Participant",
    project: "ChronoPal (What's This Madness?!)",
    description:
      "My group created ChronoPal—a playful AI companion with a retro-inspired UI. I learned to split work clearly under a short deadline, integrate OpenAI into a tight product loop without ballooning scope, and prioritize a reliable demo path while the FastAPI + MongoDB API and React frontend were still taking shape.",
    tags: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "MongoDB",
      "OpenAI",
      "Pytest",
    ],
  },
  {
    name: "ColorStack Winter Hackathon 2024",
    date: "December 2024",
    placement: "Participant",
    project: "Daily Dose",
    description:
      "Built an early Daily Dose hackathon version focused on AI-powered journaling and mood-aware prompts. I learned how to simplify feature scope fast, keep collaboration tight, and prioritize a stable end-to-end demo in a short sprint.",
    tags: ["Next.js", "OpenAI", "DynamoDB", "Node.js"],
  },
];

export const workExperience = [
  {
    company: "ColorStack",
    role: "Software Engineer Fellow",
    period: "Dec 2024 – Present",
    location: "Apprenticeship",
    website: "https://www.colorstack.org/",
    description: [
      "Attended industry conferences and hackathons as a representative of ColorStack, putting the organization's mission in front of students and professionals across the country.",
      "Competed in 3 hackathons, applying technical skills in collaborative, high-pressure environments while embodying ColorStack's vision for underrepresented engineers.",
      "Built intentional relationships with CS students from universities nationwide, fostering community and expanding ColorStack's network of Black and Latinx technologists.",
    ],
  },
  {
    company: "Daily Dose",
    role: "Startup Co-Founder",
    period: "Jan. 2025 – Aug. 2025",
    location: "Remote, USA",
    website: "https://www.daily-dose.me/",
    description: [
      "Built an AI-powered journaling platform with OpenAI-driven mood analytics and adaptive prompt generation, architecting a Next.js/Node.js/DynamoDB backend containerized on Docker/Kubernetes and deployed to production.",
      "Validated platform reliability by stress-testing AI inference pipelines and DynamoDB throughput with JMeter under 1,000 concurrent users, achieving 100% uptime and sub-second response times.",
      "Scaled platform to 4 university deployments and conducted user research with students and therapists, driving 80% positive feedback on measurable mental health outcomes.",
    ],
  },
  {
    company: "Propel2Excel",
    role: "Software Engineer Apprentice",
    period: "Oct. 2024 – Aug. 2025",
    location: "Remote, USA",
    website: "https://www.propel2excel.org/",
    description: [
      "Refactored the Propel2Excel platform using React.js, TypeScript, Redux, and Tailwind CSS, implementing code splitting and responsive architecture to cut load times by 30% and boost mobile engagement by 20%.",
      "Architected a CI/CD pipeline with Jest/BrowserStack automation and Azure cloud infrastructure, reducing UI bugs by 40% and accelerating release cycles by 25% with improved cross-browser consistency.",
      "Synthesized QA metrics and design findings into Microsoft-based executive reports and presentations for CEO and investor stakeholders, directly informing 5 product roadmap decisions across planning cycles.",
    ],
  },
  {
    company: "Cybernetics Global",
    role: "Software Engineer Intern",
    period: "May 2024 – Sept. 2024",
    location: "Atlanta, GA",
    description: [
      "Contributed to an Agile team building an AWS-hosted bail bond platform, engineering a Node.js RESTful API-powered AI chatbot that reduced user-to-bondsman response time by 30% and drove an 18% lift in user satisfaction.",
      "Built React.js interfaces with Jest/RTL test suites, achieving 25% faster load times and a 30% reduction in bugs across the component library.",
      "Supported AWS EC2 and S3 deployments; enabled 6 investor demos, driving 4 conversions and a 15% funding increase.",
      "Attended CompTIA ChannelCon, networking with industry leaders and gaining insights into emerging IT infrastructure and cybersecurity trends.",
    ],
  },
  {
    company: "ColorStack at CSU",
    role: "Chapter Founder & President",
    period: "Jan. 2025 – May 2025",
    location: "Columbus, GA",
    description: [
      "Founded and led CSU's first ColorStack chapter, organizing 7 career workshops and networking events, driving a 25% increase in internship placements for underrepresented students and 40% membership growth.",
      "Owned project management for chapter programs—planning timelines, coordinating volunteers, and aligning events with campus partners.",
      "Scheduled and ran media and promotional content for workshops, networking nights, and member outreach.",
    ],
  },
];

export const education = [
  {
    school: "Columbus State University",
    degree:
      "Bachelor of Science in Computer Science, Software Systems track",
    period: "Aug. 2022 – May 2025",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Database Systems",
      "Software Engineering",
      "Theory of Computation",
    ],
    activities: ["ColorStack CSU — Founder & President"],
  },
  {
    school: "Georgia Institute of Technology",
    degree:
      "Master of Science in Computer Science, Concentration in Artificial Intelligence",
    period: "Jan. 2026 – May 2027",
    coursework: [
      "Database Systems Concepts & Design",
      "Software Architecture & Design",
    ],
    activities: [],
  },
];

export const skills = {
  frameworks: [
    "AWS",
    "Docker/Kubernetes",
    "Spring Boot",
    "Node.js",
    "Express",
    "FastAPI",
    "ASP.NET Core",
    "Next.js",
    "React",
    "Angular",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "OpenAI API",
  ],
  tools: [
    "VS Code",
    "IntelliJ",
    "Eclipse",
    "Git",
    "GitHub",
    "Postman",
    "JIRA",
    "Swagger",
    "BrowserStack",
    "Jenkins",
  ],
  concepts: ["CI/CD", "Agile", "Microservices", "Test automation"],
};
