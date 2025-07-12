import React from "react";
import { Award, Users, MapPin, Clock } from "lucide-react";

function About() {
  return (
    <>
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div class="max-w-xl  px-1  flex flex-col md:flex-row items-center gap-12">
              <img
                src="/InnoByte_Services_Itern_Project/out.jpg"
                alt="Kingsukh Guest House"
                class="w-full  rounded-3xl shadow-xl object-cover h-96"
              />
            </div>
          
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About Our
                  <span className="text-amber-600 block">Guest House</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Nestled in the scenic beauty of Purulia, Kingsukh Guest House
                  offers an unparalleled experience of comfort and luxury. Our
                  establishment combines traditional Bengali hospitality with
                  modern amenities to create a perfect retreat for travelers
                  seeking both relaxation and adventure.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you're here for business or leisure, our thoughtfully
                  designed spaces and personalized service ensure that every
                  moment of your stay is memorable. Experience the authentic
                  charm of rural Bengal while enjoying world-class facilities.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    150+
                  </div>
                  <div className="text-gray-600">Happy Guests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    100+
                  </div>
                  <div className="text-gray-600">Bookings Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    4.3★
                  </div>
                  <div className="text-gray-600">Guest Rating</div>
                </div>
              </div>
            </div>

     
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
