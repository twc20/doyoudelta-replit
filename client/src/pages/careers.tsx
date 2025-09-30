import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, TrendingUp, Award, Phone, Mail } from "lucide-react";
import { SEO } from "@/components/shared/seo";

export default function Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO
        title="Careers Join Delta Tire Team Grants Gallup Farmington NM"
        description="Join Delta Tire! Hiring automotive technicians & service pros in Grants, Gallup, Farmington NM & Eagar AZ. Competitive pay, benefits, positive environment. Apply now!"
        keywords="automotive careers, technician jobs, auto repair jobs, tire technician, New Mexico jobs, Arizona jobs"
        canonical="https://deltatire.com/careers"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Come Work With Us
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            Join a team that values quality, integrity, and professional growth. Experience the Delta Difference from the inside.
          </p>
        </div>
      </section>

      {/* Why Work at Delta */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work at Delta Tire?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We invest in our team because we know great service starts with great people.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Pay</h3>
                <p className="text-gray-600">
                  Fair compensation that rewards skill and experience
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Great Benefits</h3>
                <p className="text-gray-600">
                  Health insurance, paid time off, and employee discounts
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Training & Growth</h3>
                <p className="text-gray-600">
                  Ongoing training and opportunities for advancement
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Environment</h3>
                <p className="text-gray-600">
                  Work with professionals who share your commitment to excellence
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're always looking for talented technicians and service professionals to join our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Automotive Technicians</h3>
                <p className="text-gray-600 mb-6">
                  We're seeking skilled technicians who are passionate about quality work and customer service. 
                  Experience with diagnostics, repair, and maintenance preferred.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Competitive hourly wage</li>
                  <li>• Full-time and part-time positions</li>
                  <li>• Multiple locations available</li>
                  <li>• Benefits package included</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Advisors</h3>
                <p className="text-gray-600 mb-6">
                  Join our front-line team helping customers with their automotive needs. 
                  Strong communication skills and automotive knowledge preferred.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Customer-facing role</li>
                  <li>• Commission opportunities</li>
                  <li>• Training provided</li>
                  <li>• Career advancement potential</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Join the Team?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Contact us to learn more about current opportunities or submit your resume.
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span className="text-lg">Call:</span>
                  <a href="tel:505-287-7946" className="text-lg font-semibold text-red-600 hover:text-red-700">
                    (505) 287-7946
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-600" />
                  <span className="text-lg">Email:</span>
                  <a 
                    href="mailto:grantsdeltatire@gmail.com" 
                    className="text-lg font-semibold text-red-600 hover:text-red-700"
                    data-testid="link-careers-email"
                  >
                    grantsdeltatire@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-gray-600 mb-4">
                  Please include your resume and a brief description of your experience.
                </p>
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white"
                  asChild
                  data-testid="button-contact-us"
                >
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-gray-600">
            <p className="text-lg">
              <strong>Delta Tire is an equal opportunity employer.</strong>
            </p>
            <p className="mt-2">
              We value diversity and are committed to creating an inclusive environment for all employees.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
