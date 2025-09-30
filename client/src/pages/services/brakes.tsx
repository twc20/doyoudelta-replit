import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Calendar, CheckCircle, Shield, AlertTriangle, Wrench } from "lucide-react";
import { CallButton } from "@/components/shared/location-selector-dialog";
import { SEO } from "@/components/shared/seo";

export default function BrakesService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO
        title="Brake Repair Grants Gallup Farmington NM | Delta Tire"
        description="Expert brake service: pads, rotors, calipers & fluid. Squealing brakes? Soft pedal? We fix it fast in Grants, Gallup, Farmington NM & Eagar AZ. Free inspection!"
        keywords="brake repair, brake pads, brake rotors, brake service, brake inspection, Grants, Gallup, Farmington"
        canonical="https://deltatire.com/services/brakes"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Brake Repair & Service
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
            Expert brake inspection, repair, and replacement to keep you and your family safe on the road.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold" 
              testId="button-call-brakes"
            />
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold" 
              asChild
              data-testid="button-schedule-brakes"
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
              Complete Brake System Service
            </h2>
            <p className="text-lg text-gray-600">
              Your brakes are your vehicle's most important safety system. We provide comprehensive brake services to ensure reliable stopping power.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Brake Inspection
                </h3>
                <p className="text-gray-600">
                  Comprehensive inspection of pads, rotors, calipers, brake fluid, and lines. Digital inspection report with photos sent to your phone.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Wrench className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Brake Pad Replacement
                </h3>
                <p className="text-gray-600">
                  Quality brake pads installed by certified technicians. We use premium parts that meet or exceed OEM specifications for safety and performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Rotor Service
                </h3>
                <p className="text-gray-600">
                  Rotor resurfacing or replacement as needed. Smooth, true rotors are essential for proper brake function and pedal feel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <AlertTriangle className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Brake Fluid Service
                </h3>
                <p className="text-gray-600">
                  Brake fluid flush and replacement. Old fluid absorbs moisture and reduces braking performance—we recommend service every 2-3 years.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Wrench className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Caliper Service
                </h3>
                <p className="text-gray-600">
                  Caliper inspection, cleaning, lubrication, and replacement if necessary. Seized calipers cause uneven wear and reduced braking power.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  ABS & Brake Systems
                </h3>
                <p className="text-gray-600">
                  Anti-lock brake system diagnostics and repair. Modern brake systems are complex—our technicians have the training and tools to fix them right.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Warning Signs You Need Brake Service
            </h2>
            <p className="text-lg text-gray-600">
              Don't ignore these signs—get your brakes checked immediately:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Squealing or Grinding Noises</h4>
                <p className="text-gray-600">High-pitched squealing or metal-on-metal grinding means immediate brake service is needed to prevent rotor damage.</p>
              </div>
            </div>

            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Soft or Spongy Pedal</h4>
                <p className="text-gray-600">If your brake pedal feels soft or goes to the floor, you may have air in the lines or a fluid leak—get it checked now.</p>
              </div>
            </div>

            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Vibration When Braking</h4>
                <p className="text-gray-600">Steering wheel or pedal vibration often indicates warped rotors that need resurfacing or replacement.</p>
              </div>
            </div>

            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Dashboard Warning Light</h4>
                <p className="text-gray-600">Brake warning light or ABS light on your dashboard requires immediate professional inspection and diagnosis.</p>
              </div>
            </div>

            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Vehicle Pulls to One Side</h4>
                <p className="text-gray-600">If your vehicle pulls left or right when braking, you may have uneven pad wear or a stuck caliper.</p>
              </div>
            </div>

            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Burning Smell</h4>
                <p className="text-gray-600">A burning smell after hard braking or driving could indicate overheated brakes or brake fluid—stop and cool down immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get Your Brakes Checked Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't compromise on safety. Visit any of our 4 locations for a free brake inspection and expert service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton 
              size="lg" 
              className="bg-red-600 text-white hover:bg-red-700 font-semibold" 
              testId="button-call-brakes-footer"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </CallButton>
            <Button 
              size="lg" 
              variant="outline"
              className="font-semibold" 
              asChild
              data-testid="button-locations-brakes"
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
