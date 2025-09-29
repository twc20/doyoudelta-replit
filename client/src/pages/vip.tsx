import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, DollarSign, Heart, CheckCircle } from "lucide-react";

export default function VIP() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Trophy className="w-16 h-16 mx-auto mb-4" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            VIP School Fundraising Program
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            Support your school while getting quality automotive service.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Give Back to Your Community
            </h2>
            <p className="text-lg text-gray-600">
              Delta Tire's VIP Program helps local schools and organizations raise funds while providing 
              our customers with exceptional automotive service. It's a win-win for everyone!
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              How It Works
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    1. Join the Program
                  </h4>
                  <p className="text-gray-600">
                    Sign up your school or organization to participate in our VIP fundraising program.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    2. Share with Supporters
                  </h4>
                  <p className="text-gray-600">
                    Distribute VIP cards to parents, teachers, and community members who support your cause.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    3. Earn Funds
                  </h4>
                  <p className="text-gray-600">
                    Your organization receives a percentage of sales when VIP card holders visit Delta Tire.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Program Benefits
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Easy Fundraising</h4>
                  <p className="text-gray-600">No upfront costs, no selling products. Supporters just use their VIP cards when getting automotive service.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Year-Round Support</h4>
                  <p className="text-gray-600">Unlike one-time fundraisers, VIP cards can be used all year long for ongoing fundraising support.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Quality Service</h4>
                  <p className="text-gray-600">Supporters receive the same professional, transparent automotive service Delta Tire is known for.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Community Impact</h4>
                  <p className="text-gray-600">Keep fundraising dollars local while supporting schools and organizations in our Four Corners community.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Simple Tracking</h4>
                  <p className="text-gray-600">We handle all the tracking and reporting, making it easy to see how much your organization has earned.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">All Services Included</h4>
                  <p className="text-gray-600">VIP cards apply to all our automotive services—tires, oil changes, brakes, repairs, and more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Start Fundraising with Delta Tire Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Interested in enrolling your school or organization in our VIP program? 
            Contact us to learn more about how we can help you reach your fundraising goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-red-600 text-white hover:bg-red-700 font-semibold" 
              asChild
              data-testid="button-contact-vip"
            >
              <a href="/contact">Contact Us About VIP</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-semibold" 
              asChild
              data-testid="button-call-vip"
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
