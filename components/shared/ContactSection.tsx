import Image from 'next/image';

export default function ContactSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-black via-black to-black text-white relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Form */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-600 mb-6">
            GET IN TOUCH WITH US TODAY
          </h2>
          <p className="text-gray-300 mb-8 text-base sm:text-lg">
            We’d love to help—our friendly team is standing by.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full p-3 border border-white rounded-xl bg-transparent placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full p-3 border border-white rounded-xl bg-transparent placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border border-white rounded-xl bg-transparent placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 border border-white rounded-xl bg-transparent placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
              required
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              className="w-full p-3 border border-white rounded-xl bg-transparent placeholder-white text-white resize-none focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold uppercase tracking-wide hover:from-red-700 hover:to-red-800 transition-all"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 text-gray-400 text-sm space-y-1">
            <p>Email: info@evephoriaevents.com  </p>
            <p>Phone: 844‑870‑4579</p>
          </div>
        </div>

        {/* Right - Image (only on md and above) */}
        <div className="hidden md:flex justify-end">
          <Image
            src="/assets/images/contact.png"
            alt="Contact illustration"
            width={500}
            height={500}
            className="object-contain max-w-xs sm:max-w-md md:max-w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
