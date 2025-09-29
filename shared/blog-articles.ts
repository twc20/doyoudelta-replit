export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  author: string;
  publishedDate: string;
  category: string;
  tags: string[];
  image?: string;
  featured: boolean;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    title: "When Should You Replace Your Tires? 5 Warning Signs",
    slug: "when-to-replace-tires",
    excerpt: "Learn the critical warning signs that indicate it's time for new tires. From tread depth to age, we cover everything you need to know to stay safe on the road.",
    author: "Delta Tire Team",
    publishedDate: "2025-01-15",
    category: "Tire Maintenance",
    tags: ["tire safety", "maintenance", "tire replacement"],
    featured: true
  },
  {
    id: "2",
    title: "Oil Change Myths: How Often Do You Really Need Service?",
    slug: "oil-change-myths",
    excerpt: "The 3,000-mile oil change rule is outdated. Modern vehicles and synthetic oils have changed the game. Find out how often YOUR car needs an oil change.",
    author: "Delta Tire Team",
    publishedDate: "2025-01-10",
    category: "Maintenance Tips",
    tags: ["oil change", "maintenance", "synthetic oil"],
    featured: true
  },
  {
    id: "3",
    title: "All-Terrain vs. Mud-Terrain Tires: Which is Right for Your Truck?",
    slug: "at-vs-mt-tires",
    excerpt: "Choosing between all-terrain and mud-terrain tires? We break down the differences, pros, cons, and help you decide which tire type matches your driving needs.",
    author: "Delta Tire Team",
    publishedDate: "2025-01-05",
    category: "Tire Guide",
    tags: ["truck tires", "all-terrain", "mud-terrain", "buying guide"],
    featured: true
  },
  {
    id: "4",
    title: "Brake Warning Signs You Should Never Ignore",
    slug: "brake-warning-signs",
    excerpt: "Squealing, grinding, or a soft pedal? These brake warning signs require immediate attention. Learn what each symptom means and when to get service.",
    author: "Delta Tire Team",
    publishedDate: "2024-12-28",
    category: "Safety",
    tags: ["brakes", "safety", "warning signs"],
    featured: false
  },
  {
    id: "5",
    title: "Winter Driving in the Four Corners: Essential Tips",
    slug: "winter-driving-tips",
    excerpt: "Driving in New Mexico and Arizona winter conditions requires preparation. Our comprehensive guide covers tires, emergency supplies, and safe driving techniques.",
    author: "Delta Tire Team",
    publishedDate: "2024-12-20",
    category: "Safety",
    tags: ["winter driving", "safety", "four corners"],
    featured: false
  },
  {
    id: "6",
    title: "How Wheel Alignment Saves You Money on Tires",
    slug: "alignment-saves-money",
    excerpt: "Proper wheel alignment can extend your tire life by thousands of miles. Learn how misalignment damages tires and costs you money.",
    author: "Delta Tire Team",
    publishedDate: "2024-12-15",
    category: "Tire Maintenance",
    tags: ["alignment", "tire life", "save money"],
    featured: false
  },
  {
    id: "7",
    title: "The Ultimate Truck Accessory Buyer's Guide",
    slug: "truck-accessory-guide",
    excerpt: "From bed liners to lift kits, we guide you through the most popular truck accessories and help you choose what's right for your needs and budget.",
    author: "Delta Tire Team",
    publishedDate: "2024-12-10",
    category: "Truck Accessories",
    tags: ["truck accessories", "buying guide", "upgrades"],
    featured: false
  },
  {
    id: "8",
    title: "Understanding Your Digital Vehicle Inspection Report",
    slug: "digital-inspection-guide",
    excerpt: "Delta Tire provides digital inspection reports with every service. Learn how to read your report, understand the recommendations, and prioritize repairs.",
    author: "Delta Tire Team",
    publishedDate: "2024-12-05",
    category: "Maintenance Tips",
    tags: ["digital inspection", "maintenance", "transparency"],
    featured: false
  },
  {
    id: "9",
    title: "Top 5 Tire Brands for New Mexico Roads",
    slug: "best-tires-nm",
    excerpt: "Our local expertise helps you choose the best tire brands for New Mexico's unique road conditions, climate, and terrain.",
    author: "Delta Tire Team",
    publishedDate: "2024-11-28",
    category: "Tire Guide",
    tags: ["tire brands", "new mexico", "buying guide"],
    featured: false
  },
  {
    id: "10",
    title: "Fleet Maintenance: Reducing Downtime with Preventive Care",
    slug: "fleet-maintenance-tips",
    excerpt: "Business owners: Learn how preventive maintenance saves money by reducing unexpected breakdowns and keeping your fleet on the road.",
    author: "Delta Tire Team",
    publishedDate: "2024-11-20",
    category: "Fleet Services",
    tags: ["fleet", "business", "preventive maintenance"],
    featured: false
  },
  {
    id: "11",
    title: "TPMS: Why Your Tire Pressure Light Matters",
    slug: "tpms-guide",
    excerpt: "Your Tire Pressure Monitoring System does more than annoy you with warning lights. Learn why TPMS is critical for safety and fuel efficiency.",
    author: "Delta Tire Team",
    publishedDate: "2024-11-15",
    category: "Safety",
    tags: ["TPMS", "tire pressure", "safety"],
    featured: false
  },
  {
    id: "12",
    title: "Choosing the Right Oil: Conventional vs. Synthetic",
    slug: "conventional-vs-synthetic-oil",
    excerpt: "Not all motor oil is created equal. We explain the differences between conventional, synthetic blend, and full synthetic oil to help you choose.",
    author: "Delta Tire Team",
    publishedDate: "2024-11-10",
    category: "Maintenance Tips",
    tags: ["oil", "synthetic oil", "maintenance"],
    featured: false
  }
];

// Featured articles for homepage or featured section
export const featuredArticles = blogArticles.filter(article => article.featured);

// Get articles by category
export function getArticlesByCategory(category: string): BlogArticle[] {
  return blogArticles.filter(article => article.category === category);
}

// Get article by slug
export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find(article => article.slug === slug);
}

// Get categories
export const categories = Array.from(new Set(blogArticles.map(article => article.category)));
