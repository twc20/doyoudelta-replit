import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Shield, CheckCircle, Clock, MapPin, Wrench, Car, AlertCircle } from "lucide-react";
import { SEO } from "@/components/shared/seo";

export default function TireProsWarranty() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO
        title="Tire Pros Warranty & Roadside Assistance | Delta Tire"
        description="Industry-leading warranty package with free 24/7 roadside assistance. Nationwide Service Protection Plan honored at 82,000+ locations. Delta Tire customers get protected!"
        keywords="tire warranty, roadside assistance, service protection, tire pros, nationwide warranty, Delta Tire"
        canonical="https://deltatire.com/tire-pros-warranty"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-20 h-20 mx-auto mb-6 text-white" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Nobody Protects You Like the Pros!
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto mb-8">
            Enjoy the confidence and peace of mind that come with knowing you're protected - wherever you go. Get the industry's strongest warranty package that includes free roadside assistance.
          </p>
          <Badge className="bg-white text-red-600 text-lg px-6 py-3 mb-8">
            82,000+ Service Centers Nationwide
          </Badge>
          <p className="text-lg text-red-100 max-w-3xl mx-auto">
            Our Nationwide Warranties cover passenger and light truck tires and all services and products purchased at our stores. As a Tire Pros franchisee, we're part of the largest network of elite, independent tire dealers with an industry-leading warranty package to protect your family.
          </p>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="bg-red-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <Phone className="w-8 h-8" />
              <div className="text-left">
                <p className="text-sm font-semibold">Need Roadside Assistance Now?</p>
                <p className="text-2xl font-bold">1-844-281-0747</p>
              </div>
            </div>
            <Badge className="bg-white text-red-600 text-lg px-4 py-2">
              <Clock className="w-4 h-4 mr-2 inline" />
              Available 24/7
            </Badge>
          </div>
        </div>
      </section>

      {/* Nationwide Service Protection Plan */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nationwide Service Protection Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              Every retail customer of Tire Pros, who has had work performed at one of our stores, is protected! We promise the service work we perform on your vehicle will be done right.
            </p>
            <Badge variant="outline" className="text-base px-4 py-2">
              24 months or 24,000 miles coverage
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Brake System</h3>
                <p className="text-gray-600">Including ABS components</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Steering/Suspension</h3>
                <p className="text-gray-600">Complete system coverage</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wheel Bearings</h3>
                <p className="text-gray-600">CV joints/U-joints and driveshafts</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Exhaust System</h3>
                <p className="text-gray-600">Complete exhaust coverage</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ignition System</h3>
                <p className="text-gray-600">Including modules and sensors</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fuel System</h3>
                <p className="text-gray-600">Complete fuel system protection</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Electrical System</h3>
                <p className="text-gray-600">Starting and charging systems</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Climate Control</h3>
                <p className="text-gray-600">A/C, heating and climate systems</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Alignments & Balance</h3>
                <p className="text-gray-600">6 months or 6,000 miles coverage</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-2">Honored at Over 82,000 Service Centers</p>
                <p className="text-gray-700">
                  Our Service Protection Plan covers parts and labor, honored at over 82,000 service centers across the continent - not just the 650+ Tire Pros stores nationwide. Some restrictions apply. Also known as the Coast to Coast Plan in some areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Roadside Assistance */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Clock className="w-16 h-16 mx-auto mb-6 text-red-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              24/7 Roadside Assistance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every purchase you make at Delta Tire - from tires to repairs - comes with free Roadside Assistance 24 hours a day, 7 days a week. We've always got your back!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">What's Included:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Towing Service</p>
                      <p className="text-gray-600 text-sm">We'll tow you to a nearby service station</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Lockout Service</p>
                      <p className="text-gray-600 text-sm">Locked your keys in the car? We'll help</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Flat Tire Assistance</p>
                      <p className="text-gray-600 text-sm">We'll help you change your flat tire</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Jump Starts</p>
                      <p className="text-gray-600 text-sm">Dead battery? We'll get you going</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Delivery Service</p>
                      <p className="text-gray-600 text-sm">Fuel, oil, fluid, and water delivery</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-600 to-red-700 text-white">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <Phone className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Need Help Right Now?</h3>
                <p className="text-red-100 mb-6">
                  No matter where you are or where you're traveling to, we've got you covered with roadside assistance. On a cold morning when your car battery is dead or when you're in an unfamiliar area and run out of gas, call our hotline for immediate assistance.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg w-full"
                  asChild
                  data-testid="button-call-roadside"
                >
                  <a href="tel:1-844-281-0747">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 1-844-281-0747
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-600">
              Some restrictions apply. Please contact your local Delta Tire store for additional information.
            </p>
          </div>
        </div>
      </section>

      {/* Tire Protection Plan */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 mx-auto mb-6 text-red-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tire Protection Plan
              </h2>
              <p className="text-lg text-gray-600">
                Available for a small fee with any tire purchase, for a little extra peace of mind.
              </p>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <Badge className="mb-6 text-base px-4 py-2">
                  36 Months Until 2/32" Tread Depth
                </Badge>
                <p className="text-gray-700 mb-6">
                  Comprehensive tire coverage honored at 82,000 service centers nationwide.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Includes:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Tire replacement for 36 months</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Flat repairs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Tire rotations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Tire inspections</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Tire pressure checks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Roadside assistance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Road hazard warranty</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Treadwear warranty</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mt-6">
                  *Some exclusions apply. See your Delta Tire dealer for full details.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* $350 Promise */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-green-500 text-white text-2xl px-8 py-4 mb-8 font-bold">
            $350 Promise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We Stand Behind Our Warranty
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We feel so strongly about our nationwide warranty package that we're willing to back it up with $350.
          </p>
          <Card className="bg-white text-gray-900">
            <CardContent className="p-8">
              <p className="text-lg mb-4">
                If your vehicle is disabled as a result of failure under our warranty, and our warranty administrator can't find a facility to honor the warranty within 25 miles of your location, you'll qualify for a $350 claim.
              </p>
              <p className="text-gray-600 mb-6">
                Ask your local Delta Tire store for details and claim forms.
              </p>
              <div className="border-t pt-6">
                <p className="font-semibold text-gray-900 mb-2">Submit Warranty Claim Documents to:</p>
                <div className="text-gray-700">
                  <p>Warranty Claim Administrator</p>
                  <p>P.O. BOX 17659</p>
                  <p>GOLDEN, CO 80402-6027</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact & Registration CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Questions About Your Warranty?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team at Delta Tire is here to help you understand all the benefits of your Tire Pros warranty coverage.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Warranty Service
                </h3>
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 w-full"
                  asChild
                  data-testid="button-call-warranty"
                >
                  <a href="tel:1-844-281-0747">
                    Call 1-844-281-0747
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Visit a Location
                </h3>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full"
                  asChild
                  data-testid="button-locations"
                >
                  <a href="/locations">
                    Find Your Nearest Store
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
