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
    content: `
      <p>Your tires are the only contact point between your vehicle and the road. Knowing when to replace them is crucial for your safety and the safety of others on the road. Here are five warning signs that indicate it's time for new tires.</p>
      
      <h2>1. Tread Depth Below 2/32 Inch</h2>
      <p>The most important indicator is tread depth. When your tire tread wears down to 2/32 of an inch, it's legally time to replace them. Use the penny test: insert a penny into the tread with Lincoln's head upside down. If you can see all of Lincoln's head, your tread is too shallow.</p>
      
      <h2>2. Visible Tread Wear Indicators</h2>
      <p>Modern tires have built-in tread wear indicator bars. These bars become flush with the tire's tread when it's time for replacement. If you can see these bars across multiple grooves, schedule a tire replacement immediately.</p>
      
      <h2>3. Cracks, Bulges, or Blisters</h2>
      <p>Inspect your tire sidewalls regularly. Cracks, bulges, or blisters indicate internal damage or weakness. These defects can lead to sudden tire failure and should be addressed immediately by a professional.</p>
      
      <h2>4. Age of the Tire</h2>
      <p>Even if your tires look fine, rubber degrades over time. Most manufacturers recommend replacing tires every 6 years, regardless of tread depth. The maximum safe age is typically 10 years. Check the DOT code on your tire sidewall to determine its age.</p>
      
      <h2>5. Vibration or Unusual Handling</h2>
      <p>Excessive vibration while driving can indicate internal tire damage, improper balance, or alignment issues. If your vehicle pulls to one side or you feel unusual vibrations, have your tires inspected immediately.</p>
      
      <h2>Don't Wait Until It's Too Late</h2>
      <p>Driving on worn tires increases your stopping distance, reduces traction in wet conditions, and significantly raises your risk of a blowout. At Delta Tire, we provide free tire inspections at all four of our locations across New Mexico and Arizona.</p>
      
      <p>Visit us in Grants, Gallup, Farmington, or Eagar for a professional tire assessment. Our expert technicians will help you determine if it's time for new tires and recommend the best options for your vehicle and driving conditions.</p>
    `,
    author: "Delta Tire Team",
    publishedDate: "2025-09-20",
    category: "Tire Maintenance",
    tags: ["tire safety", "maintenance", "tire replacement"],
    featured: true
  },
  {
    id: "2",
    title: "Oil Change Myths: How Often Do You Really Need Service?",
    slug: "oil-change-myths",
    excerpt: "The 3,000-mile oil change rule is outdated. Modern vehicles and synthetic oils have changed the game. Find out how often YOUR car needs an oil change.",
    content: `
      <p>For decades, the automotive industry preached the 3,000-mile oil change rule. But in today's world of advanced engines and synthetic oils, this guidance is not only outdated—it's costing you money and wasting resources.</p>
      
      <h2>The Old 3,000-Mile Rule is Dead</h2>
      <p>The 3,000-mile oil change interval made sense in the 1970s when engines were less efficient and motor oil technology was primitive. Today's engines and oils have evolved dramatically. Most modern vehicles can safely go 5,000 to 10,000 miles between oil changes.</p>
      
      <h2>Check Your Owner's Manual</h2>
      <p>The best source for oil change intervals is your vehicle's owner's manual. Manufacturers spend millions testing their engines and know exactly what they need. Most modern vehicles recommend oil changes every 7,500 to 10,000 miles for normal driving conditions.</p>
      
      <h2>Synthetic vs. Conventional Oil</h2>
      <p><strong>Conventional Oil:</strong> Typically needs changing every 3,000-5,000 miles. Best for older vehicles or budget-conscious drivers with low mileage.</p>
      <p><strong>Synthetic Blend:</strong> Good middle ground, lasting 5,000-7,500 miles. Offers better protection than conventional at a moderate price point.</p>
      <p><strong>Full Synthetic:</strong> Premium protection lasting 7,500-15,000 miles. Best for modern engines, extreme temperatures, and high-performance vehicles.</p>
      
      <h2>Severe Driving Conditions</h2>
      <p>You may need more frequent oil changes if you regularly:</p>
      <ul>
        <li>Make frequent short trips (under 5 miles)</li>
        <li>Drive in extreme temperatures</li>
        <li>Tow heavy loads or haul cargo</li>
        <li>Drive in dusty or off-road conditions</li>
        <li>Spend lots of time in stop-and-go traffic</li>
      </ul>
      
      <h2>Signs You Need an Oil Change Now</h2>
      <p>Regardless of mileage, get your oil changed if you notice:</p>
      <ul>
        <li>Oil appears dark and dirty</li>
        <li>Engine running louder than normal</li>
        <li>Oil change light is on</li>
        <li>Unusual engine smells</li>
        <li>Exhaust smoke</li>
      </ul>
      
      <h2>Trust the Experts at Delta Tire</h2>
      <p>At Delta Tire, we use high-quality oils and filters for every oil change. Our digital vehicle inspection includes checking your oil life and making recommendations based on YOUR specific driving conditions—not outdated rules.</p>
      
      <p>Visit any of our four locations in Grants, Gallup, Farmington, or Eagar for honest, expert oil change service. We'll help you determine the right interval for your vehicle.</p>
    `,
    author: "Delta Tire Team",
    publishedDate: "2025-09-15",
    category: "Maintenance Tips",
    tags: ["oil change", "maintenance", "synthetic oil"],
    featured: true
  },
  {
    id: "3",
    title: "All-Terrain vs. Mud-Terrain Tires: Which is Right for Your Truck?",
    slug: "at-vs-mt-tires",
    excerpt: "Choosing between all-terrain and mud-terrain tires? We break down the differences, pros, cons, and help you decide which tire type matches your driving needs.",
    content: `
      <p>Shopping for truck tires? The choice between all-terrain (AT) and mud-terrain (MT) tires is one of the most common dilemmas truck owners face. Both have their strengths, and the right choice depends on how and where you drive.</p>
      
      <h2>All-Terrain Tires: The Versatile Performer</h2>
      <p>All-terrain tires are designed to perform well both on and off the pavement. They're the jack-of-all-trades in the truck tire world.</p>
      
      <h3>Pros of All-Terrain Tires:</h3>
      <ul>
        <li><strong>Comfortable on-road driving:</strong> Less road noise and smoother ride compared to mud-terrains</li>
        <li><strong>Better fuel economy:</strong> Less aggressive tread means less rolling resistance</li>
        <li><strong>Longer tread life:</strong> Typically last 50,000-70,000 miles with proper care</li>
        <li><strong>Good in all weather:</strong> Excellent rain and snow performance</li>
        <li><strong>Versatile:</strong> Handle light to moderate off-road conditions well</li>
      </ul>
      
      <h3>Cons of All-Terrain Tires:</h3>
      <ul>
        <li>Limited performance in deep mud or extreme off-road conditions</li>
        <li>Not as aggressive-looking as mud-terrains</li>
        <li>May struggle with rock crawling on difficult terrain</li>
      </ul>
      
      <h2>Mud-Terrain Tires: The Off-Road Beast</h2>
      <p>Mud-terrain tires are built for serious off-road enthusiasts who regularly tackle challenging terrain.</p>
      
      <h3>Pros of Mud-Terrain Tires:</h3>
      <ul>
        <li><strong>Superior off-road traction:</strong> Excel in mud, rocks, sand, and loose terrain</li>
        <li><strong>Aggressive appearance:</strong> Give your truck a bold, rugged look</li>
        <li><strong>Self-cleaning tread:</strong> Large voids clear mud and debris effectively</li>
        <li><strong>Tough construction:</strong> Reinforced sidewalls for puncture resistance</li>
        <li><strong>Rock crawling capability:</strong> Excellent grip on difficult terrain</li>
      </ul>
      
      <h3>Cons of Mud-Terrain Tires:</h3>
      <ul>
        <li>Significantly louder on pavement</li>
        <li>Reduced fuel economy (3-5 MPG decrease is common)</li>
        <li>Shorter tread life (typically 40,000-50,000 miles)</li>
        <li>Harsher ride quality on paved roads</li>
        <li>Higher initial cost</li>
        <li>Less capable in snow/ice compared to all-terrains</li>
      </ul>
      
      <h2>Which Should You Choose?</h2>
      
      <h3>Choose All-Terrain If You:</h3>
      <ul>
        <li>Drive on pavement 70% or more of the time</li>
        <li>Need a tire that performs in all four seasons</li>
        <li>Want better fuel economy</li>
        <li>Take occasional camping, hunting, or fishing trips on dirt roads</li>
        <li>Value a quieter, more comfortable ride</li>
      </ul>
      
      <h3>Choose Mud-Terrain If You:</h3>
      <ul>
        <li>Regularly go off-roading in challenging conditions</li>
        <li>Need maximum traction in mud, sand, or rocky terrain</li>
        <li>Don't mind sacrificing comfort and fuel economy for capability</li>
        <li>Want an aggressive, rugged appearance</li>
        <li>Participate in rock crawling or extreme off-road activities</li>
      </ul>
      
      <h2>Popular Choices for New Mexico and Arizona</h2>
      <p>In the Four Corners region, we typically recommend:</p>
      <ul>
        <li><strong>For daily drivers:</strong> BFGoodrich All-Terrain T/A KO2, Goodyear Wrangler TrailRunner AT</li>
        <li><strong>For off-road enthusiasts:</strong> BFGoodrich Mud-Terrain T/A KM3, Nitto Trail Grappler</li>
        <li><strong>Best of both worlds:</strong> Falken Wildpeak AT3W, Cooper Discoverer AT3 XLT</li>
      </ul>
      
      <h2>Get Expert Advice at Delta Tire</h2>
      <p>Still not sure which tire is right for your truck? Our team at Delta Tire has decades of combined experience helping truck owners in New Mexico and Arizona choose the perfect tires for their needs and budget.</p>
      
      <p>Visit us in Grants, Gallup, Farmington, or Eagar. We'll discuss your driving habits, show you options in your price range, and help you make an informed decision. Plus, we'll match any competitor's price on comparable tire models!</p>
    `,
    author: "Delta Tire Team",
    publishedDate: "2025-09-10",
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
    publishedDate: "2025-09-05",
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
    publishedDate: "2025-08-28",
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
    publishedDate: "2025-08-22",
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
    publishedDate: "2025-08-15",
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
    publishedDate: "2025-08-08",
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
    publishedDate: "2025-08-01",
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
    publishedDate: "2025-07-25",
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
    publishedDate: "2025-07-18",
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
    publishedDate: "2025-07-10",
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
