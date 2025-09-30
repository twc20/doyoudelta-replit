import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Calendar, Star, Shield, Award, CheckCircle } from "lucide-react";
import { tireBrands, popularBrands, brandsByPriceRange } from "@shared/tire-brands";
import { SEO } from "@/components/shared/seo";

export default function TireBrandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO
        title="Tire Brands Michelin Goodyear BFGoodrich | Delta Tire NM"
        description="Top tire brands: Michelin, Goodyear, BFGoodrich, Bridgestone, Cooper & more. Premium to budget options in Grants, Gallup, Farmington NM & Eagar AZ. Get a quote!"
        keywords="tire brands, Michelin, Goodyear, BFGoodrich, Bridgestone, Cooper, tire selection, Grants, Gallup"
        canonical="https://deltatire.com/tire-brands"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Tire Brands We Carry
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
            Premium tire brands for every vehicle type and budget. From budget-friendly to ultra-premium, we'll help you find the perfect tires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold" 
              asChild
              data-testid="button-call-brands"
            >
              <a href="tel:505-287-7946">
                <Phone className="w-5 h-5 mr-2" />
                Get a Quote
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold" 
              asChild
              data-testid="button-schedule-brands"
            >
              <a href="/appointments">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Brands Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Most Popular Brands
            </h2>
            <p className="text-lg text-gray-600">
              Our top-selling tire brands trusted by thousands of customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularBrands.map((brand, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{brand.name}</h3>
                    <Badge className="bg-red-600 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{brand.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {brand.specialties.slice(0, 3).map((specialty, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Types Available:</h4>
                      <p className="text-sm text-gray-600">{brand.tireTypes.slice(0, 4).join(", ")}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <p className="text-xs text-gray-500">Price Range</p>
                        <p className="font-semibold text-gray-900">{brand.priceRange}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Warranty</p>
                        <p className="font-semibold text-gray-900 text-sm">{brand.warranty}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Available Brands
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive selection from budget-friendly to ultra-premium tires
            </p>
          </div>

          {/* Premium & Ultra-Premium Brands */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Premium Brands</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...brandsByPriceRange.premium, ...brandsByPriceRange.ultraPremium].map((brand, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{brand.name}</h4>
                    <Badge className="mb-3">{brand.priceRange}</Badge>
                    <p className="text-sm text-gray-600 mb-3">{brand.description.slice(0, 100)}...</p>
                    <div className="space-y-2">
                      <div className="flex items-start text-xs">
                        <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{brand.specialties[0]}</span>
                      </div>
                      <p className="text-xs text-gray-500">{brand.warranty}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mid-Range Brands */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Mid-Range Brands</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandsByPriceRange.midRange.map((brand, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{brand.name}</h4>
                    <Badge variant="outline" className="mb-3">{brand.priceRange}</Badge>
                    <p className="text-sm text-gray-600 mb-3">{brand.description.slice(0, 100)}...</p>
                    <div className="space-y-2">
                      <div className="flex items-start text-xs">
                        <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{brand.specialties[0]}</span>
                      </div>
                      <p className="text-xs text-gray-500">{brand.warranty}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Budget Brands */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Budget-Friendly Brands</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandsByPriceRange.budget.map((brand, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{brand.name}</h4>
                    <Badge variant="outline" className="mb-3">{brand.priceRange}</Badge>
                    <p className="text-sm text-gray-600 mb-3">{brand.description.slice(0, 100)}...</p>
                    <div className="space-y-2">
                      <div className="flex items-start text-xs">
                        <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{brand.specialties[0]}</span>
                      </div>
                      <p className="text-xs text-gray-500">{brand.warranty}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Choose the Right Brand
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Not sure which tire brand is right for you? We'll help you choose based on your vehicle, driving habits, and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Driving Style</h3>
              <p className="text-gray-600">Highway commuting, off-road adventures, or city driving? We match tires to your lifestyle.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Weather Conditions</h3>
              <p className="text-gray-600">All-season, winter, or summer tires? Climate matters for optimal performance and safety.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Budget</h3>
              <p className="text-gray-600">From budget-friendly to premium, we have options at every price point without compromising safety.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vehicle Type</h3>
              <p className="text-gray-600">Passenger car, SUV, truck, or commercial vehicle? Each needs specific tire types for best performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Find Your Perfect Tires Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Talk to our tire experts about which brand and type is right for your vehicle. We offer free quotes and professional recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-red-600 text-white hover:bg-red-700 font-semibold" 
              asChild
              data-testid="button-call-brands-footer"
            >
              <a href="tel:505-287-7946">Call for Quote: (505) 287-7946</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-semibold" 
              asChild
              data-testid="button-tires-service"
            >
              <a href="/services/tires">View Tire Services</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
