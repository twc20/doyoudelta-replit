import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, ClipboardCheck, Users, DollarSign, Calendar, FileText, CheckCircle } from "lucide-react";

export default function Fleet() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Truck className="w-16 h-16 mx-auto mb-4" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Fleet Services for Business
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            Professional automotive services tailored for commercial vehicles and business fleets.
          </p>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Keep Your Fleet Running
            </h2>
            <p className="text-lg text-gray-600">
              From small business vehicles to large commercial fleets, Delta Tire provides comprehensive automotive 
              services designed to minimize downtime and maximize your business efficiency.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="p-8">
                <Calendar className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Priority Scheduling
                </h3>
                <p className="text-gray-600">
                  Fleet customers get priority scheduling to keep your business vehicles on the road when you need them.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <FileText className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Digital Inspections
                </h3>
                <p className="text-gray-600">
                  Receive detailed digital vehicle inspection reports with photos, accessible anytime on your phone or computer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <ClipboardCheck className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Fleet Maintenance Tracking
                </h3>
                <p className="text-gray-600">
                  We help track maintenance schedules across your entire fleet to prevent unexpected breakdowns.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <DollarSign className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Competitive Fleet Pricing
                </h3>
                <p className="text-gray-600">
                  Volume-based pricing options and business account billing to simplify your fleet management.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Employee Discounts
                </h3>
                <p className="text-gray-600">
                  Fleet customers can offer their employees discounts on personal vehicle services at Delta Tire.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Truck className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  All Vehicle Types
                </h3>
                <p className="text-gray-600">
                  From passenger cars to heavy-duty commercial trucks, we service all types of fleet vehicles.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Services Covered */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Complete Fleet Services
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tire Services</h4>
                  <p className="text-gray-600">Commercial tire sales, installation, repair, rotation, and balancing for all fleet vehicles.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Preventive Maintenance</h4>
                  <p className="text-gray-600">Oil changes, fluid services, filter replacements, and scheduled maintenance to prevent breakdowns.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Brake Services</h4>
                  <p className="text-gray-600">Brake inspections, pad and rotor replacement, and complete brake system repairs for safety.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Alignment & Suspension</h4>
                  <p className="text-gray-600">Wheel alignments and suspension repairs to extend tire life and improve vehicle handling.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Engine & Electrical</h4>
                  <p className="text-gray-600">Diagnostics, engine repairs, battery service, and electrical system troubleshooting.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Emergency Repairs</h4>
                  <p className="text-gray-600">Quick turnaround on urgent repairs to minimize vehicle downtime for your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Delta for Fleet */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Businesses Choose Delta Tire
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">30+</div>
              <div className="text-gray-900 font-semibold mb-2">Years of Experience</div>
              <p className="text-gray-600">Trusted by local businesses since 1995</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">4</div>
              <div className="text-gray-900 font-semibold mb-2">Convenient Locations</div>
              <p className="text-gray-600">Across New Mexico and Arizona</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">ASE</div>
              <div className="text-gray-900 font-semibold mb-2">Certified Technicians</div>
              <p className="text-gray-600">Expert service you can trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get Started with Fleet Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Contact us to discuss your fleet needs and learn about our business account options, 
            volume pricing, and dedicated fleet services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-red-600 text-white hover:bg-red-700 font-semibold" 
              asChild
              data-testid="button-contact-fleet"
            >
              <a href="/contact">Request Fleet Quote</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-semibold" 
              asChild
              data-testid="button-call-fleet"
            >
              <a href="tel:505-287-7946">Call: (505) 287-7946</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
