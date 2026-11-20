// Single source of truth for site copy. Figures come from the ARM Flow Venture Report (A.Y. 2026-27)
// and the ARM Flow idea-pitch case study. Projections and estimates are labelled as such in the UI.

export const site = {
  name: 'ARM Tech',
  product: 'ARM Flow',
  tagline: 'Building technology. Solving problems. Creating the future.',
  description:
    'ARM Tech builds ARM Flow: an AI workflow automation platform where Indian small businesses describe a task in plain English, approve the plan, and let it run across Google Sheets, Gmail and WhatsApp.',
  repo: 'https://github.com/RamNarra/arm-tech-website',
  email: 'info@armtech.com',
};

export const nav = [
  { href: '#problem', label: 'Problem' },
  { href: '#prototype', label: 'Prototype' },
  { href: '#services', label: 'Services' },
  { href: '#validation', label: 'Validation' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#team', label: 'Team' },
];

export const stats = [
  { value: '6.3 cr', label: 'MSMEs in India', note: 'Ministry of MSME estimate' },
  { value: '1–2 h', label: 'lost per owner, per day', note: 'to repeated manual tasks' },
  { value: '4 of 5', label: 'owners call it important', note: 'our discovery interviews' },
  { value: '4.5 / 5', label: 'trust at the approval gate', note: '6 prototype walkthroughs' },
];

export const rootCauses = [
  { title: 'Tools do not talk', body: 'WhatsApp, Sheets, Gmail and UPI each work fine alone. The owner becomes the human glue between all of them.' },
  { title: 'Enterprise tools cost too much', body: 'Zapier and Make bill in dollars. Power Automate assumes an IT department.' },
  { title: 'Rule builders need a programmer', body: 'Trigger-and-action canvases are built for developers, not for a coaching-centre owner.' },
  { title: 'Nothing fits Indian practice', body: 'GST invoices, UPI reminders and Telugu or Hindi messages are edge cases in global products.' },
  { title: 'Fear of a wrong message', body: 'Owners will not risk a robot messaging a customer. This was the number-one objection, not price.' },
];

export const services = [
  { icon: 'Sparkles', title: 'ARM Flow platform', body: 'Type what you want automated. ARM Flow turns it into a numbered plan, runs it on schedule and keeps a full run history.', tag: 'Product' },
  { icon: 'LayoutTemplate', title: 'Indian SMB templates', body: 'Fee reminders, enquiry capture, payment follow-up, weekly report and order confirmation, in English and Telugu.', tag: 'Templates' },
  { icon: 'ShieldCheck', title: 'Human approval gate', body: 'Every sensitive step pauses and shows the full recipient list. Nothing is sent until a named person approves.', tag: 'Trust' },
  { icon: 'Plug', title: 'Connected to your tools', body: 'Google Sheets, Gmail, WhatsApp Business, Calendar, UPI payment links and Tally export through isolated connectors.', tag: 'Integrations' },
  { icon: 'HandHelping', title: 'Guided onboarding', body: 'A founder-led setup call or WhatsApp chat for the first hundred customers. One-time Rs 1,999.', tag: 'Service' },
  { icon: 'Handshake', title: 'Accountant partner programme', body: 'Chartered accountants and bookkeepers who manage many small clients earn a 15 percent revenue share in year one.', tag: 'Partners' },
];

export const safety = [
  'No sensitive step runs without an approval recorded against a named user.',
  'Every run writes an audit entry: who asked, who approved, what was sent.',
  'Credentials are stored as references, never inside the workflow text.',
  'A workflow stops after three failed tries and alerts the owner instead of looping silently.',
  'The planner can only choose from a fixed list of approved actions, which caps what a wrong model answer can do.',
];

export const stack = ['Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'LLM orchestration (OpenAI / Claude)', 'PostgreSQL', 'Redis queue', 'Google Sheets and Gmail APIs', 'WhatsApp Business API', 'UPI payment links', 'Figma'];

export const architecture = [
  { title: 'Business user', sub: 'web or WhatsApp' },
  { title: 'Chat UI', sub: 'plain English prompt' },
  { title: 'FastAPI gateway', sub: 'auth, tenant, billing' },
  { title: 'LLM planner', sub: 'prompt to workflow plan' },
  { title: 'Approval gate', sub: 'confirm sensitive steps' },
  { title: 'Workflow engine', sub: 'scheduler + retries' },
  { title: 'Connectors', sub: 'Gmail · Sheets · WhatsApp · UPI' },
];

export const interviews = [
  { id: 'R1', who: 'Coaching centre owner, 3 branches', quote: 'I copy every enquiry from WhatsApp into a sheet. Fee reminders take me an hour each week.' },
  { id: 'R2', who: 'D2C home decor co-founder', quote: 'Tried Zapier but the setup was confusing and the dollar billing awkward. Gave up after two days.' },
  { id: 'R4', who: 'Operations manager, 25-person agency', quote: 'Weekly client reports are built by hand. Two people lose half a day.' },
  { id: 'R5', who: 'Accounts executive, 12-person logistics firm', quote: 'Nobody wants to risk a robot messaging a client.' },
];

export const ratings = [
  { who: 'Coaching centre', metric: 'Clarity', value: 5 },
  { who: 'D2C founder', metric: 'Clarity', value: 4 },
  { who: 'Agency manager', metric: 'Trust', value: 4 },
  { who: 'Logistics firm', metric: 'Trust', value: 5 },
  { who: 'Classmate', metric: 'Clarity', value: 3 },
  { who: 'Family business', metric: 'Clarity', value: 4 },
];

export const learnings = [
  { believed: 'Owners want a general business assistant', learned: 'They want two or three specific jobs done reliably', changed: 'First release narrowed to recurring communication and sheets' },
  { believed: 'Price will be the main objection', learned: 'Trust in AI-sent messages worried people more', changed: 'Approval gate became a core feature' },
  { believed: 'English templates are enough', learned: 'Owners prefer Telugu and English for customers', changed: 'Templates planned with regional language support' },
];

export const plans = [
  { name: 'Starter', price: 'Rs 499', per: '/ month', points: ['3 workflows', 'Indian SMB templates', 'Approval gate and audit log', 'Run history and time-saved report'], featured: false },
  { name: 'Growth', price: 'Rs 999', per: '/ month', points: ['15 workflows', 'Team access', 'Everything in Starter', 'Priority WhatsApp support'], featured: true },
  { name: 'Setup and packs', price: 'Rs 1,999', per: 'one-time', points: ['Guided onboarding call', 'Premium template packs at Rs 299 each', 'Best for consultants and agencies'], featured: false },
];

export const market = [
  { label: 'TAM', value: 'Rs 8,400 cr', sub: '1.0 crore digitally active SMBs × Rs 8,400 a year', width: '100%' },
  { label: 'SAM', value: 'Rs 1,260 cr', sub: '15 lakh SMBs in five southern and western states', width: '72%' },
  { label: 'SOM', value: 'Rs 2.1 cr', sub: '2,500 paying customers by end of year 3', width: '46%' },
];

export const unitEconomics = [
  { k: 'Revenue per customer', v: 'Rs 700 / mo' },
  { k: 'Gross margin', v: 'Rs 489 / mo' },
  { k: 'Lifetime gross profit', v: 'Rs 12,250' },
  { k: 'LTV : CAC', v: '8.2 : 1' },
  { k: 'CAC payback', v: '3.1 months' },
];

export const roadmap = [
  { phase: 'Pilot', when: 'Months 1–2', focus: 'Three businesses, seven-day test', goal: 'Evidence of time saved' },
  { phase: 'Private beta', when: 'Months 3–5', focus: '30 trial users in Hyderabad', goal: 'Fix issues, ship five templates' },
  { phase: 'Public launch', when: 'Months 6–9', focus: 'Paid plans, accountant referrals', goal: '60 paying customers' },
  { phase: 'Expansion', when: 'Months 10–12', focus: 'Bengaluru and Chennai', goal: '150 paying customers' },
];

export const pilot = {
  scope: 'Three small-business users, seven days. Each picks one recurring workflow that involves communication or spreadsheets.',
  targets: ['At least 30% less manual handling time', 'At least 90% successful workflow runs', 'Human approval on every sensitive action'],
  risks: ['Small sample may not represent all SMBs', 'Third-party API failures can interrupt workflows', 'AI actions can be wrong and need safeguards', 'Retention and long-term savings are unvalidated'],
};

export const team = [
  { name: 'Sripathi Aashish', role: 'Customer research and market analysis', body: 'Led discovery interviews, the competitor study, and the TAM, SAM and SOM estimates.' },
  { name: 'Panyam Ram Manvith', role: 'UX design, prototype and financial model', body: 'Designed the Figma prototype, ran usability walkthroughs, built the break-even analysis.' },
  { name: 'Narra Ram Charan Mudiraj', role: 'Backend, AI orchestration and technical lead', body: 'Designed the architecture, built the FastAPI planning stub and LLM orchestration concept.' },
];
