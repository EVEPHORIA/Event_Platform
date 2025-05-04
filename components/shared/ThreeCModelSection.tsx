'use client';

export default function ThreeCModelSection() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">Our Services</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          At <strong className="text-white">EVEPHORIA: The Event Planners</strong>, we don't just plan events—we craft immersive realities that evoke emotion,
          spark connections, and leave lasting impressions. Our Services represents the essence of what we do best—
          <span className="text-red-500 font-semibold"> Crowned Events, Corporate Events, Commercial Events</span>.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Crowned Events */}
          <div className="bg-white text-black rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-red-600 hover:text-white">
            <h3 className="text-xl font-bold mb-2">Crowned Events</h3>
            <p className="text-sm">
              Luxury event services for high-profile occasions, VIP gatherings, and exclusive celebrations that demand exceptional attention to detail.
            </p>
          </div>

          {/* Corporate Events */}
          <div className="bg-white text-black rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-red-600 hover:text-white">
            <h3 className="text-xl font-bold mb-2">Corporate Events</h3>
            <p className="text-sm">
              Professional event solutions for businesses including conferences, seminars, team building activities, and corporate celebrations.
            </p>
          </div>

          {/* Commercial Events */}
          <div className="bg-white text-black rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-red-600 hover:text-white">
            <h3 className="text-xl font-bold mb-2">Commercial Events</h3>
            <p className="text-sm">
              Strategic event planning for product launches, trade shows, exhibitions, and marketing campaigns that drive business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
