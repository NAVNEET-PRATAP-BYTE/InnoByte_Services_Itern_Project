import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";

function Footer() {
  const quickLinks = [
    { name: "Browse Destination", href: "#home" },
    { name: "Special Offers & Packages", href: "#home" },
    { name: "Room Type & Amenities", href: "#home" },
    { name: "Customer Reviews & Ratings", href: "#home" },
    { name: "Travel Tips & Guides", href: "#home" },
  ];

  const services = [
    { name: "Concierge Assistance", href: "#services" },
    { name: "Flexible Booking Options", href: "#booking" },
    { name: "Airport Transfers", href: "#transfers" },
    { name: "Wellness & Recreation", href: "#wellness" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-amber-400 mb-4">
              Kingsukh Guest House
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience the perfect blend of comfort, luxury, and authentic
              hospitality in the heart of Purulia. Your home away from home
              awaits you with warm Bengali hospitality and modern amenities.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-amber-400" />
                <a href="https://maps.google.com" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
                  723156
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-400" />
                <a href="tel:+919007062180" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  +91 9007062180
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-400" />
                <a href="mailto:kkghosh0099@gmail.com" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  kkghosh0099@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="https://facebook.com"
                className="  w-6 h-6"
                aria-label="Facebook"
              >
               <img src="\facebook.png" alt="" />
              </a>
              <a
                href="https://www.instagram.com/kingsukhguesthouse/"
                className=" w-6 h-6"
                aria-label="Instagram"
              >
                <img src="\instagram.png" alt="" />
              </a>
              <a
                href="https://twitter.com"
                className="w-6 h-6"
                aria-label="Twitter"
              >
               <img src="\twitter.png" alt="" />
              </a>
              <a
                href="https://twitter.com"
                className="w-6 h-6"
                aria-label="Twitter"
              >
               <img src="\youtube.png" alt="" />
              </a>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Kingsukh Guest House. All rights reserved.</p>
              <p className="text-sm mt-1">
                Designed with ❤️ for exceptional hospitality
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
