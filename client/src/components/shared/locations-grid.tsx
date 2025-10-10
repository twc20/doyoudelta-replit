import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const locations = [
  {
    name: "Grants",
    address: "833 E Sante Fe Ave",
    city: "Grants, NM 87020",
    phone: "(505) 287-7946",
    hours: "Monday - Friday: 7am - 5pm",
    mapsUrl: "https://maps.google.com/maps?q=833+E+Sante+Fe+Ave,+Grants+NM+87020",
    pageUrl: "/locations/grants"
  },
  {
    name: "Gallup", 
    address: "501 US-491",
    city: "Gallup, NM 87301",
    phone: "(505) 722-2945",
    hours: "Monday - Saturday: 8am - 5pm",
    mapsUrl: "https://maps.google.com/maps?q=501+US-491,+Gallup,+NM+87301",
    pageUrl: "/locations/gallup"
  },
  {
    name: "Farmington",
    address: "4650 E Main St", 
    city: "Farmington, NM 87402",
    phone: "(505) 325-4500",
    hours: "Monday - Saturday: 8am - 5pm",
    mapsUrl: "https://maps.google.com/maps?q=4650+E+Main+St,+Farmington,+NM+87402",
    pageUrl: "/locations/farmington"
  },
  {
    name: "Eagar",
    address: "50 W Central Ave",
    city: "Eagar, AZ 85925", 
    phone: "(928) 333-3730",
    hours: "Monday - Friday: 8am - 5pm",
    mapsUrl: "https://maps.google.com/maps?q=50+W+Central+Ave,+Eagar,+AZ+85925",
    pageUrl: "/locations/eagar"
  }
];

export function LocationsGrid() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            4 Convenient Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional automotive services across the Four Corners region. Find the location nearest you for expert tire service and auto repair.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{location.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {location.address}<br/>
                    {location.city}
                  </p>
                  <p className="text-red-600 font-medium">{location.phone}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-1">Hours:</h4>
                  <p className="text-gray-600 text-sm">{location.hours}</p>
                </div>
                <div className="space-y-2">
                  <Link href={location.pageUrl}>
                    <Button 
                      size="sm" 
                      className="w-full bg-red-600 text-white hover:bg-red-700" 
                      data-testid={`button-view-${location.name.toLowerCase()}`}
                    >
                      View Location Page
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1" 
                      asChild
                      data-testid={`button-call-${location.name.toLowerCase()}`}
                    >
                      <a href={`tel:${location.phone}`}>
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1" 
                      asChild
                      data-testid={`button-directions-${location.name.toLowerCase()}`}
                    >
                      <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer">
                        <MapPin className="w-4 h-4 mr-1" />
                        Directions
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
