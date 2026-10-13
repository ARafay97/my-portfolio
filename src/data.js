export const profile = {
  name: 'Abdul Rafay',
  role: 'Software Engineer · Cloud & AI',
  location: 'Manchester, UK',
  email: 'rafay.97@yahoo.com',
  site: 'rafay-dev.com',
  github: 'https://github.com/ARafay97',
  linkedin: 'https://www.linkedin.com/in/abdul-rafay-aa66132a7/',
  credly: 'https://www.credly.com/users/abdul-rafay.f85aca10',
  intro:
    'I build full-stack products and cloud systems — from AI chatbots grounded in retrieval to scalable AWS architectures. AWS Certified Solutions Architect, founder of PANECCI.',
};

export const projects = [
  {
    title: 'AI Chatbot with RAG',
    stack: ['LLMs', 'RAG', 'Embeddings', 'Vector search'],
    points: [
      'An AI chatbot that answers questions grounded in a custom knowledge base using retrieval-augmented generation.',
      'Document ingestion, chunking, embeddings and vector search retrieve relevant context per query — improving accuracy while keeping token usage efficient.',
    ],
    featured: true,
  },
  {
    title: 'Cloud Restaurant Ordering & Billing System',
    stack: ['AWS', 'Cloud architecture'],
    points: [
      'A scalable, highly available cloud architecture for a restaurant ordering and billing system.',
      'Covers compute, database, networking, security and cost in line with AWS Well-Architected principles.',
    ],
    featured: true,
  },
  {
    title: 'PANECCI Solutions',
    year: '2025 – 2026',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Neon', 'Claude API'],
    points: ['Multi-tenant AI customer-support chatbot SaaS for UK local businesses.'],
    link: 'https://github.com/ARafay97/panecci.solutions',
    featured: true,
  },
  {
    title: 'Study AI',
    year: '2025',
    stack: ['React', 'Tailwind CSS', 'Firebase', 'OpenAI API'],
    points: ['Full-stack AI study planner with voice commands, gamified analytics and calendar export.'],
    link: 'https://github.com/ARafay97/StudyAI',
  },
  {
    title: 'Swipe',
    year: '2025',
    stack: ['React', 'Firebase', 'AI video tagging'],
    points: ['Mobile-first social video app with swipe-based UX, real-time video uploads and custom trending algorithms.'],
  },
  {
    title: 'Machine Learning Model',
    stack: ['Python'],
    points: ['Built and trained a machine learning model, covering data preparation, model training and evaluation.'],
  },
  {
    title: 'Arduino Car',
    year: '2025',
    stack: ['Arduino', 'C++', 'Ultrasonic sensors'],
    points: ['Autonomous car prototype with motor control, obstacle detection and modular navigation logic.'],
  },
  {
    title: 'Train System',
    year: '2024',
    stack: ['Java', 'Waterfall'],
    points: ['Team project processing train-system data with query handling to provide efficient travel information.'],
  },
];

export const certifications = [
  { name: 'AWS Certified Solutions Architect – Associate', code: 'SAA-C03', issuer: 'Amazon Web Services' },
  { name: 'AWS Certified Cloud Practitioner', code: 'CLF-C02', issuer: 'Amazon Web Services' },
];

export const achievements = [
  { year: '2022', title: 'Sutton Trust Programme – Genetics', org: 'Imperial College London' },
  { year: '2022', title: 'Cambridge Chemistry Challenge – Copper Award', org: 'University of Cambridge' },
  { year: '2020', title: 'Duke of Edinburgh Bronze Award', org: 'DofE' },
  { year: '2019', title: 'Industrial Cadets Challenger – TSC Digital Explorers', org: 'Industrial Cadets' },
  { year: '2018', title: 'UKMT Intermediate Mathematical Challenge – Gold Certificate', org: 'UKMT' },
  { year: '2018', title: 'Royal Institution Maths Masterclasses', org: 'Manchester Metropolitan University' },
];

export const ventures = [
  { title: 'Panecci', description: 'E-commerce brand and TikTok Shop.', link: 'https://www.tiktok.com/@panecci' },
  { title: 'Panecci Perfumes', description: 'A Panecci sub-brand specialising in fragrance.', link: 'https://www.tiktok.com/@panecci' },
  { title: 'AurakizStudio', description: 'Etsy shop selling a range of designed products.', link: 'https://www.etsy.com/shop/AURAKIZStudio' },
];
