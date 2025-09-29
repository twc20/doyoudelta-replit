import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Wrench, Droplet, Disc, Ruler, Truck, Battery, Thermometer, ArrowRight } from "lucide-react";
import Link from 'next/link';

const services = [
  {
    icon: Car,
    title: "Tire & Wheel Sales/Service",
    description: "Professional tire installation, mounting, balancing, and repair services.",
    href: "/services/tires"
  },
  {
    icon: Wrench,
    title: "Auto Repair", 
    description: "Engine diagnostics, transmission, cooling systems, and comprehensive repairs.",
    href: "/services/auto-repair"
  },
  {
    icon: Droplet,
    title: "Oil Change & Maintenance",
    description: "Quick service oil changes and scheduled maintenance programs.",
    href: "/services/oil-change"
  },
  {
    icon: Disc,
    title: "Brake Repair",
    description: "Brake pads, rotors, fluid service, and comprehensive inspections.",
    href: "/services/brakes"
  },
  {
    icon: Ruler,
    title: "Wheel Alignment & Suspension",
    description: "Precision alignments, shocks, struts, and suspension repairs.",
    href: "/services/alignment"
  },
  {
    icon: Truck,
    title: "Truck Accessories",
    description: "Lift kits, brush guards, running boards, and custom accessories.",
    href: "/services/truck-accessories"
  },
  {
    icon: Battery,
    title: "Battery & Electrical",
    description: "Battery replacement, alternator, starter, and electrical diagnostics.",
    href: "/services/electrical"
  },
  {
    icon: Thermometer,
    title: "AC & Heater Repair",
    description: "Climate control systems, HVAC diagnostics, and repairs.",
    href: "/services/ac-heater"
  }
];

export function ServicesGrid() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Automotive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From tire installation to complex engine repairs, our ASE certified technicians provide comprehensive automotive care across all service categories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="service-card bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link 
                    href={service.href} 
                    className="text-red-600 hover:text-red-700 font-medium text-sm inline-flex items-center"
                    data-testid={`link-service-${index}`}
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 font-semibold text-lg transition-colors" 
            asChild
            data-testid="button-view-all-services"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
