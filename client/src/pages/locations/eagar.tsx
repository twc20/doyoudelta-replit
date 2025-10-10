import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Star, Wrench, Award, CheckCircle } from "lucide-react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ServicesGrid } from "@/components/shared/services-grid";
import { TireBrands } from "@/components/shared/tire-brands";
import { SEO } from "@/components/shared/seo";

const eagarLocationData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Delta Tire - Eagar",
  "image": "https://deltatire.com/images/delta-tire-logo.png",
  "description": "Professional tire service and auto repair in Eagar, AZ. Expert oil changes, brake repair, wheel alignment, and truck accessories. Serving Eagar, Springerville, Alpine, and Apache County.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "50 W Central Ave",
    "addressLocality": "Eagar",
    "addressRegion": "AZ",
    "postalCode": "85925",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.1117",
    "longitude": "-109.2950"
  },
  "telephone": "+1-928-333-3730",
  "url": "https://deltatire.com/locations/eagar",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$",
  "areaServed": [
    {
      "@type": "City",
      "name": "Eagar, AZ"
    },
    {
      "@type": "City",
      "name": "Springerville, AZ"
    },
    {
      "@type": "City",
      "name": "Alpine, AZ"
    },
    {
      "@type": "City",
      "name": "Apache County, AZ"
    },
    {
      "@type": "City",
      "name": "Greer, AZ"
    }
  ]
};

export default function EagarLocation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO
        title="Delta Tire Eagar AZ | Auto Repair Springerville Alpine | Tire Shop Apache County"
        description="Top-rated tire service & auto repair in Eagar, AZ. Expert oil changes, brake repair, wheel alignment. Serving Eagar, Springerville, Alpine & Apache County. Open today - call (928) 333-3730!"
        keywords="tire service Eagar AZ, auto repair Eagar, oil change Springerville AZ, brake repair Alpine AZ, tire shop Apache County, auto repair Eagar, wheel alignment Springerville, truck tires Eagar"
        canonical="https://deltatire.com/locations/eagar"
        geoRegion="US-AZ"
        geoPlacename="Eagar, Arizona"
        geoPosition="34.1117;-109.2950"
        structuredData={eagarLocationData}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Delta Tire <span className="text-white drop-shadow-lg">Eagar, AZ</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-3xl text-red-100 mt-4 font-light">
                ★★★★★ Top Rated Auto Repair & Tire Service
              </p>
              <p className="text-base sm:text-lg md:text-xl text-red-200 mt-2">
                Serving Eagar, Springerville, Alpine & Apache County
              </p>
            </div>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 text-red-100 max-w-5xl mx-auto leading-relaxed">
              Professional <strong>tire service</strong>, <strong>brake repair</strong>, <strong>oil changes</strong>, <strong>wheel alignments</strong>, and <strong>truck accessories</strong> in Eagar, Arizona. Your trusted White Mountains auto repair shop. <strong>Open today</strong> - call now!
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                asChild
                data-testid="button-call-eagar"
              >
                <a href="tel:9283333730">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (928) 333-3730
                </a>
              </Button>
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold text-lg px-8 py-4 rounded-xl transition-all" 
                asChild
                data-testid="button-directions-eagar"
              >
                <a href="https://maps.google.com/maps?q=50+W+Central+Ave,+Eagar,+AZ+85925" target="_blank" rel="noopener noreferrer">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Eagar Location</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">50 W Central Ave</p>
                    <p className="text-gray-600">Eagar, AZ 85925</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:9283333730" className="text-red-600 hover:text-red-700 font-medium">(928) 333-3730</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Areas We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Eagar</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Springerville</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Alpine</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Greer</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Apache County</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.4!2d-109.2950!3d34.1117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA2JzQyLjEiTiAxMDnCsDE3JzQyLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Delta Tire Eagar Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Eagar Location */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Eagar Chooses Delta Tire
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted White Mountains auto repair and tire service center
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mountain Experts</h3>
                <p className="text-gray-600">We understand White Mountains driving conditions. From winter tires to all-season performance, we've got you covered.</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Central Eagar Location</h3>
                <p className="text-gray-600">Conveniently located on W Central Ave. Easy access from Eagar, Springerville, and Alpine areas.</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Auto Care</h3>
                <p className="text-gray-600">From routine maintenance to major repairs. Your one-stop auto shop in Apache County.</p>
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
              ★★★★★ What Eagar Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from your neighbors in the White Mountains
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
                  "Best tire shop in the White Mountains! They know exactly what tires work best for our mountain roads."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">John D.</p>
                  <p className="text-sm text-gray-600">Eagar, AZ</p>
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
                  "Honest and reliable auto repair. They explain everything clearly and never try to upsell unnecessary work."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Karen S.</p>
                  <p className="text-sm text-gray-600">Springerville, AZ</p>
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
                  "Great service! They got me back on the road quickly. The Delta Difference is no joke - quality work!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Michael P.</p>
                  <p className="text-sm text-gray-600">Alpine, AZ</p>
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
            Ready for Service in Eagar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Visit our Eagar location on W Central Ave or call us today. We're here to serve Eagar, Springerville, Alpine, and all of Apache County!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 font-semibold text-lg transition-colors"
              asChild
              data-testid="button-call-eagar-cta"
            >
              <a href="tel:9283333730">
                <Phone className="w-5 h-5 mr-2" />
                Call (928) 333-3730
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-200 font-semibold text-lg transition-colors" 
              asChild
              data-testid="button-services-eagar"
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
                <a href="/locations/farmington">Farmington, NM</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
