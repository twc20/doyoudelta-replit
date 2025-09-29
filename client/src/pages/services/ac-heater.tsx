import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Calendar, CheckCircle, Snowflake, Flame, Wind, Thermometer } from "lucide-react";
import { SEO } from "@/components/shared/seo";
import { CallButton } from "@/components/shared/location-selector-dialog";

export default function ACHeaterService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO
        title="AC & Heater Repair | Delta Tire"
        description="Professional air conditioning repair, heater service, climate control systems, and HVAC diagnostics. Expert automotive climate service in New Mexico & Arizona."
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            AC & Heater Repair
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
            Professional air conditioning repair, heater service, climate control systems, and complete HVAC diagnostics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold" 
              testId="button-call-ac-heater"
            />
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold" 
              asChild
              data-testid="button-schedule-ac-heater"
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
              Complete Climate Control Services
            </h2>
            <p className="text-lg text-gray-600">
              Stay comfortable year-round with Delta Tire's comprehensive HVAC services. From AC repair 
              to heater service, we keep your vehicle's climate control system working perfectly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-8">
                <Snowflake className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  AC Repair & Service
                </h3>
                <p className="text-gray-600">
                  Complete air conditioning diagnostics, repair, and maintenance. Stay cool in the hot 
                  Southwest summers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Flame className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Heater Repair
                </h3>
                <p className="text-gray-600">
                  Expert heater diagnostics and repair. Stay warm during cold mountain winters.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Wind className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Climate Control Systems
                </h3>
                <p className="text-gray-600">
                  Complete climate control system service including blower motors and control modules.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Thermometer className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Refrigerant Recharge
                </h3>
                <p className="text-gray-600">
                  Professional refrigerant service with proper recycling and EPA-compliant procedures.
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
              Expert HVAC Service
            </h2>
            <p className="text-lg text-gray-600">
              Your comfort matters. Trust Delta Tire's experienced technicians to diagnose and repair 
              your vehicle's climate control system correctly the first time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Diagnostics</h3>
                <p className="text-gray-600">
                  Advanced diagnostic equipment to quickly identify AC and heater problems, from simple 
                  refrigerant leaks to complex electrical issues.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">EPA Certified</h3>
                <p className="text-gray-600">
                  Proper refrigerant handling and EPA-compliant procedures for all AC service work.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">All Makes & Models</h3>
                <p className="text-gray-600">
                  Experience servicing all vehicle makes and models, from passenger cars to heavy-duty trucks.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Warranty Protection</h3>
                <p className="text-gray-600">
                  Comprehensive warranties on parts and labor. Your HVAC repairs are protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Common AC & Heater Problems
            </h2>
            <p className="text-lg text-gray-600">
              Recognizing these common climate control issues can help you get service before small problems become big repairs:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <Snowflake className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Air Conditioning Issues
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    AC blows warm air instead of cold
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Weak airflow from vents
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Strange smells when AC is running
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Unusual noises from AC compressor
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    AC cycles on and off frequently
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Water leaking inside vehicle
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Flame className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Heater Problems
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Heater blows cold air
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Windows fog up constantly
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Heater only works on high setting
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Sweet smell when heater is on
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Engine overheating
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Blower motor not working
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seasonal Tips */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Seasonal Service Recommendations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <Snowflake className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Summer AC Prep
                </h3>
                <p className="text-gray-600 mb-4">
                  Don't wait until it's 100° outside! Get your AC serviced in spring:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    AC performance test
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    Refrigerant level check
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    Compressor inspection
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    Cabin air filter replacement
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="p-8">
                <Flame className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Winter Heater Check
                </h3>
                <p className="text-gray-600 mb-4">
                  Mountain winters are cold! Prepare your heater in fall:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    Heater performance test
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    Coolant system inspection
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    Thermostat check
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    Blower motor inspection
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Comfortable Year-Round
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Schedule your AC or heater service today and experience the Delta Difference. Professional 
            climate control service at all 4 convenient locations across New Mexico & Arizona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold" 
              testId="button-cta-call-ac-heater"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </CallButton>
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold" 
              asChild
              data-testid="button-cta-schedule-ac-heater"
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
