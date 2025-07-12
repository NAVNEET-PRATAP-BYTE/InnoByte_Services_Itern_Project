import React from 'react'
import { Utensils, Car, Wifi, Map, ShieldHalf, Headphones } from 'lucide-react';

function Service() {
   const services = [
    {
      icon: <Utensils className="w-12 h-12 text-amber-600" />,
      title: "Restaurant",
      description: "Authentic Bengali cuisine and international dishes prepared by expert chefs"
    },
    {
      icon: <Car className="w-12 h-12 text-amber-600" />,
      title: "Free Parking",
      description: "Secure and spacious parking facility available for all guests"
    },
    {
      icon: <Wifi className="w-12 h-12 text-amber-600" />,
      title: "High-Speed WiFi",
      description: "Complimentary high-speed internet access throughout the property"
    },
    {
      icon: <Map  className="w-12 h-12 text-amber-600" />,
      title: "Tourist Guide Support",
      description: "Well-equipped guides with modern equipment for your Experience"
    },
    {
      icon: <ShieldHalf  className="w-12 h-12 text-amber-600"/>,
      title: "High Class Security",
      description: "We have Highly trained guards and security for your safety"
    },
    {
      icon: <Headphones className="w-12 h-12 text-amber-600" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service to assist with all your needs"
    }
  ];

  return (
    <>
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-amber-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of services to ensure your stay 
            is comfortable, convenient, and memorable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Service */}
        <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Special Concierge Service
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Our dedicated concierge team can help you plan local excursions, 
              arrange transportation, and provide insider tips to make the most 
              of your visit to Purulia.
            </p>
            <button className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
             <a href="#contact">Learn More</a>
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Service
