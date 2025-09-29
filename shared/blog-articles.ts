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
  },
  {
    id: "13",
    title: "Why Tire Rotation Matters: Extend Your Tire Life by 20,000 Miles",
    slug: "tire-rotation-guide",
    excerpt: "Regular tire rotation can dramatically extend your tire life and save you hundreds of dollars. Learn why it matters, how often to rotate, and what patterns work best.",
    content: `
      <p>Tire rotation is one of the most overlooked yet cost-effective maintenance tasks you can perform on your vehicle. This simple service can extend your tire life by up to 20,000 miles and improve your vehicle's handling and safety.</p>
      
      <h2>Why Tires Wear Unevenly</h2>
      <p>Your vehicle's tires don't wear at the same rate. Several factors cause uneven wear:</p>
      <ul>
        <li><strong>Weight distribution:</strong> Front-wheel drive vehicles place more weight and stress on front tires</li>
        <li><strong>Steering stress:</strong> Front tires wear faster on the outer edges due to turning</li>
        <li><strong>Braking force:</strong> Front tires typically handle 60-70% of braking force</li>
        <li><strong>Drivetrain type:</strong> AWD, FWD, and RWD vehicles wear tires differently</li>
      </ul>
      
      <h2>Benefits of Regular Tire Rotation</h2>
      
      <h3>1. Extended Tire Life</h3>
      <p>By rotating your tires regularly, you distribute wear evenly across all four tires. This can extend your tire life by 15,000 to 20,000 miles, saving you hundreds of dollars on premature tire replacement.</p>
      
      <h3>2. Improved Performance</h3>
      <p>Even tire wear ensures consistent handling, traction, and braking performance. Unevenly worn tires can cause your vehicle to pull to one side and reduce overall safety.</p>
      
      <h3>3. Better Fuel Economy</h3>
      <p>Evenly worn tires have less rolling resistance, which can improve your fuel economy by 1-2 MPG.</p>
      
      <h3>4. Smoother, Quieter Ride</h3>
      <p>Uneven tire wear creates vibrations and road noise. Regular rotation maintains a smooth, quiet ride.</p>
      
      <h3>5. Warranty Protection</h3>
      <p>Many tire manufacturers require regular rotation to maintain your tire warranty. Skipping rotations could void your coverage.</p>
      
      <h2>How Often Should You Rotate Tires?</h2>
      <p>Most manufacturers recommend rotating tires every 5,000 to 7,500 miles, or with every other oil change. However, always check your owner's manual for specific recommendations for your vehicle.</p>
      
      <p><strong>Key milestones:</strong></p>
      <ul>
        <li>Front-wheel drive: Every 5,000 miles</li>
        <li>Rear-wheel drive: Every 5,000-7,500 miles</li>
        <li>All-wheel drive: Every 3,000-5,000 miles (AWD vehicles wear tires faster)</li>
      </ul>
      
      <h2>Tire Rotation Patterns</h2>
      <p>The correct rotation pattern depends on your vehicle's drivetrain and whether you have directional tires.</p>
      
      <h3>Front-Wheel Drive (Forward Cross)</h3>
      <p>Front tires move straight back to the rear. Rear tires cross to the opposite front positions.</p>
      
      <h3>Rear-Wheel or AWD (Rearward Cross)</h3>
      <p>Rear tires move straight forward. Front tires cross to the opposite rear positions.</p>
      
      <h3>Directional Tires</h3>
      <p>Front-to-back on the same side only. These tires have a specific rotation direction.</p>
      
      <h3>Different Size Tires (Staggered)</h3>
      <p>Side-to-side rotation only. Cannot be rotated front to back.</p>
      
      <h2>Signs You've Waited Too Long</h2>
      <p>If you notice these symptoms, you may have waited too long between rotations:</p>
      <ul>
        <li>Visible uneven tread wear</li>
        <li>Vehicle pulling to one side</li>
        <li>Vibration at highway speeds</li>
        <li>Increased road noise</li>
        <li>One or two tires significantly more worn than others</li>
      </ul>
      
      <h2>Free Tire Rotation at Delta Tire</h2>
      <p>When you purchase tires from Delta Tire, we include free lifetime tire rotation as part of our commitment to your safety and satisfaction. Even if you didn't buy your tires from us, we offer competitive rotation pricing at all four locations.</p>
      
      <p>Our expert technicians will inspect your tires, check the pressure, and use the correct rotation pattern for your vehicle. We'll also check your alignment to ensure your tires wear evenly between rotations.</p>
      
      <p>Visit Delta Tire in Grants, Gallup, Farmington, or Eagar for professional tire rotation service. No appointment necessary—we'll have you back on the road in about 30 minutes!</p>
    `,
    author: "Delta Tire Team",
    publishedDate: "2025-09-25",
    category: "Tire Maintenance",
    tags: ["tire rotation", "tire maintenance", "save money", "tire life"],
    featured: false
  },
  {
    id: "14",
    title: "Summer Road Trip Checklist: 12 Things to Check Before You Go",
    slug: "summer-road-trip-checklist",
    excerpt: "Don't let a breakdown ruin your summer vacation. Follow our comprehensive 12-point vehicle checklist to ensure a safe, worry-free road trip.",
    content: `
      <p>Summer is the perfect time for road trips across the Southwest. Whether you're heading to the Grand Canyon, exploring Utah's national parks, or visiting family, the last thing you want is a vehicle breakdown hundreds of miles from home. Follow this comprehensive checklist to prepare your vehicle for a safe, enjoyable journey.</p>
      
      <h2>1. Tires: Your Most Important Safety Component</h2>
      
      <h3>Check Tread Depth</h3>
      <p>Use the penny test on all four tires. Insert a penny into the tread with Lincoln's head upside down. If you can see the top of his head, your tread is below 2/32" and needs replacement before your trip.</p>
      
      <h3>Inspect for Damage</h3>
      <p>Look for cracks, bulges, or punctures in the sidewalls. Even small damage can lead to blowouts at highway speeds in summer heat.</p>
      
      <h3>Check Tire Pressure</h3>
      <p>Properly inflated tires improve fuel economy, handling, and reduce blowout risk. Check pressure when tires are cold (before driving). Increase pressure by 3-5 PSI if you're loading the vehicle heavily or towing a trailer.</p>
      
      <h3>Don't Forget the Spare</h3>
      <p>Check your spare tire's pressure and condition. A flat spare is useless when you need it most.</p>
      
      <h2>2. Fluids: Check and Top Off Everything</h2>
      
      <h3>Engine Oil</h3>
      <p>If you're within 1,000 miles of your next oil change, get it done before the trip. Long highway drives in summer heat are hard on engine oil.</p>
      
      <h3>Coolant</h3>
      <p>Your cooling system works overtime in summer. Check coolant level and look for leaks. Low coolant can lead to overheating in hot weather.</p>
      
      <h3>Brake Fluid</h3>
      <p>Check the brake fluid reservoir. Low fluid could indicate worn brake pads or a leak.</p>
      
      <h3>Power Steering Fluid</h3>
      <p>Top off if needed. Low power steering fluid makes steering difficult and can damage the pump.</p>
      
      <h3>Windshield Washer Fluid</h3>
      <p>Fill it up. Summer bugs on your windshield require lots of washer fluid, especially in desert regions.</p>
      
      <h2>3. Brakes: Essential for Mountain Driving</h2>
      <p>Have your brakes inspected before any long trip, especially if you'll be driving through mountains. Listen for squealing, grinding, or pulsation. If your brake pedal feels soft or sinks to the floor, get it checked immediately.</p>
      
      <h2>4. Battery: Heat is the Enemy</h2>
      <p>Summer heat kills car batteries faster than winter cold. Have your battery tested before the trip. Most auto parts stores and service centers offer free battery testing. If your battery is more than three years old, consider replacing it before you go.</p>
      
      <h2>5. Air Conditioning: Don't Suffer in the Heat</h2>
      <p>Test your A/C before the trip. If it's blowing warm air or not cooling efficiently, have it serviced. Driving through New Mexico and Arizona in summer without working A/C is dangerous, not just uncomfortable.</p>
      
      <h2>6. Lights: See and Be Seen</h2>
      <p>Check all exterior lights: headlights (both low and high beam), brake lights, turn signals, and emergency flashers. Replace any burnt-out bulbs. Clean foggy or yellowed headlight lenses for better nighttime visibility.</p>
      
      <h2>7. Wiper Blades: Don't Wait for Monsoon Season</h2>
      <p>If your wipers streak, chatter, or leave gaps, replace them before your trip. Summer monsoons in the Southwest can hit suddenly with intense rain.</p>
      
      <h2>8. Belts and Hoses: Prevent Roadside Breakdowns</h2>
      <p>Visually inspect belts for cracks, glazing, or fraying. Check hoses for soft spots, cracks, or bulges. These components fail in hot weather and can leave you stranded.</p>
      
      <h2>9. Emergency Kit: Be Prepared</h2>
      <p>Pack an emergency kit including:</p>
      <ul>
        <li>Jumper cables or portable jump starter</li>
        <li>Flashlight with extra batteries</li>
        <li>Basic tool kit</li>
        <li>Tire pressure gauge</li>
        <li>First aid kit</li>
        <li>Extra water (for both people and the radiator)</li>
        <li>Emergency blanket</li>
        <li>Non-perishable snacks</li>
        <li>Phone charger</li>
        <li>Reflective triangles or flares</li>
      </ul>
      
      <h2>10. Alignment: Prevent Tire Wear and Improve Handling</h2>
      <p>If your vehicle pulls to one side or the steering wheel sits off-center, get an alignment before your trip. Poor alignment causes rapid tire wear and makes highway driving tiresome.</p>
      
      <h2>11. Fuel System: Fill Up Strategically</h2>
      <p>Never let your tank drop below 1/4 full, especially in remote areas of the Southwest. Gas stations can be 50+ miles apart in some regions. Running low on fuel in summer heat is dangerous.</p>
      
      <h2>12. Air Filter: Better Performance, Better Economy</h2>
      <p>A clean engine air filter improves fuel economy and engine performance. If yours looks dirty or you're due for replacement, change it before the trip.</p>
      
      <h2>Pre-Trip Inspection at Delta Tire</h2>
      <p>Don't want to worry about checking everything yourself? Bring your vehicle to any Delta Tire location for a comprehensive pre-trip inspection. Our expert technicians will check all critical systems and give you peace of mind before you hit the road.</p>
      
      <p>We offer same-day service at all four locations in Grants, Gallup, Farmington, and Eagar. Schedule your pre-trip inspection today and enjoy a worry-free summer vacation!</p>
    `,
    author: "Delta Tire Team",
    publishedDate: "2025-09-27",
    category: "Maintenance Tips",
    tags: ["road trip", "summer", "maintenance", "vehicle inspection", "travel"],
    featured: false
  },
  {
    id: "15",
    title: "5 Signs Your Vehicle's Suspension Needs Repair",
    slug: "suspension-warning-signs",
    excerpt: "A worn suspension affects handling, safety, and tire wear. Learn the five warning signs that indicate your suspension needs professional attention.",
    content: `
      <p>Your vehicle's suspension system is critical for safety, comfort, and tire longevity. Yet many drivers ignore suspension problems until they become serious safety hazards. Here are five warning signs that your suspension needs professional attention.</p>
      
      <h2>What Does Your Suspension Do?</h2>
      <p>Your suspension system serves three main purposes:</p>
      <ul>
        <li><strong>Safety:</strong> Keeps your tires in contact with the road for maximum traction</li>
        <li><strong>Control:</strong> Maintains vehicle stability during cornering, braking, and acceleration</li>
        <li><strong>Comfort:</strong> Absorbs road bumps and vibrations for a smooth ride</li>
      </ul>
      
      <p>When suspension components wear out, all three functions are compromised, putting you and your passengers at risk.</p>
      
      <h2>1. Your Vehicle Fails the Bounce Test</h2>
      <p>This simple test checks your shock absorbers or struts:</p>
      <ol>
        <li>Park on level ground</li>
        <li>Put all your weight on the front or rear corner of your vehicle and bounce it a few times</li>
        <li>Let go and count how many times the vehicle bounces</li>
      </ol>
      <p>If your vehicle bounces more than 2-3 times after you let go, your shocks or struts are worn and need replacement. Worn shocks increase your stopping distance by up to 20 feet at highway speeds.</p>
      
      <h2>2. Uneven or Rapid Tire Wear</h2>
      <p>Suspension problems often show up as unusual tire wear patterns:</p>
      
      <h3>Cupping or Scalloping</h3>
      <p>Diagonal dips or cups in the tread indicate worn shocks or struts that allow the tire to bounce excessively.</p>
      
      <h3>Inner or Outer Edge Wear</h3>
      <p>Excessive wear on one edge suggests worn ball joints, control arm bushings, or alignment issues caused by suspension wear.</p>
      
      <h3>Center Wear</h3>
      <p>While usually caused by over-inflation, center wear combined with a rough ride can indicate suspension problems.</p>
      
      <p>Regular tire inspections can catch suspension issues early, before they damage your tires or compromise safety.</p>
      
      <h2>3. Vehicle Nose Dives, Sways, or Rolls</h2>
      <p>Pay attention to how your vehicle behaves during different driving maneuvers:</p>
      
      <h3>Nose Diving When Braking</h3>
      <p>If the front end drops significantly when you brake, your front shocks or struts are worn. This increases your stopping distance and can cause loss of control.</p>
      
      <h3>Body Roll in Turns</h3>
      <p>Excessive leaning or rolling when cornering indicates worn stabilizer bar links or bushings. Severe body roll can lead to rollovers in emergency situations.</p>
      
      <h3>Rear Squatting During Acceleration</h3>
      <p>If the rear end drops when you accelerate, your rear shocks are worn. This is especially noticeable in trucks and SUVs.</p>
      
      <h3>Swaying or Floating on the Highway</h3>
      <p>Worn shocks make your vehicle feel loose or floaty, especially at highway speeds or in crosswinds. This makes the vehicle difficult to control.</p>
      
      <h2>4. Oil or Fluid Leaking from Shocks</h2>
      <p>Shock absorbers and struts contain hydraulic fluid. Look at each shock/strut for:</p>
      <ul>
        <li>Wet, oily appearance</li>
        <li>Fluid dripping down the shock body</li>
        <li>Dirt and grime stuck to oily residue</li>
      </ul>
      <p>A small amount of light dampness is normal, but visible oil means the seal has failed and the shock must be replaced. Remember: shocks and struts should always be replaced in pairs (both fronts or both rears) to maintain balanced handling.</p>
      
      <h2>5. Steering Feels Difficult or Vehicle Pulls</h2>
      <p>Suspension problems often affect steering:</p>
      
      <h3>Difficult Steering</h3>
      <p>If your steering feels heavy or requires more effort than normal, check for:</p>
      <ul>
        <li>Worn ball joints</li>
        <li>Damaged tie rod ends</li>
        <li>Worn control arm bushings</li>
      </ul>
      
      <h3>Vehicle Pulls to One Side</h3>
      <p>While often caused by alignment or tire issues, pulling can also indicate:</p>
      <ul>
        <li>Worn control arm bushings</li>
        <li>Damaged or shifted suspension components</li>
        <li>Failed shock absorber on one side</li>
      </ul>
      
      <h3>Steering Wheel Vibration</h3>
      <p>Vibration through the steering wheel, especially at certain speeds, can indicate:</p>
      <ul>
        <li>Worn tie rod ends</li>
        <li>Loose or worn wheel bearings</li>
        <li>Damaged suspension components</li>
      </ul>
      
      <h2>Additional Warning Signs</h2>
      <p>Watch for these other symptoms of suspension problems:</p>
      <ul>
        <li><strong>Clunking or rattling noises:</strong> Especially over bumps or during turns</li>
        <li><strong>Uneven ride height:</strong> One corner sits lower than the others</li>
        <li><strong>Vehicle sits lower:</strong> Sagging springs reduce ground clearance</li>
        <li><strong>Bottoming out:</strong> Scraping over speed bumps or dips indicates collapsed shocks or springs</li>
      </ul>
      
      <h2>Why Suspension Repairs Can't Wait</h2>
      <p>Ignoring suspension problems leads to:</p>
      <ul>
        <li><strong>Safety hazards:</strong> Increased stopping distance, poor handling, and loss of control</li>
        <li><strong>Premature tire wear:</strong> New tires can be ruined in 10,000 miles with bad suspension</li>
        <li><strong>More expensive repairs:</strong> Worn suspension damages other components</li>
        <li><strong>Failed inspections:</strong> Many states fail vehicles with obvious suspension issues</li>
      </ul>
      
      <h2>Suspension Expertise at Delta Tire</h2>
      <p>At Delta Tire, our expert technicians have decades of combined experience diagnosing and repairing suspension issues on all makes and models. We use high-quality parts and provide a warranty on all suspension work.</p>
      
      <p>If you notice any of these warning signs, don't wait. Visit Delta Tire in Grants, Gallup, Farmington, or Eagar for a comprehensive suspension inspection. We'll identify the problem, explain your options, and get you back on the road safely.</p>
      
      <p>Schedule your suspension inspection today. Your safety—and your wallet—will thank you.</p>
    `,
    author: "Delta Tire Team",
    publishedDate: "2025-09-28",
    category: "Safety",
    tags: ["suspension", "safety", "shocks", "struts", "handling"],
    featured: false
  },
  {
    id: "16",
    title: "Northern New Mexico Winter Driving: Mastering Mud, Snow, and Ice",
    slug: "northern-nm-winter-driving",
    excerpt: "Northern New Mexico winter conditions demand proper tires and smart driving. Learn how to handle mud, snow, ice, and wet roads safely while getting maximum performance from your tires.",
    content: `
      <p>Winter in Northern New Mexico presents unique challenges that test both your vehicle and driving skills. From sudden snowstorms in Farmington to muddy back roads in Grants, and icy morning commutes in Gallup, understanding how to handle these conditions—and choosing the right tires—can mean the difference between arriving safely and calling a tow truck.</p>
      
      <h2>Understanding Northern NM Winter Conditions</h2>
      <p>The Four Corners region experiences diverse winter weather:</p>
      <ul>
        <li><strong>Elevation changes:</strong> Temperature and conditions vary dramatically from lower valleys to mountain passes</li>
        <li><strong>Unpredictable weather:</strong> Sunny mornings can turn into snowstorms by afternoon</li>
        <li><strong>Freeze-thaw cycles:</strong> Daytime melting creates muddy conditions that freeze overnight into treacherous ice</li>
        <li><strong>Remote roads:</strong> Many areas have limited road maintenance and cell service</li>
        <li><strong>Desert meets mountain:</strong> Dry desert roads can quickly become snow-covered at higher elevations</li>
      </ul>
      
      <h2>Choosing the Right Tires for Northern NM Winters</h2>
      
      <h3>All-Season Tires: The Compromise</h3>
      <p><strong>Best for:</strong> Mild winter conditions in lower elevations (Grants, Gallup)</p>
      <p>All-season tires work adequately in light snow and wet conditions but have limitations:</p>
      <ul>
        <li>✓ Good wet road traction</li>
        <li>✓ Acceptable in light snow (1-3 inches)</li>
        <li>✓ No need to swap seasonally</li>
        <li>✗ Poor performance in heavy snow or ice</li>
        <li>✗ Rubber hardens below 40°F, reducing grip</li>
      </ul>
      
      <h3>Winter/Snow Tires: Maximum Traction</h3>
      <p><strong>Best for:</strong> Frequent snow, mountain driving, or severe winter conditions</p>
      <p>Winter tires are engineered specifically for cold weather performance:</p>
      <ul>
        <li>✓ Special rubber compound stays flexible below 40°F</li>
        <li>✓ Deep tread with thousands of tiny slits (sipes) for ice grip</li>
        <li>✓ 25-50% better snow traction than all-seasons</li>
        <li>✓ Significantly shorter stopping distances on ice</li>
        <li>✓ Excellent wet road performance</li>
        <li>✗ Must be changed out in spring (wear quickly in heat)</li>
        <li>✗ Higher upfront cost (but save money long-term)</li>
      </ul>
      
      <h3>All-Terrain and Mud-Terrain Tires</h3>
      <p><strong>Best for:</strong> Trucks/SUVs that need off-road capability plus winter traction</p>
      <ul>
        <li>✓ Excellent for muddy dirt roads common in Northern NM</li>
        <li>✓ Good snow traction with deep, aggressive tread</li>
        <li>✓ Self-cleaning tread clears mud effectively</li>
        <li>✓ Many carry the Three-Peak Mountain Snowflake rating</li>
        <li>✗ Noisier on pavement than winter tires</li>
        <li>✗ Less effective on ice than dedicated winter tires</li>
      </ul>
      
      <h2>The Three-Peak Mountain Snowflake Symbol</h2>
      <p>Look for this symbol on tire sidewalls. It indicates the tire meets strict snow traction performance requirements. For Northern NM winters, we strongly recommend tires with this rating, whether you choose winter tires or all-terrain tires.</p>
      
      <h2>Driving on Snow: Make Your Tires Work</h2>
      
      <h3>Before You Drive</h3>
      <ul>
        <li><strong>Check tire pressure:</strong> Cold weather reduces pressure by 1 PSI for every 10°F drop. Underinflated tires have poor traction</li>
        <li><strong>Inspect tread depth:</strong> You need at least 6/32" for snow (more is better). The penny test isn't enough for winter</li>
        <li><strong>Clear snow completely:</strong> Remove all snow from tires, wheel wells, and vehicle body</li>
        <li><strong>Start smoothly:</strong> Rapid acceleration just spins tires uselessly</li>
      </ul>
      
      <h3>Driving Techniques for Snow</h3>
      <ul>
        <li><strong>Accelerate gently:</strong> Easy throttle inputs allow tires to grip instead of spin</li>
        <li><strong>Increase following distance:</strong> Triple your normal distance—stopping takes much longer</li>
        <li><strong>Brake early and softly:</strong> Hard braking locks wheels and eliminates steering control</li>
        <li><strong>Avoid cruise control:</strong> You need instant throttle control in changing conditions</li>
        <li><strong>Look ahead:</strong> Anticipate stops and turns well in advance</li>
        <li><strong>If stuck:</strong> Rock gently back and forth, don't floor it—spinning tires dig deeper</li>
      </ul>
      
      <h3>Understanding Snow Types</h3>
      <p><strong>Fresh, powdery snow:</strong> Easiest to drive in, tires can bite through to pavement</p>
      <p><strong>Packed snow:</strong> Slippery but predictable, maintain steady speed and smooth inputs</p>
      <p><strong>Slush:</strong> Reduces traction and can cause hydroplaning, slow down significantly</p>
      
      <h2>Ice: The Most Dangerous Condition</h2>
      
      <h3>Types of Ice in Northern NM</h3>
      <p><strong>Black ice:</strong> Nearly invisible, forms on bridges and shaded areas after sunset. Extremely dangerous.</p>
      <p><strong>Morning ice:</strong> Overnight freezing creates patches in low spots and shadows</p>
      <p><strong>Refrozen slush:</strong> Rough surface provides slightly better grip than smooth ice</p>
      
      <h3>Driving on Ice</h3>
      <ul>
        <li><strong>Slow down significantly:</strong> Even winter tires can't overcome physics on ice</li>
        <li><strong>Test your traction:</strong> In safe, open areas, test braking to understand available grip</li>
        <li><strong>Avoid sudden movements:</strong> Smooth steering, braking, and acceleration are critical</li>
        <li><strong>Stay off the brakes:</strong> If you start sliding, ease off brakes and steer where you want to go</li>
        <li><strong>Watch for shiny pavement:</strong> If the road looks wet and shiny but other cars aren't leaving tracks, it's ice</li>
      </ul>
      
      <h2>Muddy Roads: Common in Four Corners Region</h2>
      
      <h3>Why Mud is Challenging</h3>
      <p>Northern NM's clay-rich soil turns into slippery, sticky mud that even 4WD trucks struggle with. Add in dirt roads used for ranching, hunting, and recreation, and mud becomes a regular winter hazard.</p>
      
      <h3>Best Tires for Mud</h3>
      <ul>
        <li><strong>Aggressive all-terrain tires:</strong> Wide spaces between tread blocks allow mud to clear</li>
        <li><strong>Mud-terrain tires:</strong> Ultimate mud performance with self-cleaning tread</li>
        <li><strong>Avoid:</strong> Street tires and highway tires—they pack with mud and lose all traction</li>
      </ul>
      
      <h3>Driving Techniques for Mud</h3>
      <ul>
        <li><strong>Maintain momentum:</strong> Keep moving at steady speed, stopping often means getting stuck</li>
        <li><strong>Use 4WD LOW if equipped:</strong> Provides maximum torque and control</li>
        <li><strong>Stay in existing tracks:</strong> Follow previous vehicle tracks when possible</li>
        <li><strong>Avoid spinning tires:</strong> Tire spin digs you deeper—gentle, steady throttle works best</li>
        <li><strong>Air down slightly:</strong> Reducing tire pressure 5-10 PSI increases traction (re-inflate when back on pavement)</li>
        <li><strong>If stuck:</strong> Use floor mats, branches, or rocks under tires for traction</li>
      </ul>
      
      <h2>Wet Roads: Don't Underestimate Them</h2>
      
      <h3>Hydroplaning Risk</h3>
      <p>Wet roads, especially after a dry spell, are surprisingly dangerous in Northern NM:</p>
      <ul>
        <li>Oil residue rises to surface with first rain, creating slick conditions</li>
        <li>Worn tires can hydroplane at speeds as low as 35 MPH</li>
        <li>Standing water in low spots and parking lots is common</li>
      </ul>
      
      <h3>Tire Maintenance for Wet Performance</h3>
      <ul>
        <li><strong>Tread depth matters:</strong> Worn tires can't channel water away, causing hydroplaning</li>
        <li><strong>Proper inflation:</strong> Underinflated tires have less contact with road in center</li>
        <li><strong>Alignment:</strong> Poor alignment causes uneven wear that reduces wet traction</li>
        <li><strong>Tire age:</strong> Old tires lose grip even with good tread depth</li>
      </ul>
      
      <h3>Driving in Rain</h3>
      <ul>
        <li><strong>Slow down:</strong> Reduce speed by 5-10 MPH in light rain, more in heavy downpours</li>
        <li><strong>Avoid standing water:</strong> Even shallow water can cause hydroplaning</li>
        <li><strong>Turn off cruise control:</strong> You need immediate throttle response</li>
        <li><strong>Increase following distance:</strong> Wet stopping distance is 2-3 times longer</li>
        <li><strong>If hydroplaning:</strong> Ease off gas, don't brake, steer straight until tires regain grip</li>
      </ul>
      
      <h2>Vehicle Preparation for Northern NM Winters</h2>
      
      <h3>Essential Equipment</h3>
      <ul>
        <li>Ice scraper and snow brush</li>
        <li>Small shovel</li>
        <li>Bag of sand or cat litter for traction</li>
        <li>Emergency blankets and warm clothes</li>
        <li>Flashlight with extra batteries</li>
        <li>Jumper cables or jump starter</li>
        <li>First aid kit</li>
        <li>Non-perishable snacks and water</li>
        <li>Phone charger</li>
        <li>Tire chains (if traveling mountain passes)</li>
      </ul>
      
      <h3>Vehicle Maintenance</h3>
      <ul>
        <li><strong>Battery test:</strong> Cold weather reduces battery capacity by 50%</li>
        <li><strong>Antifreeze:</strong> Check concentration, should protect to -30°F minimum</li>
        <li><strong>Wiper blades:</strong> Replace with winter blades for better snow clearing</li>
        <li><strong>Lights:</strong> Ensure all lights work—visibility is critical in winter</li>
        <li><strong>Heating system:</strong> Confirm heat and defrost work properly</li>
      </ul>
      
      <h2>When to Stay Home</h2>
      <p>Sometimes the smartest decision is not to drive. Consider staying off the roads when:</p>
      <ul>
        <li>Active snowstorm with visibility under 1/4 mile</li>
        <li>Black ice warnings issued</li>
        <li>Your vehicle lacks proper tires for conditions</li>
        <li>Roads haven't been plowed or treated</li>
        <li>You feel uncomfortable or unprepared</li>
      </ul>
      
      <h2>Get Winter-Ready at Delta Tire</h2>
      <p>Don't wait for the first snowfall to prepare your vehicle. Delta Tire offers comprehensive winter services at all four Northern New Mexico locations:</p>
      
      <ul>
        <li><strong>Winter tire sales and installation:</strong> We stock top brands with Three-Peak ratings</li>
        <li><strong>Aggressive all-terrain tires:</strong> Perfect for trucks that need mud and snow capability</li>
        <li><strong>Free tire inspection:</strong> Check tread depth and condition</li>
        <li><strong>Battery testing:</strong> Ensure your battery can handle cold starts</li>
        <li><strong>Complete vehicle inspection:</strong> Identify potential problems before winter hits</li>
        <li><strong>Expert advice:</strong> Our team knows Northern NM conditions and can recommend the right tires for your needs</li>
      </ul>
      
      <p>Visit Delta Tire in Grants, Gallup, or Farmington before winter weather arrives. We'll help you choose the right tires for Northern New Mexico's challenging conditions and ensure your vehicle is ready for whatever winter throws at you.</p>
      
      <p>Remember: The best winter driving technique is proper preparation. Good tires aren't expensive—they're an investment in your safety and peace of mind.</p>
    `,
    author: "Delta Tire Team",
    publishedDate: "2025-09-29",
    category: "Safety",
    tags: ["winter driving", "northern new mexico", "snow", "mud", "ice", "tire safety", "four corners"],
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
