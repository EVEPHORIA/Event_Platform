'use client';

import { useState } from 'react';
import Image from 'next/image';

const eventDetails = {
  corporate: {
    title: 'CORPORATE EVENTS',
    items: [
      'Conferences',
      'Seminars',
      'Workshops',
      'Team-building events',
      'Product launches',
      'Trade shows',
      'Annual meetings',
      'Executive retreats',
      'Investor meetings',
      'Award ceremonies (corporate level)',
      'Networking events',
    ],
    image: '/images/corporate.jpg', // Replace with your actual image path
  },
  commercial: {
    title: 'COMMERCIAL EVENTS',
    items: [
      'Concerts',
      'Festivals',
      'Brand activations',
      'Public shows',
      'Product exhibitions',
      'Street marketing campaigns',
      'Pop-up shops',
      'Media events',
      'Sponsorship activations',
      'Promotional events',
      'Celebrity appearances',
      'Fashion shows',
      'Charity galas',
    ],
    image: '/images/commercial.jpg', // Replace with your actual image path
  },
  crowned: {
    title: 'CROWNED EVENTS',
    items: [
      'VIP parties',
      'Gala dinners',
      'Award ceremonies (luxury level)',
      'High-profile galas',
      'Luxury weddings',
      'Private concerts',
      'Exclusive red-carpet events',
      'Fashion events (exclusive, invitation-only)',
      'Private fundraisers',
      'Celebrity events',
      'Elite social gatherings',
      'Luxury brand launch parties',
    ],
    image: '/images/crowned.jpg', // Replace with your actual image path
  },
};

export default function ThreeCModelSection() {
  const [selected, setSelected] = useState<null | 'corporate' | 'commercial' | 'crowned'>(null);

  return (
    <section className="bg-black text-white py-16 px-4 md:px-16 relative z-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          At <strong className="text-white">EVEPHORIA: The Event Planners</strong>, we don't just plan events—we craft immersive realities that evoke emotion,
          spark connections, and leave lasting impressions. Our Services represent the essence of what we do best—
          <span className="text-red-500 font-semibold"> Crowned Events, Corporate Events, Commercial Events</span>.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {(['crowned', 'corporate', 'commercial'] as const).map((type) => (
            <div
              key={type}
              onClick={() => setSelected(type)}
              className="cursor-pointer bg-white text-black rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-red-600 hover:text-white"
            >
              <h3 className="text-xl font-bold mb-2 capitalize">{eventDetails[type].title}</h3>
              <p className="text-sm">
                {type === 'crowned' &&
                  'Luxury event services for VIP gatherings and exclusive high-profile celebrations.'}
                {type === 'corporate' &&
                  'Professional events for business needs including meetings, workshops, and product launches.'}
                {type === 'commercial' &&
                  'Events designed for large audiences—marketing, branding, and promotional activities.'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white text-black rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative overflow-y-auto max-h-[90vh] shadow-2xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-xl font-bold text-red-600 hover:text-red-800"
            >
              &times;
            </button>
            <h3 className="text-2xl sm:text-3xl font-bold text-red-600 mb-4">
              {eventDetails[selected].title}
            </h3>
            <Image
              src={eventDetails[selected].image}
              alt={eventDetails[selected].title}
              width={600}
              height={400}
              className="w-full h-auto rounded-lg mb-4"
            />
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
              {eventDetails[selected].items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
