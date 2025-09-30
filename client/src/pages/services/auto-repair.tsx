import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Calendar, CheckCircle, Wrench, Shield, Award } from "lucide-react";
import { CallButton } from "@/components/shared/location-selector-dialog";
import { SEO } from "@/components/shared/seo";

export default function AutoRepairService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO
        title="Auto Repair Grants Gallup Farmington NM | Delta Tire"
        description="Complete auto repair: engine, transmission, electrical, AC, heating & more. Expert mechanics in Grants, Gallup, Farmington NM & Eagar AZ. Digital inspection included!"
        keywords="auto repair, car repair, mechanic, engine repair, transmission, electrical, Grants, Gallup, Farmington"
        canonical="https://deltatire.com/services/auto-repair"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            General Auto Repair
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
            Comprehensive automotive repair from expert technicians. We treat your car like our car.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold" 
              testId="button-call-repair"
            />
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold" 
              asChild
              data-testid="button-schedule-repair"
            >
              <a href="/appointments">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Auto Repair Services
            </h2>
            <p className="text-lg text-gray-600">
              From routine maintenance to complex repairs, our expert technicians have the expertise 
              and equipment to service all makes and models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <Wrench className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Engine Repair
                </h3>
                <p className="text-gray-600">
                  Engine diagnostics, timing belt replacement, water pump service, and major engine repair from experienced technicians.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Transmission Service
                </h3>
                <p className="text-gray-600">
                  Transmission fluid service, diagnostics, and repair. Keep your transmission running smoothly with regular maintenance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Electrical Diagnostics
                </h3>
                <p className="text-gray-600">
                  Battery testing, alternator and starter service, electrical system diagnostics using professional scan tools.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Suspension & Steering
                </h3>
                <p className="text-gray-600">
                  Shocks, struts, ball joints, tie rods, and steering system repair. Maintain control and comfort with proper suspension.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Wrench className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  AC & Heating
                </h3>
                <p className="text-gray-600">
                  Air conditioning repair and recharge, heater service, radiator repair, and cooling system maintenance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Check Engine Light
                </h3>
                <p className="text-gray-600">
                  Professional diagnostics for check engine lights. We'll find the problem and provide honest recommendations for repair.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Exhaust System
                </h3>
                <p className="text-gray-600">
                  Muffler, catalytic converter, and complete exhaust system service. Fix leaks and restore performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Pre-Purchase Inspection
                </h3>
                <p className="text-gray-600">
                  Considering a used vehicle? Get a comprehensive pre-purchase inspection to know what you're buying.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Fleet Maintenance
                </h3>
                <p className="text-gray-600">
                  Commercial vehicle maintenance and fleet services. Keep your business vehicles running with preventive care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital Inspection */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Digital Vehicle Inspections
            </h2>
            <p className="text-lg text-gray-600">
              We use digital inspection technology to show you exactly what your vehicle needs. Photos and detailed reports sent directly to your phone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Complete Transparency</h4>
              <p className="text-gray-600">See photos of your vehicle's condition with detailed explanations. No surprises—you'll know exactly what needs attention.</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Manufacturer Intervals</h4>
              <p className="text-gray-600">We follow your vehicle manufacturer's recommended service intervals. No unnecessary services—only what your vehicle needs.</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Accessible Reports</h4>
              <p className="text-gray-600">Access your inspection report anytime on your phone. Share it with family or use it when selling your vehicle.</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Honest Recommendations</h4>
              <p className="text-gray-600">We prioritize repairs by safety and urgency. You decide what to fix now and what can wait.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Auto Repair? We Can Help
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From routine maintenance to complex repairs, our expert technicians provide quality service at all 4 locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton 
              size="lg" 
              className="bg-red-600 text-white hover:bg-red-700 font-semibold" 
              testId="button-call-repair-footer"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </CallButton>
            <Button 
              size="lg" 
              variant="outline"
              className="font-semibold" 
              asChild
              data-testid="button-locations-repair"
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
