import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Clock, Star, Wrench, Shield, Car, Users, Award, CheckCircle, ArrowRight, Calendar } from "lucide-react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ServicesGrid } from "@/components/shared/services-grid";
import { LocationsGrid } from "@/components/shared/locations-grid";
import { TireBrands } from "@/components/shared/tire-brands";
import { SEO, localBusinessData } from "@/components/shared/seo";
import { CallButton } from "@/components/shared/location-selector-dialog";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO
        title="Delta Tire | Auto Repair Grants Gallup Farmington NM AZ"
        description="Expert tire & auto repair in Grants, Gallup, Farmington NM & Eagar AZ. Oil changes, brakes, alignments, truck accessories. 10 years serving Four Corners. Call now!"
        keywords="tire service, auto repair, oil change, brake repair, wheel alignment, truck accessories, New Mexico, Arizona, Grants, Gallup, Farmington, Eagar"
        canonical="https://deltatire.com/"
        geoRegion="US-NM"
        geoPlacename="Grants, New Mexico"
        geoPosition="35.1478;-107.8528"
        structuredData={localBusinessData}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
                Do You <span className="text-white drop-shadow-lg">Delta</span>?
              </h1>
              <p className="text-lg sm:text-xl md:text-3xl text-red-100 mt-4 font-light">
                ★★★★★ Top Rated Tire Shop & Auto Repair
              </p>
              <p className="text-base sm:text-lg md:text-xl text-red-200 mt-2">
                Grants • Gallup • Farmington • Eagar
              </p>
            </div>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 text-red-100 max-w-5xl mx-auto leading-relaxed">
              Professional <strong>tire service</strong>, <strong>brake repair</strong>, <strong>oil changes</strong>, <strong>wheel alignments</strong>, and <strong>truck accessories</strong> in New Mexico & Arizona. We treat your car like our car. <strong>Open today</strong> - call now!
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CallButton 
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                testId="button-call-now"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now - Open Today!
              </CallButton>
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold text-lg px-8 py-4 rounded-xl transition-all" 
                asChild
                data-testid="button-careers"
              >
                <a href="/careers">
                  Come Work With Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Delta Difference Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Do You Delta?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delta = Difference. We are the difference.
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto">
              Our slogan isn't just words – it's our commitment. We take the time and effort to be the <strong>difference</strong> that sets us apart in New Mexico and Arizona. Every service, every interaction, every detail matters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">We Take the Time</h3>
              <p className="text-gray-600">No rushing, no shortcuts. We invest the time needed to do the job right the first time.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">We Make the Effort</h3>
              <p className="text-gray-600">Going above and beyond isn't extra – it's standard. We put in the effort to exceed expectations with every service.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">We Are the Difference</h3>
              <p className="text-gray-600">Delta means difference, and that difference is what makes us the most trusted automotive service in the industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Owner - Video Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the Owner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from Tannin, owner of Delta Tire, about our commitment to treating your car like our car with digital vehicle inspections and transparent service.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/dU9pTRRDAkc"
                  title="Meet Tannin - Delta Tire Owner"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  data-testid="video-owner"
                ></iframe>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  "I'll treat your car like my car"
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Watch Tannin explain our commitment to transparency with digital vehicle inspections,
                  manufacturer-specified service intervals, and detailed photos showing exactly what your
                  vehicle needs. You'll receive a link to access your inspection report on your phone anytime.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 mr-2 text-red-600" />
                    Digital Vehicle Inspections
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 mr-2 text-red-600" />
                    Manufacturer Service Intervals
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 mr-2 text-red-600" />
                    Detailed Photos & Reports
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />

      {/* Why Choose Delta Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Delta Tire?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not the cheapest—we add the most value. <strong>Trusted auto repair</strong>, <strong>professional tire service</strong>, and <strong>honest pricing</strong> since 2015.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Warranty Protection</h3>
              <p className="text-gray-600">Comprehensive warranties on all our work. Your investment is protected with our quality guarantee.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Courtesy Cars Available</h3>
              <p className="text-gray-600">Stay mobile while we service your vehicle. Free loaner cars available at select locations.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Clean, Professional Shop</h3>
              <p className="text-gray-600">Professional, comfortable waiting area. Clean facility you can trust with your vehicle.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Financing Available</h3>
              <p className="text-gray-600">Flexible payment options available. Auto repair financing and payment plans to fit your budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ★★★★★ What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              They experience the Delta Difference every day. Real reviews from satisfied customers across New Mexico & Arizona.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Now I know what 'Do You Delta' means! They really are the difference. Excellent tire service and they truly treat your car like our car!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Sarah M.</p>
                  <p className="text-sm text-gray-600">Grants, NM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The Delta Difference is real! Professional auto repair, clean facility, and they stand behind their work. Highly recommend!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Mike R.</p>
                  <p className="text-sm text-gray-600">Gallup, NM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
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
          </div>
        </div>
      </section>

      <LocationsGrid />
      <TireBrands />

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Experience the Delta Difference?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Professional automotive services with transparent pricing, digital inspections, and guaranteed satisfaction. Call now or visit one of our 4 locations today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CallButton 
              size="lg"
              className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 font-semibold text-lg transition-colors"
              testId="button-call-final"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now - Open Today!
            </CallButton>
            <Button 
              size="lg" 
              className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-200 font-semibold text-lg transition-colors" 
              asChild
              data-testid="button-schedule"
            >
              <a href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Service
              </a>
            </Button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2" data-testid="stat-locations">4</div>
              <div className="text-gray-600">Convenient Locations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2" data-testid="stat-experience">10</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2" data-testid="stat-rating">★★★★★</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
