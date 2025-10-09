import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { Link } from "wouter";
import { SEO } from "@/components/shared/seo";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Static site - just log the contact form data
      // For email integration, add Google Apps Script webhook or email service
      console.log("Contact form submission:", data);
      
      // Simulate processing
      return new Promise((resolve) => setTimeout(resolve, 500));
    },
    onSuccess: () => {
      toast({
        title: "Thank You for Your Message!",
        description: "For immediate assistance, please call us directly at your nearest location.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Note",
        description: "Please call us directly for immediate assistance.",
        variant: "default"
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

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

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-contact-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} data-testid="input-contact-email" />
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
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} data-testid="input-contact-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Interested In</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-contact-service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="tires">Tire Sales & Service</SelectItem>
                            <SelectItem value="auto-repair">Auto Repair</SelectItem>
                            <SelectItem value="oil-change">Oil Change</SelectItem>
                            <SelectItem value="brakes">Brake Repair</SelectItem>
                            <SelectItem value="alignment">Wheel Alignment</SelectItem>
                            <SelectItem value="truck">Truck Accessories</SelectItem>
                            <SelectItem value="electrical">Battery & Electrical</SelectItem>
                            <SelectItem value="ac">AC & Heater Repair</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea rows={5} {...field} data-testid="textarea-contact-message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-red-600 text-white hover:bg-red-700"
                    disabled={contactMutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
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
                      <Mail className="w-6 h-6 text-red-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                        <p className="text-gray-600" data-testid="email-info">info@deltatire.com</p>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
