import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { CallButton } from "@/components/shared/location-selector-dialog";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/images/delta-tire-logo.png" 
              alt="Delta Tire - Complete Automotive Service" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/locations" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Locations
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              FAQ
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/fleet" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Fleet
            </Link>
            <Link href="/appointments" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 font-medium transition-colors" data-testid="link-appointments">
              Book Appointment
            </Link>
            <Link href="/vip" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 font-medium transition-colors">
              VIP
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/locations"
                className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Locations
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/faq"
                className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/fleet"
                className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Fleet Services
              </Link>
              <Link
                href="/appointments"
                className="bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 font-medium transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
                data-testid="link-appointments-mobile"
              >
                Book Appointment
              </Link>
              <Link
                href="/vip"
                className="bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-900 font-medium transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                VIP Program
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <CallButton
                  className="bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 font-medium transition-colors w-full"
                  testId="button-mobile-call"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now - Open Today!
                </CallButton>
                <Link
                  href="/locations"
                  className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 font-medium transition-colors flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid="button-mobile-locations"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Find Location
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
