const brands = [
  "Michelin",
  "Bridgestone", 
  "Goodyear",
  "Continental",
  "Yokohama",
  "BFGoodrich"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20 border border-gray-200 hover:shadow-md transition-shadow"
              data-testid={`brand-${brand.toLowerCase()}`}
            >
              <span className="text-gray-700 font-medium text-lg">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
