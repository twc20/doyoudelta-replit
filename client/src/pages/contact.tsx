import { useState } from "react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, MessageSquare, Clock } from "lucide-react";
import { LocationSelectorDialog } from "@/components/shared/location-selector-dialog";
import { Link } from "wouter";
import { SEO } from "@/components/shared/seo";

export default function Contact() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO
        title="Contact Delta Tire | Grants Gallup Farmington NM Eagar AZ"
        description="Contact Delta Tire for auto repair & tire service. Call, text, or visit us in Grants, Gallup, Farmington NM or Eagar AZ. Get answers to your automotive questions."
        keywords="contact Delta Tire, auto repair questions, tire service, phone numbers, hours, locations"
        canonical="https://deltatire.com/contact"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Contact Delta Tire
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            Have questions? Need service? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text a Location */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Text Us Now
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Select your nearest location below to send us a text message. We'll respond as quickly as possible.
            </p>
            <Button
              size="lg"
              className="bg-red-600 text-white hover:bg-red-700 px-8 py-6 text-lg"
              onClick={() => setDialogOpen(true)}
              data-testid="button-text-location"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Choose Location & Text
            </Button>
          </div>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2" data-testid="heading-phone">Call Us</h3>
                    <p className="text-gray-600" data-testid="phone-grants">Grants: (505) 287-7946</p>
                    <p className="text-gray-600" data-testid="phone-gallup">Gallup: (505) 722-2945</p>
                    <p className="text-gray-600" data-testid="phone-farmington">Farmington: (505) 325-4500</p>
                    <p className="text-gray-600" data-testid="phone-eagar">Eagar: (928) 333-3730</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-gray-600 mb-2">4 Locations across NM & AZ</p>
                    <Button variant="outline" size="sm" asChild data-testid="button-view-locations">
                      <Link href="/locations">View All Locations</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600" data-testid="hours-weekday">Monday - Friday: 7am - 5pm</p>
                    <p className="text-gray-600" data-testid="hours-saturday">Saturday: 8am - 5pm (select locations)</p>
                    <p className="text-gray-600" data-testid="hours-sunday">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <MessageSquare className="w-6 h-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Schedule Service</h3>
                    <p className="text-gray-600 mb-3">Need an appointment?</p>
                    <Button variant="outline" size="sm" asChild data-testid="button-view-appointments">
                      <Link href="/appointments">Book Online</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <LocationSelectorDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}
