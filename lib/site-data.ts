export interface PortfolioProject {
  id: string
  title: string
  category: string
  thumbnail: string
  summary: string
  description: string
  images: string[]
  technologies: { name: string; icon: string }[]
  href?: string
}

export const siteData = {
  person: {
    name: "Hrithik",
    role: "Frontend Engineer (React)",
    location: "Kochi, India",
    email: "hrithik00g@gmail.com",
    phone: "+91 9061006921",
    username: "@hrithik-p",
    heroIntro:
      "I turn ideas into interfaces people love—clean, fast, and built to last. Glad you're here.",
    shortBio:
      "Frontend Engineer with 3+ years building scalable web apps in React and TypeScript. I care about clean code, fast experiences, and teams that ship with confidence.",
    longBio: [
      "I'm a Frontend Engineer who loves building products that feel great and scale. I focus on clean architecture, reusable component systems, and performance so that teams can ship fast and users get a smooth experience.",
      "I work with React, TypeScript, and modern tooling end to end—from design handoffs and API contracts to testing, review, and deployment. I've led frontend ownership on high-traffic platforms, raised test coverage significantly, and collaborated with backend and design teams to ship on time. Seeing fewer bugs in production and happier users is what keeps me going.",
      "I'm based in Kochi, India, and I'm open to full-time and contract opportunities where I can contribute to product-focused or growth-driven teams. I'd love to hear about your product or what you're building.",
    ],
    tagline: "Frontend Engineer · React & TypeScript · Building products that scale and feel great",
  },
  certifications: [
    { name: "Responsive Web Design", issuer: "freeCodeCamp" },
  ],
  focusAreas: [
    "Clean architecture & design systems",
    "Performance & Core Web Vitals",
    "Testing & quality (RTL, Playwright)",
    "REST API integration & state management",
  ],
  social: {
    website: "https://github.com/hrithik-p",
    x: "https://www.linkedin.com/in/hrithik-p",
    instagram: "https://github.com/hrithik-p",
    dribbble: "https://www.linkedin.com/in/hrithik-p",
    github: "https://github.com/hrithik-p",
    linkedin: "https://www.linkedin.com/in/hrithik-p",
  },
  stats: {
    yearsExperience: 3,
    clientsWorldwide: 4,
    totalProjects: 4,
  },
  services: [
    {
      name: "Frontend Architecture",
      description: "Scalable structure, design systems, and clean patterns so your team can iterate without tech debt—and your app stays maintainable as it grows.",
    },
    {
      name: "React & TypeScript Development",
      description: "Production-ready UIs with React and TypeScript so users get a fast, reliable experience—from prototypes to long-term ownership.",
    },
    {
      name: "UI Components & Design Systems",
      description: "Reusable, accessible components and consistent design tokens so your product looks and behaves as one—and your team ships faster.",
    },
    {
      name: "Performance & Quality",
      description: "Faster load times, smooth interactions, and higher test coverage so your releases are confident and your users don't wait.",
    },
  ],
  experience: [
    {
      period: "Jun 2023 – Present",
      role: "Software Developer",
      company: "Quintet Solutions Pvt Ltd",
      location: "Kochi, India",
      description:
        "Building and maintaining high-traffic, scalable web and mobile platforms for global markets. I implement scalable UI features with React and TypeScript, collaborate with backend teams on REST API design and integration, and drive quality through structured component architecture and code review. Increased test coverage by 30%, so we ship with fewer regressions and users get a more reliable product.",
      tech: "React, TypeScript, React Testing Library, REST APIs, Vite, Playwright, Docker",
    },
    {
      period: "Apr 2022 – May 2023",
      role: "Junior Software Developer",
      company: "Howin Cloud Pvt Ltd",
      location: "Perintalmanna, India",
      description:
        "Built custom e-commerce web applications for multiple clients so they could sell and manage orders reliably. Delivered frontend features in React and contributed to backend modules with Laravel and MySQL. Integrated REST APIs and optimized data workflows for better performance. Reduced production issues through improved debugging, testing, and deployment checks; worked closely with senior developers and product owners on UI/UX and feature planning.",
      tech: "React, JavaScript, Laravel, Vite, MySQL, REST APIs",
    },
    {
      period: "Jan 2022 – Mar 2022",
      role: "Intern Developer",
      company: "Howin Cloud Pvt Ltd",
      location: "Perintalmanna, India",
      description:
        "Contributed to backend development with Laravel and MySQL and built admin dashboards in React, including API development. Resolved production bugs around data validation and state management under senior guidance. Gained hands-on exposure to Git workflows, CI/CD, and production deployment—setting the foundation for shipping real products to real users.",
      tech: "Laravel, MySQL, React",
    },
  ],
  education: [
    {
      period: "2019 – 2022",
      degree: "Bachelor of Computer Applications",
      institution: "St Mary's College, Calicut University",
      location: "Puthanangadi, India",
    },
    {
      period: "2017 – 2019",
      degree: "Higher Secondary, Computer Science",
      institution: "GMHSS",
      location: "Perintalmanna, India",
    },
    {
      period: "2016 – 2017",
      degree: "High School",
      institution: "Presentation Higher Secondary School",
      location: "Perintalmanna, India",
    },
  ],
  skills: [
    { name: "React", percentage: 92, icon: "logos:react" },
    { name: "TypeScript", percentage: 88, icon: "logos:typescript-icon" },
    { name: "JavaScript", percentage: 90, icon: "logos:javascript" },
    { name: "Redux Toolkit", percentage: 84, icon: "logos:redux" },
    { name: "React Query", percentage: 82, icon: "simple-icons:reactquery" },
    { name: "Playwright", percentage: 78, icon: "simple-icons:playwright" },
  ],
  projects: [
    {
      id: "1",
      title: "Rental Property Maintenance Platform",
      category: "SaaS / PropTech",
      thumbnail: "/minimalist-phone-mockup-on-desk.jpg",
      summary: "Helping property managers and tenants handle maintenance requests without the back-and-forth.",
      description:
        "Built and maintained a scalable React + TypeScript frontend with reusable UI components, REST API integration, and optimized rendering. Structured component architecture and clear state management let the team ship new features quickly. The result: a single place for maintenance workflows that scales with growing portfolios.",
      images: ["/web-design-dashboard.jpg", "/mobile-responsive-design.png", "/web-application-interface.png"],
      technologies: [
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "TS" },
        { name: "React", icon: "⚛" },
      ],
      href: "https://lula.life/",
    },
    {
      id: "2",
      title: "Student Academic Tracking System",
      category: "EdTech SaaS",
      thumbnail: "/castro-capi-design-poster-on-rock.jpg",
      summary: "Giving educators and students real-time visibility into attendance, reports, and progress.",
      description:
        "Developed SaaS dashboards and modules in React, integrated secure REST APIs for attendance and report sync, and designed analytics views with reusable hooks. Clean separation of concerns and consistent UX help schools track progress and act on data faster.",
      images: ["/mobile-app-design-screens.jpg", "/app-user-interface.jpg", "/mobile-design-mockups.jpg"],
      technologies: [
        { name: "React", icon: "⚛" },
        { name: "JavaScript", icon: "JS" },
        { name: "REST APIs", icon: "API" },
      ],
    },
    {
      id: "3",
      title: "Food Delivery Application",
      category: "E-Commerce",
      thumbnail: "/hand-holding-roman-design-magazine.jpg",
      summary: "Making it easy for customers to order food and for restaurants to manage deliveries.",
      description:
        "Built mobile-first frontend workflows for menus, ordering, and profiles; integrated APIs for authentication, orders, and payments; and improved cross-device performance. Focus on fast, reliable flows so users can order without friction and businesses can scale delivery.",
      images: ["/brand-identity-design.png", "/logo-design-mockups.jpg", "/diverse-branding-materials.png"],
      technologies: [
        { name: "React", icon: "⚛" },
        { name: "Vite", icon: "VT" },
        { name: "REST APIs", icon: "API" },
      ],
      href: "https://grosav.com/home",
    },
    {
      id: "4",
      title: "Alumni Association Management System",
      category: "Admin Platform",
      thumbnail: "/hand-holding-roman-magazine-red.jpg",
      summary: "Helping alumni associations manage members, events, and engagement in one place.",
      description:
        "Developed admin dashboards and management modules using Laravel, built APIs, and contributed to database design. Supported testing and deployment readiness so the association could run events and stay connected with alumni without manual overhead.",
      images: ["/portfolio-website-design.png", "/creative-portfolio-layout.jpg", "/web-portfolio-mockup.jpg"],
      technologies: [
        { name: "Laravel", icon: "LV" },
        { name: "MySQL", icon: "DB" },
        { name: "React", icon: "⚛" },
      ],
      href: "https://www.hadia.in/",
    },
  ] satisfies PortfolioProject[],
}
