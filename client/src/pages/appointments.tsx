import { useState } from "react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, MapPin, Wrench, Phone, Clock, CheckCircle } from "lucide-react";
import { SEO } from "@/components/shared/seo";

// Location data with phone numbers
const locations = [
  { id: "grants", name: "Grants, NM", phone: "5052877946", displayPhone: "(505) 287-7946" },
  { id: "gallup", name: "Gallup, NM", phone: "5057222945", displayPhone: "(505) 722-2945" },
  { id: "farmington", name: "Farmington, NM", phone: "5053254500", displayPhone: "(505) 325-4500" },
  { id: "eagar", name: "Eagar, AZ", phone: "9283333730", displayPhone: "(928) 333-3730" }
];

// Service options
const services = [
  { id: "tire-sales", name: "Tire Sales & Installation" },
  { id: "tire-repair", name: "Tire Repair" },
  { id: "oil-change", name: "Oil Change" },
  { id: "brake-service", name: "Brake Service" },
  { id: "wheel-alignment", name: "Wheel Alignment" },
  { id: "battery", name: "Battery Service" },
  { id: "ac-service", name: "AC/Heater Service" },
  { id: "inspection", name: "Vehicle Inspection" },
  { id: "general-repair", name: "General Auto Repair" },
  { id: "truck-accessories", name: "Truck Accessories" },
  { id: "other", name: "Other" }
];

export default function Appointments() {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");

  const handleBookAppointment = () => {
    if (!selectedLocation || !selectedService) {
      return;
    }

    const location = locations.find(loc => loc.id === selectedLocation);
    const service = services.find(svc => svc.id === selectedService);

    if (!location || !service) {
      return;
    }

    // Create SMS message
    const message = `Hey, I was on your website and want to schedule an appointment for ${service.name} at your ${location.name} location.`;
    const encodedMessage = encodeURIComponent(message);
    
    // Create SMS link - format: sms:phone?body=message
    const smsLink = `sms:${location.phone}?&body=${encodedMessage}`;
    
    // Open SMS app
    window.location.href = smsLink;
  };

  const isFormComplete = selectedLocation && selectedService;
  const selectedLocationData = locations.find(loc => loc.id === selectedLocation);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO
        title="Book Appointment Grants Gallup Farmington NM | Delta Tire"
        description="Schedule auto service at Delta Tire. Text us to book! Choose location & service. Quick appointment booking in Grants, Gallup, Farmington NM & Eagar AZ."
        keywords="appointment booking, schedule service, tire appointment, auto repair booking, Delta Tire"
        canonical="https://deltatire.com/appointments"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="w-16 h-16 mx-auto mb-6 text-red-200" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Book Your Appointment via Text
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            Quick and easy - choose your location and service, then text us directly!
          </p>
        </div>
      </section>

      {/* Main Booking Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold mb-4">
                Schedule Your Service
              </CardTitle>
              <p className="text-gray-600 text-lg">
                Select your preferred location and service below, then we'll open your phone's messaging app with a pre-written message ready to send!
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Location Selection */}
              <div className="space-y-3">
                <label className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-600" />
                  Select Location *
                </label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger 
                    className="h-14 text-lg border-2 hover:border-red-600 transition-colors"
                    data-testid="select-sms-location"
                  >
                    <SelectValue placeholder="Choose your nearest Delta Tire location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem 
                        key={location.id} 
                        value={location.id}
                        className="text-lg py-3"
                      >
                        {location.name} - {location.displayPhone}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Service Selection */}
              <div className="space-y-3">
                <label className="text-lg font-semibold flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-red-600" />
                  Select Service *
                </label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger 
                    className="h-14 text-lg border-2 hover:border-red-600 transition-colors"
                    data-testid="select-sms-service"
                  >
                    <SelectValue placeholder="What service do you need?" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem 
                        key={service.id} 
                        value={service.id}
                        className="text-lg py-3"
                      >
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Book Appointment Button */}
              <div className="pt-4">
                <Button
                  onClick={handleBookAppointment}
                  disabled={!isFormComplete}
                  size="lg"
                  className="w-full h-16 text-xl bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                  data-testid="button-send-sms"
                >
                  <MessageSquare className="w-6 h-6 mr-3" />
                  {isFormComplete ? "Send Text Message" : "Select Location & Service"}
                </Button>
                {selectedLocationData && isFormComplete && (
                  <p className="text-sm text-gray-600 text-center mt-3" data-testid="text-phone-info">
                    This will open your messaging app to text {selectedLocationData.displayPhone}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="mt-8 bg-gradient-to-br from-red-50 to-white border-red-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                How It Works
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Choose Location & Service</h4>
                  <p className="text-gray-600">Select your nearest location and the service you need</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Send Text Message</h4>
                  <p className="text-gray-600">Your messaging app opens with a pre-written message ready to send</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h4 className="font-semibold text-lg mb-2">We'll Respond Quickly</h4>
                  <p className="text-gray-600">Our team will text you back to confirm your appointment</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Fast & Convenient</h3>
                <p className="text-gray-600">
                  Text messaging is quick, easy, and lets you communicate on your schedule
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Same-Day Service Available</h3>
                <p className="text-gray-600">
                  We often have same-day appointments available - just let us know your needs!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Card */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-600" />
                Prefer to Call?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {locations.map((location) => (
                  <div key={location.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">{location.name}</span>
                    <a 
                      href={`tel:${location.phone}`}
                      className="text-red-600 font-bold hover:text-red-700 transition-colors"
                      data-testid={`link-call-${location.id}`}
                    >
                      {location.displayPhone}
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
