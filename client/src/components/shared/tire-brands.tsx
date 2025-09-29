const brands = [
  { name: "BFGoodrich", logo: "/logos/tires/bfgoodrich.png" },
  { name: "Bridgestone", logo: "/logos/tires/bridgestone.png" },
  { name: "Carlisle", logo: "/logos/tires/carlisle.png" },
  { name: "Continental", logo: "/logos/tires/continental.png" },
  { name: "Cooper", logo: "/logos/tires/cooper.png" },
  { name: "Falken", logo: "/logos/tires/falken.png" },
  { name: "Firestone", logo: "/logos/tires/firestone.png" },
  { name: "General", logo: "/logos/tires/general.png" },
  { name: "Goodyear", logo: "/logos/tires/goodyear.png" },
  { name: "Haida", logo: "/logos/tires/haida.png" },
  { name: "Hankook", logo: "/logos/tires/hankook.png" },
  { name: "Hercules", logo: "/logos/tires/hercules.png" },
  { name: "Ironman", logo: "/logos/tires/ironman.png" },
  { name: "Kumho", logo: "/logos/tires/kumho.png" },
  { name: "Mastercraft", logo: "/logos/tires/mastercraft.png" },
  { name: "Michelin", logo: "/logos/tires/michelin.png" },
  { name: "Mickey Thompson", logo: "/logos/tires/mickeythompson.png" },
  { name: "MileKing", logo: "/logos/tires/mileking.png" },
  { name: "Nexen", logo: "/logos/tires/nexen.png" },
  { name: "Nitto", logo: "/logos/tires/nitto.png" },
  { name: "Pirelli", logo: "/logos/tires/pirelli.png" },
  { name: "Samson", logo: "/logos/tires/samson.png" }
];

export function TireBrands() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Top Tire Brands Available
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We carry premium tire brands for all vehicle types. From passenger cars to heavy-duty trucks, find the perfect tires for your needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 items-center">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 border border-gray-200 hover:shadow-md transition-shadow"
              data-testid={`brand-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <img 
                src={brand.logo} 
                alt={`${brand.name} tires`}
                className="max-w-full max-h-16 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Don't see your preferred brand? <a href="/contact" className="text-red-600 hover:text-red-700 font-medium">Contact us</a> - we can special order most tire brands!
          </p>
        </div>
      </div>
    </section>
  );
}
