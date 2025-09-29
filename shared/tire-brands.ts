export interface TireBrand {
  name: string;
  logo?: string;
  description: string;
  specialties: string[];
  tireTypes: string[];
  priceRange: "Budget" | "Mid-Range" | "Premium" | "Ultra-Premium";
  warranty: string;
  popular: boolean;
}

export const tireBrands: TireBrand[] = [
  {
    name: "Michelin",
    description: "French tire manufacturer known for premium quality, longevity, and innovative tire technology. Industry leader in performance and safety ratings.",
    specialties: ["Long tread life", "Fuel efficiency", "All-season performance", "High-performance sports tires"],
    tireTypes: ["Passenger", "SUV/Truck", "Performance", "All-Season", "Winter"],
    priceRange: "Premium",
    warranty: "60,000-80,000 miles treadwear",
    popular: true
  },
  {
    name: "Bridgestone",
    description: "World's largest tire manufacturer offering reliable performance across all vehicle types. Known for quality construction and extensive testing.",
    specialties: ["Ride comfort", "Wet traction", "Durability", "Commercial applications"],
    tireTypes: ["Passenger", "SUV/Truck", "Commercial", "All-Season", "Run-Flat"],
    priceRange: "Premium",
    warranty: "50,000-80,000 miles treadwear",
    popular: true
  },
  {
    name: "Goodyear",
    description: "American tire icon with over 125 years of innovation. Trusted brand for passenger vehicles, trucks, and commercial applications.",
    specialties: ["All-terrain capability", "Highway performance", "Commercial truck tires", "American manufacturing"],
    tireTypes: ["Passenger", "SUV/Truck", "Commercial", "All-Terrain", "Highway"],
    priceRange: "Mid-Range",
    warranty: "50,000-65,000 miles treadwear",
    popular: true
  },
  {
    name: "Continental",
    description: "German engineering excellence with focus on safety and technology. Premium tires with advanced features and superior handling.",
    specialties: ["Advanced safety features", "Precision handling", "Quiet ride", "European touring performance"],
    tireTypes: ["Passenger", "Performance", "SUV", "All-Season", "Summer"],
    priceRange: "Premium",
    warranty: "50,000-70,000 miles treadwear",
    popular: true
  },
  {
    name: "BFGoodrich",
    description: "Off-road and performance specialist known for rugged all-terrain tires. Popular choice for trucks, SUVs, and enthusiast vehicles.",
    specialties: ["Off-road performance", "All-terrain durability", "Rock crawling", "Mud terrain capability"],
    tireTypes: ["All-Terrain", "Mud-Terrain", "SUV/Truck", "Performance", "Off-Road"],
    priceRange: "Mid-Range",
    warranty: "50,000-60,000 miles treadwear",
    popular: true
  },
  {
    name: "Yokohama",
    description: "Japanese manufacturer known for high-performance tires and innovative designs. Excellent value with strong performance characteristics.",
    specialties: ["Performance value", "All-season versatility", "SUV/crossover applications", "Fuel efficiency"],
    tireTypes: ["Passenger", "Performance", "SUV", "All-Season", "Winter"],
    priceRange: "Mid-Range",
    warranty: "50,000-65,000 miles treadwear",
    popular: true
  },
  {
    name: "Cooper",
    description: "American brand offering quality tires at competitive prices. Known for reliable all-season and light truck applications.",
    specialties: ["Value pricing", "Light truck tires", "All-season reliability", "American manufacturing"],
    tireTypes: ["Passenger", "SUV/Truck", "All-Season", "Highway", "All-Terrain"],
    priceRange: "Budget",
    warranty: "40,000-60,000 miles treadwear",
    popular: false
  },
  {
    name: "Pirelli",
    description: "Italian luxury and performance tire brand. Premium choice for high-performance vehicles and luxury cars with exceptional handling.",
    specialties: ["Ultra-high performance", "Luxury vehicle fitments", "Sports car applications", "Racing heritage"],
    tireTypes: ["Performance", "Ultra-High Performance", "Luxury", "Summer", "Run-Flat"],
    priceRange: "Ultra-Premium",
    warranty: "30,000-50,000 miles treadwear",
    popular: false
  },
  {
    name: "Hankook",
    description: "Korean manufacturer offering excellent value with improving quality. Strong warranty coverage and growing market presence.",
    specialties: ["Value for money", "Strong warranties", "All-season performance", "Passenger car applications"],
    tireTypes: ["Passenger", "SUV", "All-Season", "Performance", "Winter"],
    priceRange: "Budget",
    warranty: "60,000-80,000 miles treadwear",
    popular: false
  },
  {
    name: "Firestone",
    description: "Bridgestone-owned American brand known for reliable, affordable tires. Popular choice for everyday driving and commercial use.",
    specialties: ["Affordability", "Reliable performance", "Commercial applications", "Fleet services"],
    tireTypes: ["Passenger", "SUV/Truck", "Commercial", "All-Season", "Highway"],
    priceRange: "Budget",
    warranty: "50,000-65,000 miles treadwear",
    popular: false
  },
  {
    name: "Toyo",
    description: "Japanese brand known for high-quality off-road and performance tires. Strong reputation among truck and SUV owners.",
    specialties: ["Off-road excellence", "All-terrain toughness", "Low road noise", "Aggressive tread designs"],
    tireTypes: ["All-Terrain", "Mud-Terrain", "SUV/Truck", "Performance", "Highway"],
    priceRange: "Mid-Range",
    warranty: "50,000-65,000 miles treadwear",
    popular: false
  },
  {
    name: "Falken",
    description: "Performance-oriented brand under Sumitomo ownership. Known for motorsports involvement and enthusiast-grade tires at competitive prices.",
    specialties: ["Performance value", "Motorsports heritage", "Aggressive styling", "SUV/truck performance"],
    tireTypes: ["Performance", "All-Season", "SUV/Truck", "Summer", "All-Terrain"],
    priceRange: "Mid-Range",
    warranty: "50,000-65,000 miles treadwear",
    popular: false
  },
  {
    name: "Dunlop",
    description: "Goodyear-owned brand with motorsports heritage. Quality tires with focus on performance and handling characteristics.",
    specialties: ["Sport performance", "Racing pedigree", "Wet weather traction", "Responsive handling"],
    tireTypes: ["Performance", "Passenger", "All-Season", "Summer", "SUV"],
    priceRange: "Mid-Range",
    warranty: "45,000-60,000 miles treadwear",
    popular: false
  },
  {
    name: "General",
    description: "Continental-owned value brand offering quality tires at affordable prices. Good choice for budget-conscious consumers.",
    specialties: ["Budget-friendly", "Reliable performance", "Wide size availability", "Value warranties"],
    tireTypes: ["Passenger", "SUV/Truck", "All-Season", "Highway", "All-Terrain"],
    priceRange: "Budget",
    warranty: "50,000-70,000 miles treadwear",
    popular: false
  },
  {
    name: "Nitto",
    description: "Toyo-owned brand specializing in light truck and performance tires. Popular among truck and SUV enthusiasts for aggressive styling.",
    specialties: ["Truck/SUV applications", "Aggressive aesthetics", "Mud-terrain capability", "Street performance"],
    tireTypes: ["All-Terrain", "Mud-Terrain", "SUV/Truck", "Performance", "Highway"],
    priceRange: "Mid-Range",
    warranty: "50,000-55,000 miles treadwear",
    popular: false
  },
  {
    name: "Dick Cepek",
    description: "Off-road specialist brand known for extreme terrain capability. Trusted by serious off-road enthusiasts and rock crawlers.",
    specialties: ["Extreme off-road", "Rock crawling", "Mud terrain", "Heavy-duty construction"],
    tireTypes: ["Mud-Terrain", "All-Terrain", "Extreme Off-Road", "Light Truck"],
    priceRange: "Mid-Range",
    warranty: "40,000-50,000 miles treadwear",
    popular: false
  },
  {
    name: "Mickey Thompson",
    description: "American performance and off-road brand with racing heritage. Aggressive tread designs for serious off-road performance.",
    specialties: ["Racing heritage", "Extreme off-road", "Drag racing", "Rock crawling capability"],
    tireTypes: ["Mud-Terrain", "All-Terrain", "Drag Racing", "Extreme Off-Road"],
    priceRange: "Premium",
    warranty: "45,000-50,000 miles treadwear",
    popular: false
  },
  {
    name: "Mastercraft",
    description: "Cooper-owned value brand offering affordable tire solutions. Good option for budget-conscious consumers seeking basic reliability.",
    specialties: ["Budget pricing", "Basic reliability", "Passenger car applications", "Value warranties"],
    tireTypes: ["Passenger", "All-Season", "Highway", "Light Truck"],
    priceRange: "Budget",
    warranty: "40,000-50,000 miles treadwear",
    popular: false
  }
];

// Popular brands for quick filtering
export const popularBrands = tireBrands.filter(brand => brand.popular);

// Brands by price range
export const brandsByPriceRange = {
  budget: tireBrands.filter(b => b.priceRange === "Budget"),
  midRange: tireBrands.filter(b => b.priceRange === "Mid-Range"),
  premium: tireBrands.filter(b => b.priceRange === "Premium"),
  ultraPremium: tireBrands.filter(b => b.priceRange === "Ultra-Premium")
};

// Get brand by name
export function getBrandByName(name: string): TireBrand | undefined {
  return tireBrands.find(brand => brand.name.toLowerCase() === name.toLowerCase());
}
