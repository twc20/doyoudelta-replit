import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Calendar, Truck, Shield, Wrench, Star } from "lucide-react";
import { CallButton } from "@/components/shared/location-selector-dialog";

export default function TruckAccessoriesService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Truck Accessories & Upgrades
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
            Customize and protect your truck with professional accessory installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold" 
              testId="button-call-truck"
            />
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold" 
              asChild
              data-testid="button-schedule-truck"
            >
              <a href="/appointments">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Accessories Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Truck Customization
            </h2>
            <p className="text-lg text-gray-600">
              From functional accessories to style upgrades, we'll help you customize your truck for work and play. 
              Professional installation ensures quality and durability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Bed Liners
                </h3>
                <p className="text-gray-600">
                  Spray-in and drop-in bed liners to protect your truck bed from scratches, dents, and corrosion. Professional application for lasting protection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Truck className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Tonneau Covers
                </h3>
                <p className="text-gray-600">
                  Hard and soft tonneau covers from leading brands. Secure your cargo, improve fuel economy, and enhance your truck's appearance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Star className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Running Boards & Steps
                </h3>
                <p className="text-gray-600">
                  Nerf bars, running boards, and power steps for easier cab access. Multiple styles available to match your truck's look.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Grille Guards & Bumpers
                </h3>
                <p className="text-gray-600">
                  Heavy-duty grille guards, brush guards, and custom bumpers for front-end protection and aggressive styling.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Wrench className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Toolboxes
                </h3>
                <p className="text-gray-600">
                  Crossover, side-mount, and chest toolboxes. Secure storage for tools and equipment with weather-resistant construction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Star className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Lift Kits & Leveling
                </h3>
                <p className="text-gray-600">
                  Suspension lift kits and leveling kits for improved ground clearance and aggressive stance. Professional installation is crucial.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Truck className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Hitches & Towing
                </h3>
                <p className="text-gray-600">
                  Trailer hitches, wiring harnesses, and towing accessories. We'll match the right hitch to your towing needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Fender Flares
                </h3>
                <p className="text-gray-600">
                  Pocket-style and smooth fender flares for wider tire clearance and aggressive appearance. Protect from road debris.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Wrench className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Lighting Upgrades
                </h3>
                <p className="text-gray-600">
                  LED light bars, fog lights, and auxiliary lighting. Improve visibility for off-road driving and work applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Delta */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Installation Matters
            </h2>
            <p className="text-lg text-gray-600">
              Proper installation is critical for safety, function, and warranty coverage. Our experienced technicians ensure every accessory is installed correctly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Expert Installation</h4>
              <p className="text-gray-600">Years of experience installing all types of truck accessories. We know the right way to do it and the shortcuts to avoid.</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Quality Products</h4>
              <p className="text-gray-600">We work with trusted brands known for durability and fit. Your accessories will look great and last for years.</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Warranty Protection</h4>
              <p className="text-gray-600">Many accessory warranties require professional installation. We provide documentation to protect your investment.</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Local Service</h4>
              <p className="text-gray-600">Support local business with 4 convenient locations across New Mexico and Arizona. We're here when you need us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Customize Your Truck?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Contact us to discuss your truck accessory needs. We'll help you choose the right products and schedule professional installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton 
              size="lg" 
              className="bg-red-600 text-white hover:bg-red-700 font-semibold" 
              testId="button-call-truck-footer"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </CallButton>
            <Button 
              size="lg" 
              variant="outline"
              className="font-semibold" 
              asChild
              data-testid="button-locations-truck"
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
