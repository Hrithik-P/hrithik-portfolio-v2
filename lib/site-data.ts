export interface PortfolioProject {
  id: string
  slug: string
  title: string
  category: string
  year: string
  role: string
  /** Hue (0-360) driving the generated cover art. */
  hue: number
  monogram: string
  summary: string
  problem: string
  approach: string
  outcome: string
  highlights: string[]
  technologies: { name: string; icon: string }[]
  href?: string
}

export interface NavItem {
  href: string
  label: string
}

/**
 * Absolute origin, used for canonical URLs, Open Graph tags, and the sitemap.
 * Set NEXT_PUBLIC_SITE_URL in the deploy environment to override.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hrithik-portfolio-v2-xi.vercel.app"

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Work" },
  { href: "/credentials", label: "Resume" },
]

export const siteData = {
  person: {
    name: "Hrithik",
    fullName: "Hrithik P",
    role: "Frontend Engineer",
    roleLong: "Frontend Engineer · React, Next.js & TypeScript",
    location: "Kochi, India",
    email: "hrithik00g@gmail.com",
    phone: "+91 9061006921",
    username: "@Hrithik-P",
    availability: "Open to senior frontend roles — India and remote-first teams",
    heroIntro:
      "I build the interfaces a work order passes through — from the moment a tenant reports a problem to the moment a technician closes it out.",
    shortBio:
      "Frontend engineer with 4+ years building production web applications in React, Next.js, and TypeScript. I work on operational software: the kind people use all day to get a job done, where the whole task is making something genuinely complex feel simple and reliable.",
    longBio: [
      "For the past three years I've been the frontend engineer on Lula and Foresight, a US property maintenance platform serving managers across 50+ markets. What makes it interesting is that one work order moves through four completely different people — a coordinator triaging the request, a property manager tracking progress, a contractor accepting the job, a technician finishing it in the field. Same record, four jobs to be done.",
      "A lot of my work has been making those four applications behave like one product. I build and maintain the shared component library behind the admin platform, customer portal, vendor portal, and technician app, so a UI improvement ships across the suite instead of being reimplemented four times. I own the REST integration layer across them too — typed, with loading, error, and empty states that look the same everywhere, because inconsistent failure states are how software starts to feel unreliable.",
      "The most useful thing I've learned came from migrating a dozen-odd legacy Laravel dashboard pages to React and TypeScript. Writing the React was never the hard part. The hard part was working out why the existing code behaved the way it did — reading an undocumented codebase archaeologically, tracing dependencies, understanding decisions made by people who'd long since left, and judging when to preserve behaviour rather than replace it.",
      "Before Quintet I was at Howin Cloud building mobile-first client interfaces and integrating payment and authentication systems, and I started out in Laravel and backend work — which still gives me a better read on the systems sitting behind the interfaces I build. These days I also mentor two junior developers on a five-person frontend team, which has sharpened how I explain decisions rather than just make them.",
      "I'm based in Kochi and open to senior frontend roles, in India or with remote-first teams. If you're building something where the interface has to carry real operational weight, I'd like to hear about it.",
    ],
    tagline: "Frontend engineer building operational software in React, Next.js, and TypeScript.",
  },

  /** How I work — used on the home bento and the about page. */
  principles: [
    {
      title: "Read before you rewrite",
      description:
        "Undocumented code is a record of decisions, not a mess to clear. Trace why it behaves that way first, then decide what deserves to survive.",
      icon: "lucide:git-branch",
    },
    {
      title: "One pattern, not four",
      description:
        "When the same UI exists in four apps, it drifts in four directions. A shared component layer is what keeps a product suite feeling like one product.",
      icon: "lucide:component",
    },
    {
      title: "Design for the ugly states",
      description:
        "Loading, error, and empty are most of what operational software actually shows. Inconsistent failure states are how a product starts to feel unreliable.",
      icon: "lucide:layers",
    },
    {
      title: "Make complex feel simple",
      description:
        "Operational tools are dense by nature. The work is absorbing that complexity into the architecture so it never reaches the person using it.",
      icon: "lucide:gauge",
    },
  ],

  certifications: [{ name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2021" }],

  languages: [
    { name: "English", level: "Professional working" },
    { name: "Malayalam", level: "Native / bilingual" },
    { name: "Hindi", level: "Limited working" },
    { name: "Tamil", level: "Limited working" },
  ],

  focusAreas: [
    "Shared component libraries & design systems",
    "Legacy migration & modernisation",
    "Typed REST integration layers",
    "Real-time interfaces (WebSocket / Pusher)",
    "State architecture at scale",
    "Test-driven UI & cross-browser QA",
    "Mentoring & code review",
  ],

  social: {
    github: "https://github.com/Hrithik-P",
    linkedin: "https://www.linkedin.com/in/hrithik-p",
  },

  stats: [
    { value: "4+", label: "Years shipping", detail: "production frontends" },
    { value: "50+", label: "US markets", detail: "served by the platform" },
    { value: "4", label: "Apps in the suite", detail: "one shared component library" },
  ],

  services: [
    {
      name: "Frontend architecture",
      description:
        "State boundaries, data-fetching patterns, and folder structure decided deliberately — so feature five doesn't cost four times feature one.",
      icon: "lucide:blocks",
    },
    {
      name: "React & TypeScript builds",
      description:
        "Production interfaces end to end, from design handoff and API contract through review, tests, and release.",
      icon: "lucide:code-xml",
    },
    {
      name: "Design systems",
      description:
        "Shared component libraries and tokens that keep a multi-application product suite looking and behaving like one product.",
      icon: "lucide:component",
    },
    {
      name: "Legacy modernisation",
      description:
        "Moving server-rendered screens onto a typed, component-driven frontend without losing the product logic buried in them.",
      icon: "lucide:activity",
    },
  ],

  experience: [
    {
      period: "Jun 2023 — Present",
      role: "Software Developer",
      company: "Quintet Solutions Pvt Ltd",
      location: "Kochi, India",
      description:
        "Dedicated frontend engineer on Lula and Foresight, a US property maintenance and AI work-order platform serving managers across 50+ markets. Frontend team of five inside a 25-person engineering organisation, working from requirements analysis through to production support.",
      achievements: [
        "Built and maintained the shared component library powering four production applications — admin platform, customer portal, vendor portal, and technician app — establishing one design language across the suite and removing four-way duplicate implementation of every shared pattern",
        "Migrated 12–15 legacy Laravel dashboard pages to a modular React and TypeScript architecture, reverse-engineering years of undocumented product logic through code analysis and stakeholder interviews before rewriting",
        "Cut page load times and removed UI hangs on data-heavy views, measurably increasing use of screens people had been avoiding",
        "Reduced time-to-production for new features from weeks to days by replacing the server-rendered architecture with a typed, component-driven frontend",
        "Delivered the frontend for Foresight's AI-driven work-order platform — request triage, technician scheduling, and vendor dispatch used daily by coordinators",
        "Owned REST integration across the four client applications, partnering with backend engineers on contract design and implementing typed data-fetching layers with consistent loading, error, and empty states",
        "Mentor two junior developers, helping them get confident owning and shipping features independently",
      ],
      tech: ["React", "TypeScript", "Next.js", "Redux Toolkit", "TanStack Query", "Vite", "Vitest", "React Testing Library", "REST APIs", "Sentry", "Datadog"],
    },
    {
      period: "Apr 2022 — May 2023",
      role: "Junior Software Developer",
      company: "Howin Cloud Pvt Ltd",
      location: "Perintalmanna, India",
      description:
        "Client web and mobile applications across the stack — React on the front, Laravel and MySQL behind it — covering requirements analysis, API integration, testing, and production support.",
      achievements: [
        "Rebuilt client-facing interfaces on a mobile-first responsive architecture, improving usability and session quality through fluid layouts, optimised media loading, and touch-appropriate interaction patterns",
        "Built a reusable React component library shared across concurrent client projects, cutting per-project reimplementation and improving consistency across the agency's delivery portfolio",
        "Integrated payment gateway and third-party authentication providers into production applications, with secure token handling, webhook listeners, and structured error states for failed transactions",
        "Established a manual cross-browser test matrix across Chrome, Safari, Firefox, and Edge on desktop and mobile, catching rendering and layout defects before client release",
      ],
      tech: ["React", "JavaScript", "Laravel", "Eloquent", "MySQL", "REST APIs", "PWA"],
    },
    {
      period: "Jan 2022 — Mar 2022",
      role: "Intern Developer",
      company: "Howin Cloud Pvt Ltd",
      location: "Perintalmanna, India",
      description:
        "First production codebase — a CMS and e-commerce work in Laravel and React, spanning frontend, APIs, and relational data.",
      achievements: [
        "Delivered a production CMS in Laravel within a 12-week internship, supporting role-based access control and custom content types",
        "Architected the relational schema behind dynamic content and admin operations, mapping content relationships and access rules before implementation",
        "Structured backend logic on MVC principles and contributed to product, authentication, CRUD, and shopping-cart workflows",
      ],
      tech: ["Laravel", "MySQL", "React", "PHP"],
    },
  ],

  education: [
    {
      period: "2019 — 2022",
      degree: "BCA, Computer Programming",
      institution: "St Mary's College, Puthanangadi · Calicut University",
      location: "Angadippuram, India",
    },
    {
      period: "2017 — 2019",
      degree: "Higher Secondary, Computer Science",
      institution: "GMHSS",
      location: "Perintalmanna, India",
    },
  ],

  /** Grouped rather than scored — percentages on a skill are noise. */
  skillGroups: [
    {
      title: "Frontend",
      items: [
        { name: "React.js", icon: "logos:react" },
        { name: "Next.js", icon: "logos:nextjs-icon" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "JavaScript (ES6+)", icon: "logos:javascript" },
        { name: "Redux Toolkit", icon: "logos:redux" },
        { name: "React Query", icon: "logos:react-query-icon" },
        { name: "Vite", icon: "logos:vitejs" },
        { name: "React Testing Library", icon: "logos:testing-library" },
        { name: "Playwright", icon: "logos:playwright" },
        { name: "HTML5", icon: "logos:html-5" },
        { name: "CSS3", icon: "logos:css-3" },
        { name: "Tailwind", icon: "logos:tailwindcss-icon" },
        { name: "Bootstrap", icon: "logos:bootstrap" },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: "logos:nodejs-icon" },
        { name: "NestJS", icon: "logos:nestjs" },
        { name: "Laravel", icon: "logos:laravel" },
        { name: "MySQL", icon: "logos:mysql-icon" },
        { name: "PostgreSQL", icon: "logos:postgresql" },
        { name: "REST APIs", icon: "lucide:webhook" },
        { name: "Prisma", icon: "logos:prisma" },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", icon: "logos:git-icon" },
        { name: "Docker", icon: "logos:docker-icon" },
        { name: "Postman", icon: "logos:postman-icon" },
        { name: "Sentry", icon: "logos:sentry-icon" },
        { name: "VS Code", icon: "logos:visual-studio-code" },
        { name: "CI/CD", icon: "lucide:infinity" },
        { name: "Claude Code", icon: "logos:claude-icon" },
        { name: "ChatGPT", icon: "logos:openai-icon" },
        { name: "Cursor", icon: "simple-icons:cursor" },
      ],
    },
  ],

  /** Marquee strip on the home page. */
  marqueeSkills: [
    { label: "React", icon: "logos:react" },
    { label: "TypeScript", icon: "logos:typescript-icon" },
    { label: "Next.js", icon: "logos:nextjs-icon" },
    { label: "Node.js", icon: "logos:nodejs-icon" },
    { label: "JavaScript", icon: "logos:javascript" },
    { label: "Redux", icon: "logos:redux" },
    { label: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { label: "Vite", icon: "logos:vitejs" },
    { label: "Playwright", icon: "logos:playwright" },
    { label: "Docker", icon: "logos:docker-icon" },
    { label: "Git", icon: "logos:git-icon" },
  ],

  projects: [
    {
      id: "1",
      slug: "foresight-lula",
      title: "Foresight & Lula",
      category: "SaaS · Property Tech",
      year: "2023 — Present",
      role: "Frontend Engineer",
      hue: 262,
      monogram: "FL",
      summary:
        "A work order from tenant report to technician sign-off, across four applications and 50+ US markets.",
      problem:
        "One work order passes through four very different people — a coordinator triaging the request, a property manager tracking progress, a contractor accepting the job, a technician closing it out in the field. Same record, four jobs to be done, and the suite had grown four separate implementations of every shared UI pattern.",
      approach:
        "Built and maintained the shared component library behind all four applications, so one design language covers the admin platform, customer portal, vendor portal, and technician app. Owned REST integration across them with typed data-fetching layers and identical loading, error, and empty states. Delivered the frontend for the AI-driven work-order platform: request triage, technician scheduling, and vendor dispatch. Alongside that, moved 12–15 legacy Laravel dashboard pages onto the same architecture — reverse-engineering years of undocumented product logic through code analysis and stakeholder interviews before rewriting any of it.",
      outcome:
        "Shared UI improvements ship once instead of four times, and coordinators run daily dispatch through interfaces shaped around how the work actually moves rather than how the database is arranged. Once the migrated screens became typed components, new feature work went from weeks to days.",
      highlights: [
        "Shared component library powering four production applications",
        "AI-driven triage, scheduling, and vendor dispatch interfaces",
        "12–15 legacy Laravel pages migrated to typed React, cutting feature turnaround from weeks to days",
        "Typed REST layers with consistent loading, error, and empty states",
        "Frontend team of five within a 25-person engineering organisation",
      ],
      technologies: [
        { name: "React", icon: "logos:react" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "Next.js", icon: "logos:nextjs-icon" },
        { name: "Redux Toolkit", icon: "logos:redux" },
        { name: "Sentry", icon: "logos:sentry-icon" },
      ],
      href: "https://lula.life/",
    },
    {
      id: "2",
      slug: "class-report",
      title: "Class Report",
      category: "SaaS · EdTech",
      year: "2022 — 2023",
      role: "Full-Stack Developer",
      hue: 200,
      monogram: "CR",
      summary: "One academic record, three audiences — administrators, teachers, and parents each see their own slice.",
      problem:
        "Attendance, marks, assignments, and examinations are the same underlying data, but an administrator, a teacher, and a parent each need a different shape of it. Built naively, that becomes three products fighting over one schema.",
      approach:
        "Built React PWAs against Laravel APIs on MySQL, with role-specific workflows layered over shared data models covering students, teachers, classes, subjects, examinations, marks, assignments, and attendance. Reusable UI components and consistent form and validation handling kept the three experiences coherent.",
      outcome:
        "Each role gets a view built for what they actually do, and adding a report type means writing a view rather than another parallel data path.",
      highlights: [
        "Role-specific workflows for administrators, teachers, and parents",
        "React PWAs integrated with Laravel APIs over MySQL",
        "Shared data models behind interconnected academic records",
      ],
      technologies: [
        { name: "React", icon: "logos:react" },
        { name: "Laravel", icon: "logos:laravel" },
        { name: "MySQL", icon: "logos:mysql-icon" },
        { name: "REST APIs", icon: "lucide:webhook" },
      ],
    },
    {
      id: "3",
      slug: "hadiya-alumni",
      title: "Hadiya Alumni Platform",
      category: "Admin Platform",
      year: "2022",
      role: "Full-Stack Developer",
      hue: 155,
      monogram: "HD",
      summary: "Membership, events, and fees for an association of 4,000+ alumni.",
      problem:
        "Alumni records, events, fees, and charity activity lived across spreadsheets and inboxes, so every event meant re-collecting information the association already held.",
      approach:
        "Built React interfaces against Laravel APIs, covering alumni profiles, events, education history, fees, and charity workflows, with search, filtering, and pagination over reusable components. Implemented the supporting data models and relationships, plus authentication and permission-driven access across application areas.",
      outcome:
        "One system holding 4,000+ alumni records, with the manual reconciliation taken out of the middle of running an event.",
      highlights: [
        "Supports an association of 4,000+ alumni",
        "Role-based access and permission-driven workflows",
        "Laravel data models, relationships, and APIs behind the interface",
      ],
      technologies: [
        { name: "React", icon: "logos:react" },
        { name: "Laravel", icon: "logos:laravel" },
        { name: "MySQL", icon: "logos:mysql-icon" },
        { name: "PHP", icon: "logos:php" },
      ],
      href: "https://www.hadia.in/",
    },
    {
      id: "4",
      slug: "grosav-commerce",
      title: "Grosav Commerce",
      category: "E-Commerce",
      year: "2022",
      role: "Frontend Developer",
      hue: 25,
      monogram: "GR",
      summary: "Storefront, cart, and checkout rebuilt mobile-first — on the phones customers actually use.",
      problem:
        "Ordering happens on mid-range phones over patchy mobile data, and the existing interface had been designed desktop-first. Every extra second between menu and checkout is an abandoned order.",
      approach:
        "Rebuilt the client-facing interface on a mobile-first responsive architecture — fluid layouts, optimised media loading, and touch-appropriate interaction patterns. Integrated the payment gateway and third-party authentication with secure token handling, webhook listeners, and structured error states for failed transactions.",
      outcome:
        "A checkout path that holds together on real devices, with failed payments surfacing as something a customer can act on rather than a dead end.",
      highlights: [
        "Mobile-first rebuild improving usability and session quality",
        "Payment gateway and third-party auth with secure token handling",
        "Structured error states for failed transactions",
        "Manual cross-browser matrix across Chrome, Safari, Firefox, and Edge",
      ],
      technologies: [
        { name: "React", icon: "logos:react" },
        { name: "JavaScript", icon: "logos:javascript" },
        { name: "Laravel", icon: "logos:laravel" },
        { name: "MySQL", icon: "logos:mysql-icon" },
      ],
      href: "https://grosav.com/home",
    },
  ] satisfies PortfolioProject[],
}
