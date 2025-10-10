import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Star, Wrench, Award, CheckCircle, ArrowRight, Calendar } from "lucide-react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ServicesGrid } from "@/components/shared/services-grid";
import { TireBrands } from "@/components/shared/tire-brands";
import { SEO } from "@/components/shared/seo";

const grantsLocationData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Delta Tire - Grants",
  "image": "https://deltatire.com/images/delta-tire-logo.png",
  "description": "Professional tire service and auto repair in Grants, NM. Expert oil changes, brake repair, wheel alignment, and truck accessories. Serving Grants, Milan, and Cibola County.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "833 E Santa Fe Ave",
    "addressLocality": "Grants",
    "addressRegion": "NM",
    "postalCode": "87020",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "35.1478",
    "longitude": "-107.8528"
  },
  "telephone": "+1-505-287-7946",
  "url": "https://deltatire.com/locations/grants",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$",
  "areaServed": [
    {
      "@type": "City",
      "name": "Grants, NM"
    },
    {
      "@type": "City",
      "name": "Milan, NM"
    },
    {
      "@type": "City",
      "name": "Cibola County, NM"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Automotive Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tire Sales & Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Oil Change Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brake Repair & Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wheel Alignment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Auto Repair"
        }
      }
    ]
  }
};

export default function GrantsLocation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO
        title="Delta Tire Grants NM | Auto Repair & Tire Service Near Milan | Oil Change"
        description="Top-rated tire service & auto repair in Grants, NM. Expert oil changes, brake repair, wheel alignment & truck accessories. Serving Grants, Milan & Cibola County. Open today - call (505) 287-7946!"
        keywords="tire service Grants NM, auto repair Grants, oil change Grants, brake repair Grants, wheel alignment Grants, tire shop Milan NM, auto repair Cibola County, truck accessories Grants"
        canonical="https://deltatire.com/locations/grants"
        geoRegion="US-NM"
        geoPlacename="Grants, New Mexico"
        geoPosition="35.1478;-107.8528"
        structuredData={grantsLocationData}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Delta Tire <span className="text-white drop-shadow-lg">Grants, NM</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-3xl text-red-100 mt-4 font-light">
                ★★★★★ Top Rated Auto Repair & Tire Service
              </p>
              <p className="text-base sm:text-lg md:text-xl text-red-200 mt-2">
                Serving Grants, Milan & Cibola County
              </p>
            </div>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 text-red-100 max-w-5xl mx-auto leading-relaxed">
              Professional <strong>tire service</strong>, <strong>brake repair</strong>, <strong>oil changes</strong>, <strong>wheel alignments</strong>, and <strong>truck accessories</strong> in Grants, NM. Your trusted local auto repair shop since 2015. <strong>Open today</strong> - call now!
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                asChild
                data-testid="button-call-grants"
              >
                <a href="tel:5052877946">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (505) 287-7946
                </a>
              </Button>
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold text-lg px-8 py-4 rounded-xl transition-all" 
                asChild
                data-testid="button-directions-grants"
              >
                <a href="https://maps.google.com/maps?q=833+E+Santa+Fe+Ave,+Grants+NM+87020" target="_blank" rel="noopener noreferrer">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Grants Location</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">833 E Santa Fe Ave</p>
                    <p className="text-gray-600">Grants, NM 87020</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:5052877946" className="text-red-600 hover:text-red-700 font-medium">(505) 287-7946</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600">Monday - Friday: 7:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Areas We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Grants</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Milan</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Cibola County</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Bluewater</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">San Rafael</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.4!2d-107.8528!3d35.1478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA4JzUyLjEiTiAxMDfCsDUxJzEwLjEiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Delta Tire Grants Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Grants Location */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Grants Chooses Delta Tire
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted local auto repair and tire service center in Cibola County since 2015
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Experts</h3>
                <p className="text-gray-600">Serving Grants and Milan communities for over 10 years. We know your roads, your climate, and your vehicles.</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Courtesy Cars Available</h3>
                <p className="text-gray-600">Stay mobile while we service your vehicle. Free loaner cars available at our Grants location.</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Service Shop</h3>
                <p className="text-gray-600">From tire sales to complete auto repair. One-stop shop for all your automotive needs in Grants.</p>
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
              ★★★★★ What Grants Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from your neighbors in Grants and Milan
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
                  "Best tire shop in Grants! They really do treat your car like our car. Fast service and honest pricing."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Sarah M.</p>
                  <p className="text-sm text-gray-600">Grants, NM</p>
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
                  "I've been coming here for years. The Delta Difference is real - quality work and they stand behind it."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Robert J.</p>
                  <p className="text-sm text-gray-600">Milan, NM</p>
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
                  "Excellent auto repair shop! The courtesy car program saved me when my truck needed major work."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Maria G.</p>
                  <p className="text-sm text-gray-600">Grants, NM</p>
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
            Ready for Service in Grants?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Visit our Grants location on E Santa Fe Ave or call us today. We're here to serve Grants, Milan, and all of Cibola County!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 font-semibold text-lg transition-colors"
              asChild
              data-testid="button-call-grants-cta"
            >
              <a href="tel:5052877946">
                <Phone className="w-5 h-5 mr-2" />
                Call (505) 287-7946
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-200 font-semibold text-lg transition-colors" 
              asChild
              data-testid="button-services-grants"
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
                <a href="/locations/gallup">Gallup, NM</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/locations/farmington">Farmington, NM</a>
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
