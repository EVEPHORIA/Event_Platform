export default function ContactSection() {
    return (
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Get in Touch</h2>
          <p className="mb-8 text-gray-300">
            Have questions or ready to plan your next event? Drop us a line.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 rounded-lg text-gray-900"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 rounded-lg text-gray-900"
              required
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              className="p-3 rounded-lg text-gray-900 md:col-span-2"
              required
            />
            <button
              type="submit"
              className="md:col-span-2 py-3 rounded-lg bg-red-500 font-semibold hover:bg-red-600"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 text-gray-400 text-sm">
            <p>Email: info@onophoraevents.com</p>
            <p>Phone: 844‑820‑4579</p>
          </div>
        </div>
      </section>
    );
  }
  