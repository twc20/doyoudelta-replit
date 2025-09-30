import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Star, Shield, Wrench } from "lucide-react";
import { SEO } from "@/components/shared/seo";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO
        title="About Delta Tire | 10 Years Serving Four Corners NM & AZ"
        description="Delta Tire: 10 years of trusted auto repair in NM & AZ. We treat your car like our car. Transparent service, expert technicians, 4 locations. Do You Delta?"
        keywords="about Delta Tire, automotive service, Four Corners, New Mexico, Arizona, car repair, trusted mechanic"
        canonical="https://deltatire.com/about"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            About Delta Tire
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            Do You Delta? We are the difference in automotive service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Since 2015, Delta Tire has been serving the Four Corners region with professional automotive services. 
              Our name represents the mathematical symbol for change and difference—because we believe in making a positive 
              difference in every customer interaction.
            </p>
            <p className="text-lg text-gray-600">
              With 4 convenient locations across New Mexico and Arizona, we've built our reputation on transparency, 
              quality workmanship, and treating every vehicle as if it were our own.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">We Take the Time</h3>
              <p className="text-gray-600">No rushing, no shortcuts. We invest the time needed to do the job right the first time.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">We Make the Effort</h3>
              <p className="text-gray-600">Going above and beyond isn't extra—it's standard. We put in the effort to exceed expectations.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">We Are the Difference</h3>
              <p className="text-gray-600">Delta means difference, and that difference makes us the most trusted automotive service provider.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Delta Tire?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not the cheapest—we add the most value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Award className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Technicians</h3>
              <p className="text-gray-600">Our skilled technicians receive ongoing training to stay current with the latest automotive technology.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Users className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Honest Service</h3>
              <p className="text-gray-600">Transparent pricing and honest recommendations. We only suggest services your vehicle actually needs.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Shield className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">We stand behind our work with comprehensive warranties and guarantee customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Owner */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet the Owner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from Tannin about our commitment to treating your car like our car.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/dU9pTRRDAkc"
                  title="Meet Tannin - Delta Tire Owner"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  data-testid="video-owner-about"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Delta Difference?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Visit one of our 4 locations or call us today for professional automotive service.
          </p>
          <Button 
            size="lg" 
            className="bg-red-600 text-white hover:bg-red-700 font-semibold" 
            asChild
            data-testid="button-contact-about"
          >
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
