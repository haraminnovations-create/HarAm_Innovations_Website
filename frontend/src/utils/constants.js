export const NAV_LINKS = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  {
    label: 'Products',
    path: '/products',
    children: [
      { label: 'Games',           path: '/products/games' },
      { label: 'Research Papers', path: '/products/agriculture' },
      { label: 'Education',       path: '/products/education' },
    ],
  },
  { label: 'Careers',  path: '/careers' },
  { label: 'Contact',  path: '/contact' },
]

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/haram_innovations?utm_source=qr&igsh=MWJmczFnenluemNvNw==', icon: 'instagram' },
  { label: 'Telegram',  href: 'https://t.me/haraminnovations',              icon: 'telegram' },
  { label: 'Website',   href: 'https://haraminnovations.com',               icon: 'website' },
]

export const COMPANY_INFO = {
  name: 'HarAm Innovations',
  tagline: 'Games · Research · Education · Innovation',
  email: 'haraminnovations@gmail.com',
  phone: '+91 8309211016',
  address: 'HarAm Innovations Pvt. Ltd., Tech Hub, Bengaluru, Karnataka - 560001, India',
}

export const STATS = [
  { value: '3',    label: 'Product Verticals' },
  { value: '3',    label: 'Products Launched' },
  { value: '100+', label: 'Happy Users' },
  { value: '2',    label: 'Years of Innovation' },
]

export const TEAM = [
  {
    name: 'Founder & CEO',
    role: 'Visionary Leader',
    bio: 'Driving innovation across games, research, and education with a passion for technology.',
    avatar: '/images/founder.jpg',
  },
  {
    name: 'CTO',
    role: 'Technology Head',
    bio: 'Full-stack architect building scalable products that make a real difference.',
    avatar: null,
  },
  {
    name: 'Head of AgriTech',
    role: 'Research Domain Expert',
    bio: 'Bridging the gap between cutting-edge research and real-world applications across industries.',
    avatar: null,
  },
  {
    name: 'Head of EdTech',
    role: 'Education Innovator',
    bio: 'Creating learning experiences that are engaging, accessible, and impactful.',
    avatar: null,
  },
]

export const GAME_PRODUCTS = [
  {
    id: 1,
    title: 'FarmQuest',
    category: 'games',
    description: 'An immersive farming simulation game that teaches real agricultural concepts through fun gameplay.',
    tags: ['Simulation', 'Strategy', 'Educational'],
    image: null,
  },
  {
    id: 2,
    title: 'BrainBattle',
    category: 'games',
    description: 'A competitive quiz game covering science, mathematics, and general knowledge for all age groups.',
    tags: ['Quiz', 'Multiplayer', 'Learning'],
    image: null,
  },
  {
    id: 3,
    title: 'EcoBuilder',
    category: 'games',
    description: 'Build and manage sustainable ecosystems while learning about environmental conservation.',
    tags: ['Puzzle', 'Strategy', 'Environment'],
    image: null,
  },
]

export const AGRI_PRODUCTS = [
  {
    id: 4,
    title: 'CropSense',
    category: 'agriculture',
    description: 'AI-powered crop monitoring system that uses satellite imagery and IoT sensors to optimize yield.',
    tags: ['AI/ML', 'IoT', 'Crop Monitoring'],
    image: null,
  },
  {
    id: 5,
    title: 'FarmerConnect',
    category: 'agriculture',
    description: 'Direct market linkage platform connecting farmers to buyers, eliminating middlemen.',
    tags: ['Marketplace', 'Mobile App', 'B2B'],
    image: null,
  },
  {
    id: 6,
    title: 'SoilIQ',
    category: 'agriculture',
    description: 'Smart soil testing kit with real-time analysis and personalized fertilizer recommendations.',
    tags: ['Hardware', 'Analytics', 'Sustainability'],
    image: null,
  },
]

export const EDU_PRODUCTS = [
  {
    id: 7,
    title: 'AI Notes',
    category: 'education',
    tagline: 'Your AI-Powered Notes Companion',
    description: 'Smarter notes powered by AI — capture ideas, extract text, sync everywhere. Built for students, professionals, and curious minds.',
    tags: ['Android', 'iOS', 'Windows', 'Web'],
    status: 'Coming Soon',
    features: [
      { emoji: '🧠', label: 'AI Powered',  desc: 'Smart AI assistance for your thoughts and ideas.' },
      { emoji: '🎤', label: 'Voice Notes', desc: 'Capture your ideas instantly with voice-to-text.' },
      { emoji: '🔍', label: 'OCR',         desc: 'Extract text from images and documents.' },
      { emoji: '☁️', label: 'Cloud Sync',  desc: 'Access your notes anywhere, anytime on any device.' },
      { emoji: '✏️', label: 'Rich Text',   desc: 'Format, organize, and personalize your notes beautifully.' },
    ],
    image: null,
  },
]

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'How AI is Revolutionizing Indian Agriculture',
    slug: 'ai-revolutionizing-indian-agriculture',
    category: 'Research Papers',
    author: 'HarAm Team',
    published_at: '2026-05-20',
    thumbnail: null,
    excerpt: 'From soil analysis to yield prediction, artificial intelligence is transforming how farmers across India grow their crops.',
  },
  {
    id: 2,
    title: 'The Power of Gamification in Education',
    slug: 'gamification-in-education',
    category: 'Education',
    author: 'HarAm Team',
    published_at: '2026-05-10',
    thumbnail: null,
    excerpt: 'Games are not just entertainment — they are one of the most powerful tools for learning. Here is how we are using them.',
  },
  {
    id: 3,
    title: 'HarAm Innovations Launches SkillBridge 2.0',
    slug: 'skillbridge-2-launch',
    category: 'News',
    author: 'HarAm Team',
    published_at: '2026-04-28',
    thumbnail: null,
    excerpt: 'We are excited to announce the launch of SkillBridge 2.0 — our most comprehensive vocational training platform yet.',
  },
]

export const JOB_OPENINGS = [
  {
    id: 1,
    title: 'Full-Stack Developer (React + Node.js)',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Bengaluru / Remote',
    description: 'Build and maintain our product suite across games, agritech, and edtech verticals.',
    requirements: ['3+ years React experience', 'Node.js & Express', 'Supabase/PostgreSQL', 'REST APIs'],
  },
  {
    id: 2,
    title: 'AgriTech Product Manager',
    department: 'Product',
    type: 'Full-time',
    location: 'Bengaluru',
    description: 'Own the AgriTech product roadmap and work directly with farmers to build solutions that matter.',
    requirements: ['5+ years product management', 'AgriTech domain knowledge', 'Data-driven mindset', 'Hindi/Kannada preferred'],
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Remote',
    description: 'Design intuitive, beautiful interfaces for our mobile and web products across all three verticals.',
    requirements: ['Figma expertise', '3+ years UI/UX', 'Mobile-first design', 'Portfolio required'],
  },
]
