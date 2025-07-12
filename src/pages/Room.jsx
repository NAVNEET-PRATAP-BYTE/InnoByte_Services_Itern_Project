import React from 'react'
import { Wifi, Car, Coffee, Tv, Wind, Users } from 'lucide-react';

function Room() {
  const rooms = [
    {
      id: 1,
      name: "Cozy Haven Room",
      image: "/room1.jpg",
      price: "₹1,000",
      capacity: "2 Guests",
      amenities: ["Free WiFi", "AC", "TV", ],
      description: "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation."
    },
    {
      id: 2,
      name: "Spacious Serenity Suite",
      image: "/small.jpg",
      price: "₹1,500",
      capacity: "2 Guests",
      amenities: ["Free WiFi", "AC", "TV", ],
      description: "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance."
    },
    
  ];

  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case "Free WiFi": return <Wifi size={16} />;
      case "AC": return <Wind size={16} />;
      case "TV": return <Tv size={16} />;
      case "Parking": return <Car size={16} />;
      case "Mini Bar": return <Coffee size={16} />;
      case "Kitchenette": return <Coffee size={16} />;
      default: return <Users size={16} />;
    }
  };

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-amber-600">Rooms</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully designed rooms, each offering comfort, 
            style, and all the amenities you need for a perfect stay.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div 
              key={room.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {room.price}/night
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{room.name}</h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users size={16} className="mr-1" />
                    {room.capacity}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {room.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((amenity, index) => (
                    <div 
                      key={index}
                      className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                    >
                      {getAmenityIcon(amenity)}
                      <span className="ml-1">{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* Book Button */}
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-semibold transition-colors duration-200 transform hover:scale-105">
                  Book This Room
                </button>
              </div>
            </div>
          ))}
        </div>
     
     </div>
    </section>
  );
}

export default Room
