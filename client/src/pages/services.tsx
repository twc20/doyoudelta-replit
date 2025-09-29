import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ServicesGrid } from "@/components/shared/services-grid";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Complete Automotive Services
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
            Professional tire service, auto repair, and maintenance from ASE certified technicians across New Mexico and Arizona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold" 
              asChild
              data-testid="button-call-services"
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
              data-testid="button-schedule-services"
            >
              <a href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Service
              </a>
            </Button>
          </div>
        </div>
      </section>

      <ServicesGrid />

      {/* Why Choose Delta Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Delta Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not the cheapest—we add the most value. Every service is performed with precision, transparency, and our commitment to treating your vehicle like our own.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
