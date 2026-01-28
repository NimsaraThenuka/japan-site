import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Harita Gems</h1>
          
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1609619742069-f5e18afeef17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwd29ya3Nob3B8ZW58MXx8fHwxNzY4ODgwNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Our Workshop"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              For over three decades, Harita Gems has been at the forefront of fine jewelry craftsmanship, 
              bringing you the world's most exquisite gemstones and timeless designs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 1990, our passion for perfection and commitment to quality has made us a trusted 
              name in the jewelry industry. Each piece in our collection is carefully curated or meticulously 
              crafted by our master artisans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Award, title: '30+ Years', description: 'Of Excellence' },
              { icon: Users, title: '50K+', description: 'Happy Customers' },
              { icon: Globe, title: 'Worldwide', description: 'Shipping' },
              { icon: Heart, title: '100%', description: 'Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <stat.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-purple-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Promise</h2>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Certified authentic gemstones</li>
              <li>✓ Expert craftsmanship</li>
              <li>✓ Lifetime warranty on all jewelry</li>
              <li>✓ 30-day satisfaction guarantee</li>
              <li>✓ Ethical sourcing practices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
