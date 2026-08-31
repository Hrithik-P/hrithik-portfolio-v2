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
    email: "mrhrithikp@gmail.com",
    username: "@Hrithik-P",
    availability: "Open to senior frontend roles — India and remote-first teams",
    heroIntro:
      "I build production interfaces in React, Next.js, and TypeScript — and care most about what sits underneath them: component architecture, state boundaries, and the seam where UI meets API.",
    shortBio:
      "Frontend engineer with 4+ years building production web applications in React, Next.js, and TypeScript. Most of my work is on the parts that decide whether an interface stays good over time — shared component libraries, typed data layers, render performance, and tests worth trusting.",
    longBio: [
      "I'm a frontend engineer, four years in. What I care about most is the architecture underneath a UI — where state lives, what a component's API actually promises, and how much the tenth feature costs compared to the first.",
      "Most of that I learned maintaining a shared component library behind four production applications. Building a component once is easy; building one that several teams can use without forking it teaches you what a good API actually costs. The same goes for the data layer — I own the typed REST integration across those apps, so loading, error, and empty states are defined once instead of reinvented per screen. Consistent failure states are part of what makes software feel trustworthy.",
      "The most useful lesson came from migrating a dozen-odd legacy pages to React and TypeScript. The hard part was working out why the existing code behaved the way it did — tracing dependencies through an undocumented codebase, understanding decisions made by people who had long since left, and judging when to preserve behaviour rather than replace it. Writing the React was the easy part by comparison.",
      "I came into frontend through Laravel and backend work, which still gives me a better read on the systems behind the interfaces I build. These days I also mentor two junior developers, which has made me better at explaining a decision than just making it.",
      "I'm based in Kochi and open to senior frontend roles, in India or with remote-first teams. If you're building something where the interface has to carry real weight, I'd like to hear about it.",
    ],
    tagline: "Frontend engineer building production interfaces in React, Next.js, and TypeScript.",
  },

  /** How I work — used on the home bento and the about page. */
  principles: [
    {
      title: "Read before you rewrite",
      description:
        "Unfamiliar code usually has a reason for the way it behaves. I trace that reason before touching anything — it's the slow half of a migration, and the half that decides whether it works.",
      icon: "lucide:git-branch",
    },
    {
      title: "Build it once",
      description:
        "A component copied into each app drifts from itself over time. A shared layer is what keeps a growing product feeling like one product.",
      icon: "lucide:blocks",
    },
    {
      title: "Design for every state",
      description:
        "Loading, error, and empty make up most of what a real interface actually shows. The happy path is the easy 20% — and rarely the part that breaks.",
      icon: "lucide:layers",
    },
    {
      title: "Fast is a feature",
      description:
        "Speed is unglamorous: less JavaScript shipped, more rendered on the server by default, and performance measured on the hardware people actually use — not a developer laptop.",
      icon: "lucide:activity",
    },
  ],

  // No date on this in either source — don't invent one.
  certifications: [{ name: "Responsive Web Design", issuer: "freeCodeCamp" }],

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
    "Mentoring",
  ],

  social: {
    github: "https://github.com/Hrithik-P",
    linkedin: "https://www.linkedin.com/in/hrithik-p",
  },

  /**
   * Kept to things that are his own, not the employer's. Platform scale
   * (50+ markets, 25-person org) belongs in the project copy as context,
   * not on the homepage as a personal metric.
   */
  stats: [
    { value: "4+", label: "Years shipping", detail: "production frontends" },
    { value: "4", label: "Products shipped", detail: "PropTech to commerce" },
    { value: "2", label: "Companies", detail: "product & agency teams" },
  ],

  /**
   * Areas of depth, not an offering. He's looking for a senior frontend
   * role, so framing these as services for hire misreads the audience —
   * and turns individual pieces of work into business lines.
   */
  services: [
    {
      name: "Component architecture",
      description:
        "Shared libraries, design tokens, and component APIs that hold up when more than one team is building on them.",
      icon: "lucide:component",
    },
    {
      name: "State & data layer",
      description:
        "Where state lives, and what a typed fetching layer hands a component — with loading, error, and empty states defined once rather than per screen.",
      icon: "lucide:webhook",
    },
    {
      name: "Performance",
      description:
        "Bundle budgets, render cost, and the page-load work that turns a slow screen into one people actually use.",
      icon: "lucide:gauge",
    },
    {
      name: "Testing & quality",
      description:
        "React Testing Library, Playwright, and Vitest, plus cross-browser checks — coverage that mirrors real use, so refactoring stays routine.",
      icon: "lucide:shield-check",
    },
  ],

  experience: [
    {
      period: "Jun 2023 — Present",
      role: "Software Developer",
      company: "Quintet Solutions Pvt Ltd",
      location: "Kochi, India",
      description:
        "Frontend engineer on Lula and Foresight, a US property maintenance and AI work-order platform used by managers across 50+ markets. One of five on the frontend team inside a 25-person engineering group.",
      achievements: [
        "Build and maintain the shared component library behind four production apps — admin platform, customer portal, vendor portal, and technician app — so shared UI ships once instead of four times",
        "Migrated 12–15 legacy Laravel dashboard pages to typed React, recovering undocumented behaviour through code reading and stakeholder interviews before rewriting any of it",
        "Cut page loads and removed hangs on data-heavy views — usage went up as the screens got faster",
        "Feature turnaround went from weeks to days once those screens became typed components",
        "Built Foresight's AI work-order frontend: request triage, technician scheduling, and vendor dispatch, used daily by coordinators",
        "Own REST integration across the four apps — shaping contracts with backend engineers, and keeping loading, error, and empty states identical throughout",
        "Mentor two junior developers on the frontend team",
      ],
      tech: ["React", "TypeScript", "Next.js", "Redux Toolkit", "TanStack Query", "Vite", "Vitest", "React Testing Library", "REST APIs", "Sentry", "Datadog"],
    },
    {
      period: "Apr 2022 — May 2023",
      role: "Junior Software Developer",
      company: "Howin Cloud Pvt Ltd",
      location: "Perintalmanna, India",
      description:
        "Client web and mobile work across the stack — React on the front, Laravel and MySQL behind it — from requirements through integration, testing, and production support.",
      achievements: [
        "Rebuilt client interfaces mobile-first: fluid layouts, lighter media loading, and touch-appropriate interactions",
        "Built a reusable React component library shared across concurrent client projects, so common patterns stopped being rewritten per engagement",
        "Integrated payment gateways and third-party auth, with secure token handling, webhook listeners, and real error states for failed transactions",
        "Set up a manual cross-browser matrix — Chrome, Safari, Firefox, Edge, desktop and mobile — that caught layout defects before client release",
      ],
      tech: ["React", "JavaScript", "Laravel", "Eloquent", "MySQL", "REST APIs", "PWA"],
    },
    {
      period: "Jan 2022 — Mar 2022",
      role: "Intern Developer",
      company: "Howin Cloud Pvt Ltd",
      location: "Perintalmanna, India",
      description:
        "First production codebase — Laravel, MySQL, and React across a CMS and an e-commerce build.",
      achievements: [
        "Shipped a production CMS in Laravel inside a 12-week internship, with role-based access and custom content types",
        "Designed the relational schema behind dynamic content and admin operations before building on top of it",
        "Worked on product, authentication, CRUD, and cart flows, with senior review on every change",
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
      role: "React & Laravel APIs",
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
      role: "React & Laravel APIs",
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
      title: "Grosav",
      category: "E-Commerce",
      year: "2022",
      role: "Frontend",
      hue: 25,
      monogram: "GR",
      summary: "An ordering storefront built for mid-range phones, not for the demo laptop.",
      problem:
        "Customers order on mid-range phones over patchy mobile data. Anything between the menu and a completed order — a heavy image, a janky scroll, a payment failure with no explanation — is where the order gets abandoned.",
      approach:
        "Built the storefront, cart, and checkout mobile-first: fluid layouts, lighter media loading, and touch-appropriate interactions. Integrated payment and authentication providers with secure token handling, and gave failed transactions real error states rather than a dead end.",
      outcome:
        "A checkout path that holds up on the hardware customers actually carry, with failures that tell someone what to do next.",
      highlights: [
        "Mobile-first storefront, cart, and checkout",
        "Payment and third-party auth integration with secure token handling",
        "Error states that make a failed transaction recoverable",
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
