import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Car, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentFormSchema, type AppointmentFormData } from "@shared/schema";
import { SEO } from "@/components/shared/seo";
import { useState } from "react";

export default function Appointments() {
  const { toast } = useToast();
  const [confirmationNumber, setConfirmationNumber] = useState<string>("");

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      service: "",
      date: "",
      time: "",
      vehicleMake: "",
      vehicleModel: "",
      vehicleYear: "",
      notes: ""
    }
  });

  const appointmentMutation = useMutation({
    mutationFn: async (data: AppointmentFormData) => {
      const response = await apiRequest("POST", "/api/appointment", data);
      return response;
    },
    onSuccess: (response: any) => {
      const confNumber = response.confirmationNumber || `DT-${Date.now()}`;
      setConfirmationNumber(confNumber);
      toast({
        title: "Appointment Request Submitted!",
        description: `Confirmation #${confNumber} - We'll contact you shortly.`,
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit appointment request. Please try again or call us directly.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: AppointmentFormData) => {
    appointmentMutation.mutate(data);
  };

  // Generate time slots
  const timeSlots = [
    "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
  ];

  // Generate years for vehicle selection
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => (currentYear - i).toString());

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO
        title="Book Appointment - Delta Tire | Schedule Auto Service"
        description="Schedule your appointment online at Delta Tire. Choose from tire service, oil changes, brake repair, and more across our 4 locations in NM & AZ. Easy online booking available."
        keywords="appointment booking, schedule service, tire appointment, auto repair booking, Delta Tire, New Mexico, Arizona"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Schedule Your Service
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            Book your appointment online - quick, easy, and convenient
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {confirmationNumber && (
            <Card className="mb-8 bg-green-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-2" data-testid="confirmation-title">
                  Appointment Request Confirmed!
                </h3>
                <p className="text-green-700" data-testid="confirmation-number">
                  Confirmation Number: {confirmationNumber}
                </p>
                <p className="text-green-600 mt-2">
                  We'll contact you shortly to confirm your appointment time.
                </p>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Book Your Appointment</CardTitle>
              <p className="text-gray-600">Fill out the form below and we'll confirm your appointment shortly</p>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Phone className="w-5 h-5 text-red-600" />
                      Contact Information
                    </h3>
                    
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input {...field} data-testid="input-appointment-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} data-testid="input-appointment-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input type="tel" {...field} data-testid="input-appointment-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-red-600" />
                      Service Details
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-appointment-location">
                                  <SelectValue placeholder="Select location" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="grants">Grants, NM</SelectItem>
                                <SelectItem value="gallup">Gallup, NM</SelectItem>
                                <SelectItem value="farmington">Farmington, NM</SelectItem>
                                <SelectItem value="eagar">Eagar, AZ</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Needed *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-appointment-service">
                                  <SelectValue placeholder="Select service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="tire-sales">Tire Sales & Installation</SelectItem>
                                <SelectItem value="tire-repair">Tire Repair</SelectItem>
                                <SelectItem value="oil-change">Oil Change</SelectItem>
                                <SelectItem value="brake-service">Brake Service</SelectItem>
                                <SelectItem value="wheel-alignment">Wheel Alignment</SelectItem>
                                <SelectItem value="battery">Battery Service</SelectItem>
                                <SelectItem value="ac-service">AC/Heater Service</SelectItem>
                                <SelectItem value="inspection">Vehicle Inspection</SelectItem>
                                <SelectItem value="general-repair">General Auto Repair</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Date *</FormLabel>
                            <FormControl>
                              <Input 
                                type="date" 
                                {...field} 
                                min={new Date().toISOString().split('T')[0]}
                                data-testid="input-appointment-date" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Time *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-appointment-time">
                                  <SelectValue placeholder="Select time" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timeSlots.map((slot) => (
                                  <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Vehicle Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Car className="w-5 h-5 text-red-600" />
                      Vehicle Information (Optional)
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="vehicleYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Year</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-vehicle-year">
                                  <SelectValue placeholder="Select year" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {years.map((year) => (
                                  <SelectItem key={year} value={year}>{year}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="vehicleMake"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Make</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="e.g. Toyota" data-testid="input-vehicle-make" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="vehicleModel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Model</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="e.g. Camry" data-testid="input-vehicle-model" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4} 
                            {...field} 
                            placeholder="Any specific concerns or information we should know about?"
                            data-testid="textarea-appointment-notes" 
                          />
                        </FormControl>
                        <FormDescription>
                          Let us know about any specific issues or requests
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-red-600 text-white hover:bg-red-700"
                    disabled={appointmentMutation.isPending}
                    data-testid="button-submit-appointment"
                  >
                    {appointmentMutation.isPending ? "Booking..." : "Book Appointment"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Prefer to Call?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Grants</p>
                  <p className="font-semibold">(505) 287-7946</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Gallup</p>
                  <p className="font-semibold">(505) 722-2945</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Farmington</p>
                  <p className="font-semibold">(505) 325-4500</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Eagar</p>
                  <p className="font-semibold">(928) 333-3730</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
