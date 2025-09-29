import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Calendar, CheckCircle, Shield, Award, Wrench } from "lucide-react";
import { TireBrands } from "@/components/shared/tire-brands";

export default function TiresService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Tire Sales & Service
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
            Premium tire sales, professional installation, and expert tire repair from brands you trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold" 
              asChild
              data-testid="button-call-tires"
            >
              <a href="tel:505-287-7946">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold" 
              asChild
              data-testid="button-schedule-tires"
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
              Complete Tire Solutions
            </h2>
            <p className="text-lg text-gray-600">
              From selecting the perfect tires for your vehicle to professional installation and ongoing maintenance, 
              Delta Tire provides comprehensive tire services to keep you safe on the road.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Tire Sales
                </h3>
                <p className="text-gray-600">
                  Wide selection of premium tire brands including Michelin, Goodyear, Bridgestone, 
                  BFGoodrich, and more. We'll help you find the perfect tires for your vehicle and driving needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Wrench className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Professional Installation
                </h3>
                <p className="text-gray-600">
                  Expert tire mounting, balancing, and installation using state-of-the-art equipment. 
                  Proper installation ensures optimal performance and tire longevity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Tire Repair
                </h3>
                <p className="text-gray-600">
                  Professional tire repair for punctures and damage. We inspect every tire thoroughly 
                  and only repair when it's safe—your safety is our priority.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Tire Rotation
                </h3>
                <p className="text-gray-600">
                  Regular tire rotation extends tire life and ensures even wear. We follow 
                  manufacturer-recommended rotation patterns for optimal performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Tire Balancing
                </h3>
                <p className="text-gray-600">
                  Precision wheel balancing eliminates vibration and extends tire life. 
                  Our computerized balancers ensure smooth, comfortable driving.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  TPMS Service
                </h3>
                <p className="text-gray-600">
                  Tire Pressure Monitoring System service, sensor replacement, and programming. 
                  Keep your TPMS warning light off and your tires properly inflated.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TireBrands />

      {/* When to Replace Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              When to Replace Your Tires
            </h2>
            <p className="text-lg text-gray-600">
              Regular tire inspection is crucial for safety. Here are signs it's time for new tires:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Tread Depth Below 2/32"</h4>
                <p className="text-gray-600">Use the penny test or tread depth gauge to check. Worn tread reduces traction, especially in wet conditions.</p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Visible Damage</h4>
                <p className="text-gray-600">Cracks, bulges, cuts, or punctures in the sidewall require immediate tire replacement for safety.</p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Uneven Wear</h4>
                <p className="text-gray-600">Unusual wear patterns indicate alignment issues or other problems that need addressing along with tire replacement.</p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Age Over 6 Years</h4>
                <p className="text-gray-600">Even with good tread, tires age and rubber deteriorates. Replace tires older than 6-10 years regardless of appearance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready for New Tires?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Contact us today for a tire quote or schedule your tire service at any of our 4 convenient locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-red-600 text-white hover:bg-red-700 font-semibold" 
              asChild
              data-testid="button-call-tires-footer"
            >
              <a href="tel:505-287-7946">Call: (505) 287-7946</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-semibold" 
              asChild
              data-testid="button-locations-tires"
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
