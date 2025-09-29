import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Calendar, CheckCircle, Battery, Zap, AlertTriangle, Settings } from "lucide-react";
import { SEO } from "@/components/shared/seo";
import { CallButton } from "@/components/shared/location-selector-dialog";

export default function BatteriesService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO
        title="Battery & Electrical Service | Delta Tire"
        description="Professional battery replacement, alternator service, starter repair, and electrical diagnostics. Expert automotive electrical service in New Mexico & Arizona."
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Battery & Electrical Service
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
            Professional battery replacement, alternator service, starter repair, and complete electrical diagnostics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold" 
              testId="button-call-batteries"
            />
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold" 
              asChild
              data-testid="button-schedule-batteries"
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
              Complete Electrical Solutions
            </h2>
            <p className="text-lg text-gray-600">
              From battery testing and replacement to complex electrical diagnostics, Delta Tire provides 
              comprehensive electrical system services to keep your vehicle running reliably.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-8">
                <Battery className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Battery Replacement
                </h3>
                <p className="text-gray-600">
                  Quality battery brands with warranties. Free battery testing and professional installation 
                  to ensure reliable starting power.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Zap className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Alternator Service
                </h3>
                <p className="text-gray-600">
                  Complete alternator testing, repair, and replacement. Keep your charging system 
                  functioning properly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Settings className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Starter Repair
                </h3>
                <p className="text-gray-600">
                  Expert starter diagnosis and replacement. Don't get stranded with a failed starter.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <AlertTriangle className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Electrical Diagnostics
                </h3>
                <p className="text-gray-600">
                  Advanced diagnostic equipment to identify and resolve complex electrical issues quickly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Delta Tire */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expert Electrical Service
            </h2>
            <p className="text-lg text-gray-600">
              Your vehicle's electrical system is complex and critical. Trust Delta Tire's experienced technicians 
              to diagnose and repair electrical issues correctly the first time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Battery Testing</h3>
                <p className="text-gray-600">
                  Complimentary battery testing to determine if your battery needs replacement or if another 
                  electrical issue is present.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Batteries</h3>
                <p className="text-gray-600">
                  Top battery brands with excellent warranties. We'll help you choose the right battery 
                  for your vehicle and driving conditions.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Diagnostics</h3>
                <p className="text-gray-600">
                  State-of-the-art diagnostic equipment to quickly identify electrical problems and 
                  charging system issues.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Warranty Protection</h3>
                <p className="text-gray-600">
                  Comprehensive warranties on parts and labor. Your electrical repairs are protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Signs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Signs You Need Electrical Service
            </h2>
            <p className="text-lg text-gray-600">
              Don't ignore these warning signs of electrical or battery problems:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <AlertTriangle className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Slow Engine Crank</h3>
              <p className="text-gray-600 text-sm">
                Engine struggles to turn over or cranks slowly when starting
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <AlertTriangle className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Warning Lights</h3>
              <p className="text-gray-600 text-sm">
                Battery, check engine, or charging system warning lights illuminated
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <AlertTriangle className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Dim Lights</h3>
              <p className="text-gray-600 text-sm">
                Headlights or interior lights dimmer than usual
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <AlertTriangle className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Electrical Issues</h3>
              <p className="text-gray-600 text-sm">
                Power windows, radio, or other electrical components malfunctioning
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <AlertTriangle className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Corrosion</h3>
              <p className="text-gray-600 text-sm">
                Visible corrosion on battery terminals or cables
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <AlertTriangle className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Old Battery</h3>
              <p className="text-gray-600 text-sm">
                Battery is 3-5 years old and losing performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Battery or Electrical Service?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Schedule your appointment today and experience the Delta Difference. Professional service 
            at all 4 convenient locations across New Mexico & Arizona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold" 
              testId="button-cta-call-batteries"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </CallButton>
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold" 
              asChild
              data-testid="button-cta-schedule-batteries"
            >
              <a href="/appointments">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Service
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
