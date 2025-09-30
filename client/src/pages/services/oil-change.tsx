import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Calendar, CheckCircle, Droplet, Shield, Clock } from "lucide-react";
import { CallButton } from "@/components/shared/location-selector-dialog";
import { SEO } from "@/components/shared/seo";

export default function OilChangeService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO
        title="Oil Change Service Grants Gallup Farmington NM | Delta Tire"
        description="Fast, professional oil changes with synthetic & conventional options. Digital inspection included. Serving Grants, Gallup, Farmington NM & Eagar AZ. Book today!"
        keywords="oil change, synthetic oil, oil filter, fluid check, engine maintenance, Grants, Gallup, Farmington"
        canonical="https://deltatire.com/services/oil-change"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Oil Change & Maintenance
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
            Professional oil changes and preventive maintenance to keep your engine running smooth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton 
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold"
              testId="button-call-oil"
            />
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold" 
              asChild
              data-testid="button-schedule-oil"
            >
              <a href="/appointments">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Oil Change Service
            </h2>
            <p className="text-lg text-gray-600">
              Regular oil changes are essential for engine health and longevity. Our comprehensive service includes more than just an oil change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <Droplet className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quality Oil & Filter
                </h3>
                <p className="text-gray-600">
                  High-quality conventional, synthetic blend, or full synthetic oil to match your vehicle's requirements. Premium oil filters for maximum engine protection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Multi-Point Inspection
                </h3>
                <p className="text-gray-600">
                  Complimentary inspection of vital fluids, belts, hoses, battery, lights, and more. Catch problems early before they become expensive repairs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Clock className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Fast Service
                </h3>
                <p className="text-gray-600">
                  Most oil changes completed in under an hour. No appointment necessary, but scheduling ahead ensures minimal wait time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Digital Inspection Report
                </h3>
                <p className="text-gray-600">
                  Receive a detailed digital vehicle inspection with photos on your phone. See exactly what we see under your vehicle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Fluid Top-Off
                </h3>
                <p className="text-gray-600">
                  Top off windshield washer fluid, check and adjust tire pressure to manufacturer specifications. Comprehensive service included.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Service Reminders
                </h3>
                <p className="text-gray-600">
                  Keep track of your vehicle's maintenance schedule. We'll remind you when your next oil change or service is due.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Oil Change Frequency */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Often Should You Change Your Oil?
            </h2>
            <p className="text-lg text-gray-600">
              Oil change intervals depend on your vehicle, oil type, and driving conditions:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Conventional Oil</h4>
              <p className="text-gray-600">Every 3,000-5,000 miles or as recommended by your vehicle manufacturer.</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Synthetic Blend Oil</h4>
              <p className="text-gray-600">Every 5,000-7,500 miles, offering better protection than conventional oil.</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Full Synthetic Oil</h4>
              <p className="text-gray-600">Every 7,500-10,000 miles or more, depending on manufacturer specifications.</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Severe Driving Conditions</h4>
              <p className="text-gray-600">More frequent changes needed for towing, extreme temperatures, or dusty conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Schedule Your Oil Change Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Quick, professional oil changes at any of our 4 locations. Walk-ins welcome or schedule ahead for faster service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton 
              size="lg"
              className="bg-red-600 text-white hover:bg-red-700 font-semibold"
              testId="button-call-oil-footer"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </CallButton>
            <Button 
              size="lg" 
              variant="outline"
              className="font-semibold" 
              asChild
              data-testid="button-locations-oil"
            >
              <a href="/locations">View Locations</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
