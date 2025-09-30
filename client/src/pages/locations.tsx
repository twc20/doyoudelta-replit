import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { LocationsGrid } from "@/components/shared/locations-grid";
import { MapPin } from "lucide-react";
import { SEO, grantsLocationData, gallupLocationData, farmingtonLocationData, eagarLocationData } from "@/components/shared/seo";

export default function Locations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO
        title="4 Locations NM & AZ | Delta Tire Grants Gallup Farmington"
        description="Find Delta Tire near you: Grants, Gallup, Farmington NM & Eagar AZ. Professional auto repair & tire service across Four Corners. Hours, directions & phone numbers."
        keywords="Delta Tire locations, Grants auto repair, Gallup tire shop, Farmington car service, Eagar mechanic, New Mexico, Arizona"
        canonical="https://deltatire.com/locations"
        geoRegion="US-NM"
        geoPlacename="Four Corners Region"
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [grantsLocationData, gallupLocationData, farmingtonLocationData, eagarLocationData]
        }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <MapPin className="w-16 h-16 mx-auto mb-4" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            4 Convenient Locations
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            Serving the Four Corners region with professional automotive services across New Mexico and Arizona.
          </p>
        </div>
      </section>

      <LocationsGrid />

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Visit Your Nearest Delta Tire
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each location offers the same high-quality service, expert technicians, and commitment to transparency. 
            Find the location nearest you and experience the Delta difference.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
