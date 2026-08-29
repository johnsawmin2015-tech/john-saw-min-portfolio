import type { Project } from "@/types";

export const projects: readonly Project[] = [
  {
    slug: "thrive-ai",
    index: "01",
    title: "ThriveAI",
    category: "AI-assisted SME finance prototype",
    year: "2026",
    status: "COMPLETED",
    tier: "flagship",
    visual: "decision",
    summary:
      "A Burmese-first financial decision workspace that combines deterministic cash-flow analysis with an optional, evidence-constrained AI explanation layer for Myanmar SME scenarios.",
    challenge:
      "Keep every financial conclusion traceable to deterministic calculations while allowing an AI provider to explain — but never invent — the decision evidence.",
    stack: ["Next.js", "React", "TypeScript", "Zod", "Vitest", "Playwright"],
    capabilities: [
      { label: "Deterministic finance engine", stage: "implemented" },
      { label: "Cash Bridge and scenario modelling", stage: "implemented" },
      { label: "Burmese / English decision workspace", stage: "implemented" },
      { label: "Validated OpenAI / Gemini explanation layer", stage: "implemented" },
      { label: "Production identity and financial-data integrations", stage: "planned" },
    ],
    architecture: {
      label: "Evidence-locked decision pipeline",
      summary:
        "The browser submits a synthetic business profile and question; the server rebuilds trusted metrics, constrains model output to an evidence catalogue, and falls back to deterministic guidance whenever validation fails.",
      steps: [
        {
          title: "Decision workspace",
          detail:
            "A bilingual React interface compares profiles, risks, receivables, Cash Bridge values, and editable scenarios.",
        },
        {
          title: "Finance engine",
          detail:
            "Pure TypeScript derives growth, liquidity, runway, health, signals, collections, and scenario outcomes.",
        },
        {
          title: "Server evidence boundary",
          detail:
            "The analyze route validates the request, rejects oversized bodies, and rebuilds the trusted snapshot server-side.",
        },
        {
          title: "Validated explanation",
          detail:
            "OpenAI or Gemini selects known evidence and actions; schema, semantic, repair, timeout, and fallback controls guard the response.",
        },
      ],
      caveat:
        "All profiles and invoices are synthetic. The prototype is not an accounting forecast, credit decision, or production financial system.",
    },
    links: [
      { label: "Live demo", href: "https://thriveai-uab.vercel.app", kind: "live" },
      {
        label: "Source code",
        href: "https://github.com/johnsawmin2015-tech/ThriveAI-UAB",
        kind: "source",
      },
    ],
    caseStudy: [
      {
        heading: "Overview",
        body: [
          "ThriveAI is a decision-support prototype for Myanmar small and medium businesses. Its main workspace turns a synthetic business profile into a readable financial snapshot, near-term cash risks, receivable priorities, a Cash Bridge, and editable what-if scenarios in Burmese or English.",
          "The model layer is deliberately secondary. Core numbers and risk signals are produced by deterministic functions first; an optional model can explain a constrained set of those results, but it cannot supply trusted metrics from the client or introduce unrecognised actions.",
        ],
      },
      {
        heading: "Problem",
        body: [
          "A conversational interface can sound confident even when its numbers are unsupported. For financial decisions, the hard problem was therefore not adding a chat box; it was defining a boundary where calculations remain reproducible and every recommendation can point back to known evidence.",
        ],
      },
      {
        heading: "Deterministic core",
        points: [
          "Revenue, expense, profit, growth, 30-day baseline, runway, liquidity, working capital, and health scoring are computed in pure TypeScript.",
          "Signals separate operating profitability from cash pressure and prioritise overdue receivables without treating expected collections as predictions.",
          "Six scenario types feed the same calculation path, while Cash Bridge checks preserve accounting invariants and expose the effect on runway.",
        ],
      },
      {
        heading: "AI safety boundary",
        body: [
          "POST /api/analyze accepts a small validated request, rebuilds the selected profile and financial evidence on the server, and sends only the question plus that evidence to the configured provider. Model output must match a Zod schema, reference allowed evidence IDs and action codes, use contiguous ranks, and avoid duplicates. A single repair attempt is permitted; timeout, provider, schema, or semantic failure returns an honestly labelled deterministic fallback.",
          "This structure also limits prompt-injection impact: user text is treated as a question, not authority to redefine the evidence catalogue or trusted metrics.",
        ],
      },
      {
        heading: "Validation",
        body: [
          "The current source passes ESLint, TypeScript, an optimised Next.js build, and 43 Vitest tests across finance calculations, Cash Bridge, scenarios, signals, provider failures, repair and timeout behaviour, Burmese and mixed-language intent, prompt injection, and cross-business evidence isolation.",
          "A checked-in Playwright smoke script covers desktop and 320px layouts, scenario editing, fallback interaction, persona reset, response rendering, control sizing, and refreshed screenshots.",
        ],
      },
      {
        heading: "Current boundary",
        points: [
          "No production authentication, persistence, bank feed, accounting integration, or audit controls",
          "Rule-based baselines and straight-line scenarios omit tax, financing, inflation, seasonality, probability, and unexpected shocks",
          "Burmese copy and methodology still require native-language, accounting, security, privacy, and compliance review before real use",
        ],
      },
    ],
  },
  {
    slug: "student-registration-system",
    index: "02",
    title: "Student Records Portal",
    category: "Frontend institutional workflow",
    year: "2026",
    status: "ACTIVE DEVELOPMENT",
    tier: "flagship",
    visual: "records",
    summary:
      "An auth-gated React portal for student records, registration, administrator workflows, bilingual UI, and a simulated KBZ Pay handoff behind typed mock API contracts.",
    challenge:
      "Design realistic student and administrator journeys without allowing a frontend prototype, mock payment result, or route guard to masquerade as a production security boundary.",
    stack: ["React", "TypeScript", "TanStack Query", "Zustand", "Zod", "Playwright"],
    capabilities: [
      { label: "Admin and student role-adapted screens", stage: "implemented" },
      { label: "Student records and registration wizard", stage: "implemented" },
      { label: "English / Myanmar localisation", stage: "implemented" },
      { label: "Mock KBZ Pay initiation and callback", stage: "implemented" },
      { label: "Production build type reconciliation", stage: "in-progress" },
      { label: "Backend, identity, database, and merchant integration", stage: "planned" },
    ],
    architecture: {
      label: "Contract-first frontend prototype",
      summary:
        "Feature screens depend on typed API envelopes rather than mock implementation details, allowing adapters to be replaced while keeping query, form, and route behaviour stable.",
      steps: [
        {
          title: "React routes",
          detail:
            "Role-adapted dashboards, record views, registration, profile, payment, and callback pages form the workflow surface.",
        },
        {
          title: "Feature state",
          detail:
            "TanStack Query owns server-shaped data, Zustand holds memory-only auth state, and React Hook Form with Zod validates input.",
        },
        {
          title: "Typed contracts",
          detail:
            "Shared envelopes, schemas, query keys, CSV helpers, and formatters keep feature boundaries explicit.",
        },
        {
          title: "Mock adapters",
          detail:
            "In-memory data, simulated latency/errors, and a local KBZ provider page exercise async states without claiming real integrations.",
        },
      ],
      caveat:
        "This is frontend-only. Tokens reset on refresh, route guards are UX controls, and the current production build is blocked by a dashboard-stat contract mismatch.",
    },
    caseStudy: [
      {
        heading: "Overview",
        body: [
          "The portal supports two demo identities: an administrator who reviews records and registrations, and a student who manages a profile, completes a registration wizard, and follows a simulated payment flow. English and Myanmar catalogues cover the priority screens.",
        ],
      },
      {
        heading: "Workflow design",
        points: [
          "Admin dashboard, searchable student list, record detail, CSV export, and payment-status summaries",
          "Student profile and a multi-step registration wizard validated with shared Zod schemas",
          "Initiate-payment, mock hosted-provider, and callback-status screens that treat the provider reference as an identifier rather than proof of payment",
          "Loading, empty, retry, and intermittent mock-error states exercised through the same feature adapters",
        ],
      },
      {
        heading: "Architecture decision",
        body: [
          "Every feature API returns the same typed envelope and UI code unwraps that contract through TanStack Query. Replacing a mock with a real HTTP adapter should therefore be a boundary change rather than a screen rewrite. Auth state intentionally stays in memory to avoid placing tokens beside student and payment metadata in Web Storage.",
        ],
      },
      {
        heading: "Security boundary",
        body: [
          "ProtectedRoute improves navigation but is not authorisation. A production backend must enforce every permission, issue secure httpOnly session cookies, validate payment status with the provider, protect student data, and supply the database and audit trail. Those controls are documented as future integration work, not implied by the prototype.",
        ],
      },
      {
        heading: "Validation",
        body: [
          "Fourteen current Vitest unit and component checks pass across authentication flows, routing, state, and schemas; Playwright happy paths are also checked in. The lint run reports one non-blocking Vite configuration warning.",
          "The production build currently stops on a TypeScript mismatch: mock dashboard statistics do not yet include two fields required by DashboardStats. That open defect is why this project is labelled active development.",
        ],
      },
      {
        heading: "Next work",
        points: [
          "Reconcile the dashboard statistics contract and restore a green production build",
          "Replace mock feature adapters with a server-enforced API and persistent database",
          "Integrate real identity, email, audit logging, and a verified KBZ merchant flow",
        ],
      },
    ],
  },
  {
    slug: "morrow-commerce",
    index: "03",
    title: "Morrow",
    category: "Framework-free commerce storefront",
    year: "2026",
    status: "COMPLETED",
    tier: "flagship",
    visual: "commerce",
    summary:
      "A seven-page, dependency-light storefront with product discovery, variant-aware cart rules, resilient browser persistence, wishlist and recently viewed flows, and a clearly simulated checkout.",
    challenge:
      "Keep catalogue, URL, variant, inventory, and stored cart state coherent across separate pages without a framework or server session.",
    stack: ["JavaScript", "HTML", "CSS", "Web Storage", "Node test runner"],
    capabilities: [
      { label: "Search, filters, sorting, and URL state", stage: "implemented" },
      { label: "Variant-aware cart and inventory limits", stage: "implemented" },
      { label: "Wishlist and recently viewed persistence", stage: "implemented" },
      { label: "Validated simulated checkout and order receipt", stage: "implemented" },
      {
        label: "Production catalogue, identity, payment, and fulfilment services",
        stage: "planned",
      },
    ],
    architecture: {
      label: "Browser-native commerce layers",
      summary:
        "Static pages compose shared domain modules and page controllers; guarded, versioned storage preserves only valid cart and preference state when Web Storage is available.",
      steps: [
        {
          title: "Semantic pages",
          detail:
            "Home, shop, product, cart, wishlist, checkout, and order-success documents retain usable landmarks without JavaScript.",
        },
        {
          title: "Page controllers",
          detail:
            "Small modules bind discovery, product, drawer, cart, wishlist, checkout, and feedback interactions.",
        },
        {
          title: "Commerce domain",
          detail:
            "Catalogue search, URL filters, variant identity, stock limits, pricing, shipping, and promotion rules stay reusable.",
        },
        {
          title: "Guarded storage",
          detail:
            "Namespaced version envelopes reject malformed state and degrade to memory when persistent storage is unavailable.",
        },
      ],
      caveat:
        "Checkout and order creation are intentionally simulated. There is no account system, backend catalogue, payment processor, tax engine, or fulfilment service.",
    },
    links: [
      {
        label: "Source code",
        href: "https://github.com/johnsawmin2015-tech/E-Commerce",
        kind: "source",
      },
    ],
    caseStudy: [
      {
        heading: "Overview",
        body: [
          "Morrow demonstrates a complete frontend shopping journey with 24 locally defined products. It intentionally uses browser-native modules and progressive semantic structure so the engineering decisions remain visible rather than hidden behind framework conventions.",
        ],
      },
      {
        heading: "Discovery and URL state",
        body: [
          "Search normalises case and diacritics, ranks relevant matches, and combines predictably with category, price, availability, and sort controls. Shop state round-trips through the URL so a filtered result can be refreshed or shared without an application store.",
        ],
      },
      {
        heading: "Cart correctness",
        body: [
          "A cart line is identified by product plus canonicalised variant options, so identical variants merge and different variants remain separate. Hydration removes stale product IDs, malformed options, and quantities beyond current inventory, then rewrites the cleaned state. Stock remains capped across every variant of the same product.",
        ],
      },
      {
        heading: "Resilient persistence",
        body: [
          "Cart, wishlist, and recently viewed data use namespaced, schema-versioned envelopes. Invalid JSON or a version mismatch is discarded safely, and blocked LocalStorage falls back to memory instead of breaking shopping. Short-lived checkout and order details use session storage so they clear with the tab.",
        ],
      },
      {
        heading: "Accessibility and failure states",
        points: [
          "Semantic landmarks, skip navigation, visible focus, live announcements, and keyboard-managed drawer behaviour",
          "Explicit empty, invalid-product, storage-failure, image-fallback, stock-limit, and checkout-validation states",
          "The checkout summary states that no payment or order is sent",
        ],
      },
      {
        heading: "Validation",
        body: [
          "All JavaScript modules pass Node syntax checks. Thirteen dependency-free tests pass across catalogue coherence, diacritic-insensitive search, combined URL state, variant identity, stock clamping, wishlist guards, versioned session storage, pricing, semantic landmarks, unique IDs, and local navigation targets.",
        ],
      },
    ],
  },
  {
    slug: "personal-finance",
    index: "04",
    title: "FinanceFlow",
    category: "Local-first personal finance dashboard",
    year: "2026",
    status: "COMPLETED",
    tier: "selected",
    visual: "finance",
    summary:
      "A modular vanilla-JavaScript dashboard for transaction management, budgets, savings goals, charts, filtering, and portable browser-local data.",
    challenge:
      "Keep financial state, derived summaries, charts, and import/export workflows consistent while preserving privacy in a backend-free browser application.",
    stack: ["JavaScript", "HTML", "CSS", "Chart.js", "LocalStorage"],
    capabilities: [
      { label: "Income and expense CRUD", stage: "implemented" },
      { label: "Search, filters, date ranges, and sorting", stage: "implemented" },
      { label: "Budgets, savings goal, and dashboard insights", stage: "implemented" },
      { label: "CSV import/export and JSON backup", stage: "implemented" },
      { label: "Automated behavioural and browser test suite", stage: "planned" },
    ],
    architecture: {
      label: "Local-first finance flow",
      summary:
        "A DOM controller coordinates focused views and charts, while the finance controller owns validation, state mutations, calculations, and the namespaced persistence service.",
      steps: [
        {
          title: "Dashboard shell",
          detail:
            "Semantic HTML and responsive CSS expose dashboard, transactions, statistics, preferences, and modal workflows.",
        },
        {
          title: "UI and views",
          detail:
            "A UIController delegates events and renders DashboardView, TransactionView, StatisticsView, and ChartController outputs.",
        },
        {
          title: "Finance controller",
          detail:
            "Transactions, validation, filters, summaries, category distribution, monthly flow, goals, and insights remain DOM-independent.",
        },
        {
          title: "Storage service",
          detail:
            "Namespaced LocalStorage keys persist transactions, budget, goal, and display preferences with guarded reads and explicit write errors.",
        },
      ],
      caveat:
        "Data stays in one browser profile and the app has no accounts, encrypted sync, backend, or financial-advice service. Amounts use JavaScript numbers rather than a decimal-money type.",
    },
    caseStudy: [
      {
        heading: "Overview",
        body: [
          "FinanceFlow is a browser-local personal finance workspace. Users can record income and expenses, edit or remove transactions, set a monthly budget and savings target, filter the ledger, and review dashboard and statistical summaries without creating an account.",
        ],
      },
      {
        heading: "Separation of concerns",
        body: [
          "FinanceController owns the data and business operations and never touches the DOM. UIController binds events and coordinates focused views, while a chart adapter owns Chart.js instances. That separation keeps filtering, summary calculations, import, and mutation logic callable without coupling it to page markup.",
        ],
      },
      {
        heading: "Data portability",
        points: [
          "CSV import validates each row and reports accepted and skipped records",
          "CSV export provides a spreadsheet-friendly transaction ledger",
          "JSON backup preserves the broader local state for later restoration",
          "Clear-all removes only FinanceFlow-owned storage keys",
        ],
      },
      {
        heading: "Derived views",
        body: [
          "The dashboard derives total and current-month income, expenses, balance, savings, budget usage, category distribution, and six-month flow from the ledger. Statistics identify the largest current-month expense category, largest income, daily average, and expense ratio, while explicit empty states avoid presenting invented insights.",
        ],
      },
      {
        heading: "Validation",
        body: [
          "The current check command syntax-validates every JavaScript module successfully. It does not execute domain or browser behaviour, so automated tests for calculations, storage recovery, CSV injection handling, and end-to-end interactions remain release work rather than implied coverage.",
        ],
      },
      {
        heading: "Current boundary",
        points: [
          "Browser-local storage is convenient but does not provide account security, encrypted backup, multi-device sync, or recovery",
          "Chart.js is loaded as a client dependency and chart availability must not block the core ledger",
          "The dashboard is a tracking tool and does not provide financial advice",
        ],
      },
    ],
  },
  {
    slug: "attendance-management-system",
    index: "05",
    title: "UniTrack",
    category: "Frontend attendance operations system",
    year: "2026",
    status: "COMPLETED",
    tier: "selected",
    visual: "attendance",
    summary:
      "A role-adapted vanilla-JavaScript SPA for student, teacher, course, class, attendance, report, settings, and audit workflows backed by seeded browser data.",
    challenge:
      "Model attendance history and institutional policy consistently across administrator, teacher, and student views without presenting client-side roles as real security.",
    stack: ["JavaScript", "HTML", "CSS", "Web Storage", "Hash routing"],
    capabilities: [
      { label: "Admin, teacher, and student demo roles", stage: "implemented" },
      { label: "Student, teacher, course, and class management", stage: "implemented" },
      { label: "Auditable attendance registers and policy calculations", stage: "implemented" },
      { label: "Filtered reports, CSV export, and print views", stage: "implemented" },
      {
        label: "Server identity, authorisation, persistence, and audit integrity",
        stage: "planned",
      },
    ],
    architecture: {
      label: "Policy-aware browser application",
      summary:
        "A guarded hash router loads role-specific pages over service and model layers; central calculations interpret raw attendance records through configurable weights and thresholds before reports render them.",
      steps: [
        {
          title: "Role-adapted pages",
          detail:
            "Dashboard, directories, classes, attendance, reports, settings, and audit views load through a guarded hash router.",
        },
        {
          title: "Services and models",
          detail:
            "Validation and dependency rules govern entity changes, attendance registers, reporting datasets, settings, and audit events.",
        },
        {
          title: "Calculation policy",
          detail:
            "Central functions apply configured status weights and thresholds to student, course, at-risk, and overall summaries.",
        },
        {
          title: "Browser state",
          detail:
            "AppState hydrates namespaced LocalStorage data; sessionStorage holds the current demo identity and seed data supplies the initial workspace.",
        },
      ],
      caveat:
        "Demo credentials, session tokens, permissions, records, and audit entries all live in the browser. They are workflow simulations, not production security or tamper-resistant records.",
    },
    caseStudy: [
      {
        heading: "Overview",
        body: [
          "UniTrack models the operational surface of an attendance system without a framework. Administrators manage directories and settings, teachers manage assigned classes and attendance, and students receive a reduced, read-oriented experience. Navigation items and routes adapt to the selected demo role.",
        ],
      },
      {
        heading: "Domain rules",
        body: [
          "Service modules validate relationships and protect history: a student with attendance cannot be deleted, a teacher with assignments cannot be removed, and a class with records should be cancelled rather than erased. Registers validate every enrolled student and require confirmation before overwriting existing attendance.",
        ],
      },
      {
        heading: "Attendance policy",
        body: [
          "Raw records preserve present, absent, late, and excused states. A central calculation module applies configurable weights and threshold bands so the dashboard, reports, student history, course summaries, and at-risk list use the same interpretation rather than duplicating formulas across pages.",
        ],
      },
      {
        heading: "Reporting and audit",
        points: [
          "Student and course datasets can be filtered by date range and operational scope",
          "Reports support presentation-ready tables, CSV download, and print workflows",
          "Create, update, delete, attendance, login, logout, and settings actions generate browser-local audit entries",
        ],
      },
      {
        heading: "Validation",
        body: [
          "Every current JavaScript module passes Node syntax checking. The project does not include automated behavioural, accessibility, or browser tests, so role scope, storage recovery, calculations, modal focus, and reports still need formal regression coverage.",
        ],
      },
      {
        heading: "Security boundary",
        body: [
          "The source explicitly states that production requires secure password hashing, server sessions, HTTPS, server-enforced permissions, protected persistence, and durable audit controls. Client-side route guards and visible role menus improve the demo experience but cannot protect data from a user who controls the browser.",
        ],
      },
    ],
  },
  {
    slug: "sentinel",
    index: "06",
    title: "SANTINEL",
    category: "Security operations dashboard prototype",
    year: "2026",
    status: "IN DEVELOPMENT",
    tier: "experimental",
    visual: "security",
    summary:
      "An interactive React security-operations dashboard that explores camera grids, alert triage, activity, analytics, zone maps, user views, reports, and settings using typed static demonstration data.",
    challenge:
      "Make a dense monitoring interface navigable and responsive while clearly separating polished control interactions from absent cameras, detection services, authentication, and persistence.",
    stack: ["React", "TypeScript", "Vite", "React Router", "Recharts", "Motion"],
    capabilities: [
      { label: "Multi-route operations dashboard", stage: "implemented" },
      { label: "Camera, alert, activity, user, and report filtering", stage: "implemented" },
      { label: "Interactive zone map and local control states", stage: "implemented" },
      { label: "Live camera, alert, and analytics data services", stage: "planned" },
      { label: "Production authentication, persistence, and AI inference", stage: "planned" },
    ],
    architecture: {
      label: "Static-data operations prototype",
      summary:
        "React Router composes a shared monitoring shell and focused pages over typed fixture collections; component state powers filters, acknowledgement, modals, settings, and report-generation feedback.",
      steps: [
        {
          title: "Operations shell",
          detail:
            "A responsive sidebar, header, notification panel, and nested router organise nine dashboard areas.",
        },
        {
          title: "Focused pages",
          detail:
            "Camera, alert, activity, analytics, zone, user, report, and settings views each own their local interactions.",
        },
        {
          title: "Typed fixtures",
          detail:
            "Camera, alert, activity, chart, user, and report collections provide deterministic demonstration states.",
        },
        {
          title: "Visual components",
          detail:
            "Recharts, SVG floor plans, Motion transitions, cards, tables, and modals turn those fixtures into an operations narrative.",
        },
      ],
      caveat:
        "There are no camera streams, WebSockets, backend endpoints, authentication checks, stored settings, report exports, or AI models. Labels and metrics are fixture content.",
    },
    caseStudy: [
      {
        heading: "Overview",
        body: [
          "SANTINEL is a high-fidelity interface prototype for a security operations centre. It demonstrates how operators might move between an overview, camera inventory, alert queue, activity timeline, analytics, physical zones, users, reports, and system settings without claiming that the underlying surveillance platform exists.",
        ],
      },
      {
        heading: "Interaction model",
        points: [
          "Camera search, zone and health filters, grid/list switching, expanded camera modal, playback and PTZ-style local controls",
          "Alert severity and acknowledgement filters with local acknowledge, acknowledge-all, and dismiss actions",
          "Activity and user filtering, interactive zone selection, report-generation feedback, and sectioned settings controls",
          "Charts and status cards built from the same typed fixture collections",
        ],
      },
      {
        heading: "Data boundary",
        body: [
          "All cameras, events, alerts, user records, reports, and chart series are defined in local TypeScript files or page constants. Actions update React component state only. A timestamp changing on a camera card is presentation behaviour, not evidence of a stream, and values such as detection accuracy are demonstration copy rather than measured model performance.",
        ],
      },
      {
        heading: "Architecture decision",
        body: [
          "The prototype keeps routes and page interactions concrete while deferring service contracts. That makes it useful for validating information density and operator workflows, but a production path must first define camera transport, event schemas, tenancy, permissions, retention, incident handling, auditability, and degraded-network behaviour.",
        ],
      },
      {
        heading: "Validation",
        body: [
          "The current Vite production build succeeds across 2,717 transformed modules. The generated client bundle is approximately 1.06 MB before compression and triggers the configured large-chunk warning, while no automated unit, accessibility, or end-to-end suite is present.",
        ],
      },
      {
        heading: "Next work",
        points: [
          "Split route-level code and remove unused generated component dependencies before treating performance as release-ready",
          "Define authenticated, tenant-aware service contracts before connecting any live camera or alert source",
          "Replace demonstration metrics with traceable telemetry and test keyboard, screen-reader, failure, and low-bandwidth behaviour",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const projectTiers = [
  { key: "flagship", label: "Flagship" },
  { key: "selected", label: "Selected engineering work" },
  { key: "experimental", label: "Advanced / experimental" },
] as const;
