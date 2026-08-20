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
 * Set NEXT_PUBLIC_SITE_URL in the deploy environment; the fallback only keeps
 * local builds working.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

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
    roleLong: "Frontend Engineer · React & TypeScript",
    location: "Kochi, India",
    email: "hrithik00g@gmail.com",
    phone: "+91 9061006921",
    username: "@hrithik-p",
    availability: "Open to full-time & contract work",
    heroIntro:
      "I build the parts of a product people actually touch — fast interfaces, honest states, and component systems that stay sane after the third redesign.",
    shortBio:
      "Frontend engineer with 3+ years in React and TypeScript, shipping production web apps for property, education, and commerce teams. I care about the boring things that make products good: predictable state, real loading and error states, and code the next person can read.",
    longBio: [
      "I'm a frontend engineer based in Kochi. Most of my work has been on products that people use every day at their jobs — maintenance dashboards, school portals, ordering flows — where the interesting problems aren't visual flourishes but keeping a large interface fast, consistent, and easy to change.",
      "Day to day that means React and TypeScript, but the part I actually enjoy is the layer underneath: deciding where state lives, drawing clean boundaries between UI and data fetching, and building component primitives that make the next twenty screens cheap to build instead of expensive. I've spent enough time in codebases where every feature costs more than the last one to know it's worth getting right early.",
      "I work close to the people around me — pairing with backend engineers on API shapes before they're built rather than patching around them afterwards, and going back to designers when a layout won't survive real data. I also push hard on tests, because a suite you trust is what lets you refactor without asking permission.",
      "Right now I'm open to full-time and contract roles, ideally on a product team that ships often and cares how it feels to use. If you're building something in that shape, I'd like to hear about it.",
    ],
    tagline: "Frontend engineer building fast, durable interfaces in React and TypeScript.",
  },

  /** How I work — used on the home bento and the about page. */
  principles: [
    {
      title: "Boundaries before features",
      description:
        "Decide where state lives and where the network edge sits first. Most frontend pain is a data-flow problem wearing a UI costume.",
      icon: "lucide:git-branch",
    },
    {
      title: "Design for the ugly states",
      description:
        "Empty, loading, error, and 400-characters-of-user-input. The happy path is the easy 20% and rarely what breaks in production.",
      icon: "lucide:layers",
    },
    {
      title: "Fast is a feature",
      description:
        "Ship less JavaScript, render on the server where it's free, and measure with real numbers instead of trusting a fast laptop.",
      icon: "lucide:gauge",
    },
    {
      title: "Tests you can trust",
      description:
        "Coverage that mirrors how people actually use the screen, so refactoring is a normal Tuesday instead of a risk to negotiate.",
      icon: "lucide:shield-check",
    },
  ],

  certifications: [{ name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2021" }],

  focusAreas: [
    "Component architecture & design systems",
    "Core Web Vitals & bundle budgets",
    "Testing with RTL and Playwright",
    "REST integration & client state",
    "Accessibility & keyboard support",
    "Design-to-code fidelity",
  ],

  social: {
    github: "https://github.com/hrithik-p",
    linkedin: "https://www.linkedin.com/in/hrithik-p",
  },

  stats: [
    { value: "3+", label: "Years shipping", detail: "production frontends" },
    { value: "4", label: "Products live", detail: "across three domains" },
    { value: "2", label: "Companies", detail: "product & agency teams" },
  ],

  services: [
    {
      name: "Frontend architecture",
      description:
        "Folder structure, state boundaries, and data-fetching patterns decided deliberately — so feature five doesn't cost four times feature one.",
      icon: "lucide:blocks",
    },
    {
      name: "React & TypeScript builds",
      description:
        "Production interfaces built end to end, from design handoff and API contract through review, tests, and release.",
      icon: "lucide:code-xml",
    },
    {
      name: "Design systems",
      description:
        "Accessible, themeable component primitives and tokens, so a growing product still looks like one product.",
      icon: "lucide:component",
    },
    {
      name: "Performance & quality",
      description:
        "Bundle and rendering audits, Core Web Vitals work, and test coverage that makes releases uneventful.",
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
        "Frontend ownership on high-traffic web and mobile platforms serving global markets. I build feature areas in React and TypeScript, shape REST contracts with the backend team before implementation rather than adapting to them after, and keep the component layer coherent as the surface area grows.",
      achievements: [
        "Raised test coverage by 30%, cutting the regressions that reached release",
        "Restructured shared components into reusable primitives used across feature teams",
        "Reviewed frontend PRs as the default reviewer, keeping patterns consistent across contributors",
      ],
      tech: ["React", "TypeScript", "React Testing Library", "Playwright", "Vite", "REST APIs", "Docker"],
    },
    {
      period: "Apr 2022 — May 2023",
      role: "Junior Software Developer",
      company: "Howin Cloud Pvt Ltd",
      location: "Perintalmanna, India",
      description:
        "Built custom e-commerce applications for multiple clients, working across the stack. Frontend features in React, backend modules in Laravel and MySQL, and the integration work in between — auth, orders, and payment flows that had to hold up under real traffic.",
      achievements: [
        "Delivered storefront and order-management features for several client launches",
        "Cut production issues by tightening debugging, testing, and pre-deploy checks",
        "Optimised data workflows and query patterns behind slow listing pages",
      ],
      tech: ["React", "JavaScript", "Laravel", "MySQL", "Vite", "REST APIs"],
    },
    {
      period: "Jan 2022 — Mar 2022",
      role: "Intern Developer",
      company: "Howin Cloud Pvt Ltd",
      location: "Perintalmanna, India",
      description:
        "First production codebase. Built admin dashboards in React and the Laravel APIs behind them, and fixed real bugs around data validation and state management with senior review on every change.",
      achievements: [
        "Shipped admin dashboard modules alongside the APIs serving them",
        "Learned Git workflow, CI/CD, and deployment on a live product rather than a tutorial",
      ],
      tech: ["Laravel", "MySQL", "React"],
    },
  ],

  education: [
    {
      period: "2019 — 2022",
      degree: "Bachelor of Computer Applications",
      institution: "St Mary's College, Calicut University",
      location: "Puthanangadi, India",
    },
    {
      period: "2017 — 2019",
      degree: "Higher Secondary, Computer Science",
      institution: "GMHSS",
      location: "Perintalmanna, India",
    },
    {
      period: "2016 — 2017",
      degree: "High School",
      institution: "Presentation Higher Secondary School",
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
      slug: "rental-maintenance-platform",
      title: "Rental Maintenance Platform",
      category: "SaaS · PropTech",
      year: "2023 — Present",
      role: "Frontend Engineer",
      hue: 262,
      monogram: "RM",
      summary:
        "Maintenance requests for property managers and tenants, without the phone-call relay in between.",
      problem:
        "Maintenance coordination lived in calls, texts, and spreadsheets. Nobody could answer the simplest question — what is the status of this request right now — without asking three people.",
      approach:
        "Built the React and TypeScript frontend around a small set of reusable primitives: a request timeline, a role-aware action bar, and list views that stay responsive as portfolios grow. State boundaries were drawn so server data and UI state never blur together, and rendering was tuned to keep long lists smooth.",
      outcome:
        "Managers and tenants share one view of every request. New feature areas reuse the existing primitives, so the team ships them in days rather than rebuilding each screen.",
      highlights: [
        "Role-aware interface serving managers, tenants, and vendors from one codebase",
        "Virtualised list rendering that holds up as portfolios scale",
        "Component primitives reused across every subsequent feature area",
      ],
      technologies: [
        { name: "React", icon: "logos:react" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "REST APIs", icon: "lucide:webhook" },
        { name: "Playwright", icon: "logos:playwright" },
      ],
      href: "https://lula.life/",
    },
    {
      id: "2",
      slug: "student-academic-tracking",
      title: "Student Academic Tracking",
      category: "SaaS · EdTech",
      year: "2023",
      role: "Frontend Engineer",
      hue: 200,
      monogram: "SA",
      summary: "Attendance, reports, and progress in one place — current, not last week's export.",
      problem:
        "Attendance and academic records were scattered across systems that disagreed with each other. Staff reconciled by hand, and parents saw numbers that were already stale.",
      approach:
        "Built the dashboard modules in React with reusable hooks wrapping each data domain, so analytics views compose from the same fetch-and-cache layer instead of duplicating it. Secure REST integration keeps attendance and report data in sync as it changes.",
      outcome:
        "Educators get real-time visibility into attendance and progress, and adding a new report type means writing a view rather than another sync path.",
      highlights: [
        "Shared data hooks that every analytics view composes from",
        "Real-time attendance and report synchronisation",
        "Consistent dashboard shell across every module",
      ],
      technologies: [
        { name: "React", icon: "logos:react" },
        { name: "JavaScript", icon: "logos:javascript" },
        { name: "REST APIs", icon: "lucide:webhook" },
        { name: "Redux", icon: "logos:redux" },
      ],
    },
    {
      id: "3",
      slug: "food-delivery-app",
      title: "Food Delivery Application",
      category: "E-Commerce",
      year: "2022",
      role: "Frontend Developer",
      hue: 25,
      monogram: "FD",
      summary: "Menu to checkout on a phone, on a bad connection, without losing the cart.",
      problem:
        "Ordering happens on mid-range phones and patchy mobile data. Every extra second between menu and checkout is an abandoned order.",
      approach:
        "Built mobile-first flows for menus, cart, and profiles, integrated auth, orders, and payment APIs, and worked through the cross-device performance issues — image weight, re-render churn, and layout shift on slower hardware.",
      outcome:
        "A checkout path that holds together on the devices customers actually use, and an order pipeline restaurants can manage from the other side.",
      highlights: [
        "Mobile-first ordering flow from menu through payment",
        "Authentication, order, and payment API integration",
        "Cross-device performance work targeting mid-range hardware",
      ],
      technologies: [
        { name: "React", icon: "logos:react" },
        { name: "Vite", icon: "logos:vitejs" },
        { name: "REST APIs", icon: "lucide:webhook" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      ],
      href: "https://grosav.com/home",
    },
    {
      id: "4",
      slug: "alumni-association-platform",
      title: "Alumni Association Platform",
      category: "Admin Platform",
      year: "2022",
      role: "Full-Stack Developer",
      hue: 155,
      monogram: "AA",
      summary: "Members, events, and engagement for an alumni association — off spreadsheets.",
      problem:
        "Member records and event registration lived in spreadsheets and inboxes, so every event meant re-collecting information the association already had.",
      approach:
        "Built the admin dashboards and management modules in Laravel with React on the interface side, designed the APIs behind them, and contributed to the database schema. Saw it through testing and deployment readiness.",
      outcome:
        "One system for membership and events, with the manual reconciliation removed from the middle of it.",
      highlights: [
        "Membership and event management modules end to end",
        "API design and schema contributions",
        "Testing and deployment readiness before handoff",
      ],
      technologies: [
        { name: "Laravel", icon: "logos:laravel" },
        { name: "MySQL", icon: "logos:mysql-icon" },
        { name: "React", icon: "logos:react" },
        { name: "PHP", icon: "logos:php" },
      ],
      href: "https://www.hadia.in/",
    },
  ] satisfies PortfolioProject[],
}
