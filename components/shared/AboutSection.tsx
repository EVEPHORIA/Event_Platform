import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:flex lg:items-center lg:gap-8">
        {/* Text */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-serif font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-6">
            At EVEPHORIA we don’t just plan events—we create
            experiences. Our team of seasoned professionals
            works end‑to‑end to ensure every detail sparkles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Our Mission', body: 'Deliver unforgettable, seamless events that delight.' },
              { title: 'Our Vision', body: 'Be the world’s most trusted event partner.' },
              { title: 'Our Core Values', body: 'Creativity, reliability & client‑first focus.' },
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 bg-gray-50 rounded-2xl shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Image */}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/about.png"
              alt="Team presenting"
              width={800}
              height={600}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
