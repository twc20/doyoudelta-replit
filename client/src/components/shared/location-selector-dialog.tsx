import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, MessageSquare } from "lucide-react";

const locations = [
  {
    name: "Grants, NM",
    phone: "505-287-7946",
    address: "833 E Santa Fe Ave"
  },
  {
    name: "Gallup, NM",
    phone: "505-722-2945",
    address: "501 US-491"
  },
  {
    name: "Farmington, NM",
    phone: "505-325-4500",
    address: "4650 E Main St"
  },
  {
    name: "Eagar, AZ",
    phone: "928-333-3730",
    address: "50 W Central Ave"
  }
];

interface LocationSelectorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LocationSelectorDialog({ open, onOpenChange }: LocationSelectorDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Select Your Location
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Choose the Delta Tire location you'd like to contact
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 py-4">
          {locations.map((location, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-red-600 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <MapPin className="w-4 h-4 text-red-600 mr-2" />
                    <span className="font-semibold text-gray-900">{location.name}</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">{location.address}</p>
                </div>
                <span className="font-medium text-gray-900 ml-4">{location.phone}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${location.phone}`}
                  className="block"
                  data-testid={`call-${location.name.toLowerCase().replace(/,?\s+/g, '-')}`}
                >
                  <Button
                    variant="outline"
                    className="w-full hover:bg-red-50 hover:border-red-600 hover:text-red-600 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a
                  href={`sms:${location.phone}`}
                  className="block"
                  data-testid={`text-${location.name.toLowerCase().replace(/,?\s+/g, '-')}`}
                >
                  <Button
                    variant="outline"
                    className="w-full hover:bg-green-50 hover:border-green-600 hover:text-green-600 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Text Now
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface CallButtonProps {
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
  children?: React.ReactNode;
  testId?: string;
}

export function CallButton({ 
  size = "lg", 
  variant = "default",
  className = "bg-white text-red-600 hover:bg-gray-100 font-semibold",
  children,
  testId = "button-call"
}: CallButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button 
        size={size}
        variant={variant}
        className={className}
        onClick={() => setOpen(true)}
        data-testid={testId}
      >
        {children || (
          <>
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </>
        )}
      </Button>
      <LocationSelectorDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
