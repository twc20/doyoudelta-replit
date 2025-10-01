import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle } from "lucide-react";
import { SEO } from "@/components/shared/seo";

export default function TireProsWarranty() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Tire Pros Nationwide Warranty | Delta Tire"
        description="Industry-leading warranty package with free 24/7 roadside assistance. Nationwide Service Protection Plan honored at 82,000+ locations. Nobody protects you like the Pros!"
        keywords="tire warranty, roadside assistance, service protection, tire pros, nationwide warranty, Delta Tire"
        canonical="https://deltatire.com/tire-pros-warranty"
      />
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] flex items-center justify-center text-center bg-gray-900">
        <div className="absolute inset-0 opacity-40">
          <div className="w-full h-full bg-gradient-to-r from-gray-900 to-gray-700"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Tire Pros Nationwide Warranty
          </h1>
        </div>
      </section>

      {/* Nobody Protects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#e31837' }}>
            Nobody Protects You Like the Pros!
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Enjoy the confidence and peace of mind that come with knowing you're protected - wherever you go. Get the industry's strongest warranty package that includes free roadside assistance. Our Nationwide Warranties cover passenger and light truck tires and all services and products purchased at our stores.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            No matter how strong we back the products and services we deliver, tires and vehicles will inevitably fail. That's why you need a true professional and a trusting partner with a warranty package that's simple, hassle-free and honored at over 82,000 locations.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Nobody protects you like the Pros. We are the largest network of elite, independent tire dealers with an industry-leading warranty package to protect your family.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm inline-block">
            <p className="font-bold mb-2" style={{ color: '#e31837' }}>Need Roadside Assistance now?</p>
            <p className="text-gray-700 mb-3">Call us 24/7: <a href="tel:1-844-281-0747" className="font-bold hover:underline" style={{ color: '#1976d2' }}>1-844-281-0747</a></p>
          </div>
        </div>
      </section>

      {/* Nationwide Service Protection Plan */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nationwide Service Protection Plan
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Every retail customer of Tire Pros, who has had work performed at one of our stores, is protected! We promise the service work we perform on your vehicle will be done right. Our Service Protection Plan covers parts and labor for the below services, for 24 months or 24,000 miles, all honored at over 82,000 service centers across the continent - not just the 650+ Tire Pros stores nationwide.
              </p>
              <p className="font-semibold text-gray-900 mb-4">Services Included:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Brake system, including ABS</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Steering/suspension system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Wheel bearings, CV joints/U-joints and driveshafts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Exhaust system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Ignition system, including modules and sensors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Fuel system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Electrical system, including the starting and charging systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Air conditioning, heating and climate control systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Alignments and wheel balance (6 months or 6,000 miles)</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-6 italic">
                Some restrictions apply. Also known as the Coast to Coast Plan in some areas.
              </p>
              <p className="mt-4 font-bold" style={{ color: '#e31837' }}>
                For Warranty Service call: <a href="tel:1-844-281-0747" className="hover:underline" style={{ color: '#1976d2' }}>1-844-281-0747</a>
              </p>
            </div>
            <div className="order-first md:order-last">
              <img 
                src="/images/mechanic-service.jpg" 
                alt="Professional mechanic providing service" 
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Roadside Assistance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/roadside-assistance.jpg" 
                alt="Roadside assistance tire service" 
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                24/7 Roadside Assistance
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Every purchase you make at Delta Tire - from tires to repairs - comes with free Roadside Assistance 24 hours a day, 7 days a week. We've always got your back!
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                No matter where you are or where you're traveling to, we've got you covered with roadside assistance. If it's not a situation we can fix on the spot, we'll tow you to a nearby service station so you can get the help you need. On a cold morning when your car battery is dead or when you're in an unfamiliar area and run out of gas, call our hotline for immediate 24-hour roadside assistance.
              </p>
              <p className="font-semibold text-gray-900 mb-4">Includes:</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Towing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Lockout service</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Flat tire changing assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Jump starts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Fuel, oil, fluid, and water delivery service</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mb-4 italic">
                Some restrictions apply. Please contact your local Delta Tire store for additional information.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="font-bold mb-2" style={{ color: '#e31837' }}>Need Roadside Assistance now?</p>
                <p className="text-gray-700 mb-4">Call us 24/7: <a href="tel:1-844-281-0747" className="font-bold hover:underline" style={{ color: '#1976d2' }}>1-844-281-0747</a></p>
                <Button 
                  className="w-full"
                  style={{ backgroundColor: '#e31837' }}
                  asChild
                  data-testid="button-call-roadside"
                >
                  <a href="tel:1-844-281-0747">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tire Protection Plan */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tire Protection Plan
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Available for a small fee with any tire purchase, for a little extra peace of mind.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Comprehensive tire coverage honored at 82,000 service centers nationwide.
              </p>
              <p className="font-semibold text-gray-900 mb-4">Includes*:</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Tire replacement for 36 months until 2/32" tread depth</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Flat repairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Tire rotations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Tire inspections</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Tire pressure checks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Roadside assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#e31837' }} />
                  <span className="text-gray-700">Road hazard and treadwear warranty</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                *Some exclusions apply. See your Delta Tire dealer for full details.
              </p>
              <p className="mt-4 font-bold" style={{ color: '#e31837' }}>
                For Warranty Service call: <a href="tel:1-844-281-0747" className="hover:underline" style={{ color: '#1976d2' }}>1-844-281-0747</a>
              </p>
            </div>
            <div className="order-first md:order-last">
              <img 
                src="/images/tire-service.jpg" 
                alt="Professional tire service and installation" 
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* $350 Promise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Tire Pros $350 Promise
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-6 leading-relaxed">
              We feel so strongly about our nationwide warranty package that we're willing to back it up with $350. If your vehicle is disabled as a result of failure under our warranty, and our warranty administrator can't find a facility to honor the warranty within 25 miles of your location, you'll qualify for a $350 claim. *
            </p>
            <p className="text-gray-700 mb-6">
              Ask your local Delta Tire store for details and claim forms.
            </p>
            <p className="font-bold mb-2" style={{ color: '#e31837' }}>
              For Warranty Service or Roadside Assistance call:
            </p>
            <p className="text-gray-700 mb-6">
              <a href="tel:1-844-281-0747" className="font-bold text-xl hover:underline" style={{ color: '#1976d2' }}>1-844-281-0747</a>
            </p>
            <div className="border-t pt-6">
              <p className="font-semibold text-gray-900 mb-2">Submit Warranty Claim Documents to:</p>
              <div className="text-gray-700">
                <p>Warranty Claim Administrator</p>
                <p>P.O. BOX 17659</p>
                <p>GOLDEN, CO 80402-6027</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-6 italic">
              *Valid at Tire Pros locations only. Some exclusions apply.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Visit Delta Tire Today
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Experience the peace of mind that comes with Tire Pros warranty protection. Visit any of our four locations across New Mexico and Arizona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg"
              style={{ backgroundColor: '#e31837' }}
              asChild
              data-testid="button-locations"
            >
              <a href="/locations">
                Find Your Nearest Store
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg"
              asChild
              data-testid="button-appointments"
            >
              <a href="/appointments">
                Book an Appointment
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
