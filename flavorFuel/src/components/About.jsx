import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Story</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded in 1985 by Chef Rajesh Kumar, Maharaja began as a small family restaurant 
                with a simple mission: to share the authentic flavors of India with our community. 
                Three generations later, we continue to honor traditional recipes while embracing 
                innovation in our culinary journey.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every dish tells a story of our heritage, from the bustling streets of Delhi to 
                the coastal regions of Kerala. We source our spices directly from Indian farms 
                and grind them fresh daily to ensure every bite captures the essence of authentic Indian cuisine.
              </p>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">35+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">200+</div>
                  <div className="text-sm text-gray-600">Authentic Recipes</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?w=600&h=700&fit=crop"
                alt="Chef Rajesh Kumar"
                className="w-full h-96 lg:h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Chef Rajesh Kumar</h3>
                <p className="text-orange-300">Master Chef & Founder</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-red-400 to-orange-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;