import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Star, Wrench, Award, CheckCircle } from "lucide-react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ServicesGrid } from "@/components/shared/services-grid";
import { TireBrands } from "@/components/shared/tire-brands";
import { SEO } from "@/components/shared/seo";

const farmingtonLocationData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Delta Tire - Farmington",
  "image": "https://deltatire.com/images/delta-tire-logo.png",
  "description": "Professional tire service and auto repair in Farmington, NM. Expert oil changes, brake repair, wheel alignment, and truck accessories. Serving Farmington, Aztec, Bloomfield, and San Juan County.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4650 E Main St",
    "addressLocality": "Farmington",
    "addressRegion": "NM",
    "postalCode": "87402",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "36.7280",
    "longitude": "-108.1687"
  },
  "telephone": "+1-505-325-4500",
  "url": "https://deltatire.com/locations/farmington",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$",
  "areaServed": [
    {
      "@type": "City",
      "name": "Farmington, NM"
    },
    {
      "@type": "City",
      "name": "Aztec, NM"
    },
    {
      "@type": "City",
      "name": "Bloomfield, NM"
    },
    {
      "@type": "City",
      "name": "San Juan County, NM"
    },
    {
      "@type": "City",
      "name": "Kirtland, NM"
    }
  ]
};

export default function FarmingtonLocation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO
        title="Delta Tire Farmington NM | Auto Repair Aztec Bloomfield | Tire Shop E Main"
        description="Top-rated tire service & auto repair in Farmington, NM. Expert oil changes, brake repair, wheel alignment. Serving Farmington, Aztec, Bloomfield & San Juan County. Open today - call (505) 325-4500!"
        keywords="tire service Farmington NM, auto repair Farmington, oil change Farmington, brake repair Aztec NM, tire shop Bloomfield, auto repair San Juan County, wheel alignment Farmington, truck tires Farmington"
        canonical="https://deltatire.com/locations/farmington"
        geoRegion="US-NM"
        geoPlacename="Farmington, New Mexico"
        geoPosition="36.7280;-108.1687"
        structuredData={farmingtonLocationData}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Delta Tire <span className="text-white drop-shadow-lg">Farmington, NM</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-3xl text-red-100 mt-4 font-light">
                ★★★★★ Top Rated Auto Repair & Tire Service
              </p>
              <p className="text-base sm:text-lg md:text-xl text-red-200 mt-2">
                Serving Farmington, Aztec, Bloomfield & San Juan County
              </p>
            </div>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 text-red-100 max-w-5xl mx-auto leading-relaxed">
              Professional <strong>tire service</strong>, <strong>brake repair</strong>, <strong>oil changes</strong>, <strong>wheel alignments</strong>, and <strong>truck accessories</strong> on E Main St in Farmington. Your trusted San Juan County auto repair shop. <strong>Open today</strong> - call now!
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                asChild
                data-testid="button-call-farmington"
              >
                <a href="tel:5053254500">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (505) 325-4500
                </a>
              </Button>
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold text-lg px-8 py-4 rounded-xl transition-all" 
                asChild
                data-testid="button-directions-farmington"
              >
                <a href="https://maps.google.com/maps?q=4650+E+Main+St,+Farmington,+NM+87402" target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Farmington Location</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">4650 E Main St</p>
                    <p className="text-gray-600">Farmington, NM 87402</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:5053254500" className="text-red-600 hover:text-red-700 font-medium">(505) 325-4500</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600">Monday - Saturday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Areas We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Farmington</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Aztec</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Bloomfield</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Kirtland</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">San Juan County</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.4!2d-108.1687!3d36.7280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQzJzQwLjgiTiAxMDjCsDEwJzA3LjMiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Delta Tire Farmington Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Farmington Location */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Farmington Chooses Delta Tire
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted San Juan County auto repair and tire service center
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy E Main St Access</h3>
                <p className="text-gray-600">Convenient location on E Main St. Easy to find and accessible from anywhere in Farmington and surrounding areas.</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Service Facility</h3>
                <p className="text-gray-600">Complete automotive services from tire sales to major repairs. One stop for all your vehicle needs in Farmington.</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Vehicle Inspections</h3>
                <p className="text-gray-600">Transparent service with detailed digital inspections. See exactly what your vehicle needs with photos and explanations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ServicesGrid />

      {/* Local Testimonials */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ★★★★★ What Farmington Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from your neighbors in San Juan County
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "I definitely Delta now! Fast, reliable tire service and the courtesy car program is a lifesaver!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Jennifer L.</p>
                  <p className="text-sm text-gray-600">Farmington, NM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Best auto repair shop in Farmington! Honest, professional, and they actually care about your vehicle."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">David K.</p>
                  <p className="text-sm text-gray-600">Aztec, NM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Great tire service! The digital inspection showed me exactly what needed attention. Very transparent!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Amanda R.</p>
                  <p className="text-sm text-gray-600">Bloomfield, NM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TireBrands />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready for Service in Farmington?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Visit our Farmington location on E Main St or call us today. We're here to serve Farmington, Aztec, Bloomfield, and all of San Juan County!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 font-semibold text-lg transition-colors"
              asChild
              data-testid="button-call-farmington-cta"
            >
              <a href="tel:5053254500">
                <Phone className="w-5 h-5 mr-2" />
                Call (505) 325-4500
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-200 font-semibold text-lg transition-colors" 
              asChild
              data-testid="button-services-farmington"
            >
              <a href="/services">
                <Wrench className="w-5 h-5 mr-2" />
                View All Services
              </a>
            </Button>
          </div>

          <div className="mt-12">
            <p className="text-gray-600 mb-4">Also serving these Delta Tire locations:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <a href="/locations/grants">Grants, NM</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/locations/gallup">Gallup, NM</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/locations/eagar">Eagar, AZ</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
