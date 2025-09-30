import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Calendar, CheckCircle, Gauge, AlertTriangle, Car } from "lucide-react";
import { CallButton } from "@/components/shared/location-selector-dialog";
import { SEO } from "@/components/shared/seo";

export default function AlignmentService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO
        title="Wheel Alignment Grants Gallup Farmington NM | Delta Tire"
        description="Precision wheel alignment extends tire life & improves handling. Car pulling? Uneven wear? We fix it in Grants, Gallup, Farmington NM & Eagar AZ. Book today!"
        keywords="wheel alignment, tire alignment, suspension, alignment service, Grants, Gallup, Farmington"
        canonical="https://deltatire.com/services/alignment"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Wheel Alignment Service
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
            Precision wheel alignment for better tire life, improved handling, and safer driving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold" 
              testId="button-call-alignment"
            />
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold" 
              asChild
              data-testid="button-schedule-alignment"
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
              Professional Wheel Alignment
            </h2>
            <p className="text-lg text-gray-600">
              Proper wheel alignment is crucial for tire longevity, fuel efficiency, and vehicle handling. Our state-of-the-art alignment equipment ensures precise adjustments to manufacturer specifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <Gauge className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Computerized Alignment
                </h3>
                <p className="text-gray-600">
                  State-of-the-art computerized alignment system measures camber, caster, and toe angles with precision accuracy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  4-Wheel Alignment
                </h3>
                <p className="text-gray-600">
                  Complete four-wheel alignment service for all vehicle types. Front-wheel and thrust angle alignment also available.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Car className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Suspension Inspection
                </h3>
                <p className="text-gray-600">
                  Thorough inspection of suspension components. Worn parts prevent proper alignment and must be addressed first.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Benefits of Proper Alignment
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Extended Tire Life</h4>
              <p className="text-gray-600">Proper alignment prevents uneven tire wear, helping your tires last thousands of miles longer and saving you money.</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Improved Fuel Economy</h4>
              <p className="text-gray-600">Misaligned wheels create rolling resistance that wastes fuel. Proper alignment improves gas mileage.</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Better Handling</h4>
              <p className="text-gray-600">Correct alignment ensures your vehicle tracks straight and handles predictably, especially at highway speeds.</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Safer Driving</h4>
              <p className="text-gray-600">Proper alignment contributes to better steering response and control, making your vehicle safer to drive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Signs You Need an Alignment
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Vehicle Pulls to One Side</h4>
                <p className="text-gray-600">If your vehicle drifts left or right on a straight road, misalignment is likely the cause.</p>
              </div>
            </div>

            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Off-Center Steering Wheel</h4>
                <p className="text-gray-600">When driving straight, your steering wheel should be centered. If it's not, you need an alignment.</p>
              </div>
            </div>

            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Uneven Tire Wear</h4>
                <p className="text-gray-600">Wearing on the inside or outside edges of tires indicates camber misalignment that needs correction.</p>
              </div>
            </div>

            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Steering Wheel Vibration</h4>
                <p className="text-gray-600">Vibration while driving can indicate alignment issues or unbalanced tires needing service.</p>
              </div>
            </div>

            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">After Hitting a Pothole or Curb</h4>
                <p className="text-gray-600">Impact from potholes or curbs can knock your alignment out. Get checked after any significant impact.</p>
              </div>
            </div>

            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">After New Tire Installation</h4>
                <p className="text-gray-600">Always get an alignment with new tires to maximize their lifespan and performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Schedule Your Alignment Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Protect your tire investment and improve your vehicle's performance with professional wheel alignment service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton 
              size="lg" 
              className="bg-red-600 text-white hover:bg-red-700 font-semibold" 
              testId="button-call-alignment-footer"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </CallButton>
            <Button 
              size="lg" 
              variant="outline"
              className="font-semibold" 
              asChild
              data-testid="button-locations-alignment"
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
