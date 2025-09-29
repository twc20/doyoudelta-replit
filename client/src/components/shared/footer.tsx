import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Delta Tire</h3>
            <p className="text-gray-300 mb-4">
              "Do You Delta?" - Professional automotive services across New Mexico and Arizona since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297L3.547 17.24c-.133.133-.35.133-.483 0-.133-.133-.133-.35 0-.483l1.552-1.574c-.807-.88-1.297-2.031-1.297-3.328 0-2.58 2.097-4.677 4.677-4.677s4.677 2.097 4.677 4.677-2.097 4.677-4.677 4.677z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-google">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services/tires" className="hover:text-white transition-colors">Tire Sales & Service</Link></li>
              <li><Link href="/services/auto-repair" className="hover:text-white transition-colors">Auto Repair</Link></li>
              <li><Link href="/services/oil-change" className="hover:text-white transition-colors">Oil Change</Link></li>
              <li><Link href="/services/brakes" className="hover:text-white transition-colors">Brake Repair</Link></li>
              <li><Link href="/services/alignment" className="hover:text-white transition-colors">Wheel Alignment</Link></li>
              <li><Link href="/services/truck-accessories" className="hover:text-white transition-colors">Truck Accessories</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Locations</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <div className="font-medium">Grants</div>
                <div className="text-sm">(505) 287-7946</div>
              </li>
              <li>
                <div className="font-medium">Gallup</div>
                <div className="text-sm">(505) 722-2945</div>
              </li>
              <li>
                <div className="font-medium">Farmington</div>
                <div className="text-sm">(505) 325-4500</div>
              </li>
              <li>
                <div className="font-medium">Eagar</div>
                <div className="text-sm">(928) 333-3730</div>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/vip" className="hover:text-white transition-colors">VIP Program</Link></li>
              <li><Link href="/fleet" className="hover:text-white transition-colors">Fleet Services</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Delta Tire. All rights reserved. | <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link> | <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></p>
        </div>
      </div>
    </footer>
  );
}
