'use client';

import { FaUserPlus, FaCalendarAlt, FaFileContract, FaRobot, FaChartBar, FaLock } from 'react-icons/fa';

export default function EventManagementSection() {
  return (
    <section id="solutions" className="bg-black text-white py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex justify-between items-start mb-12">
          <h2 className="text-3xl md:text-4xl text-white font-bold max-w-lg">
            All-in-One Event <br />
            <span className="text-red-600">Management Solution</span>
          </h2>
          <p className="text-white max-w-md mt-4 md:mt-0">
            Our platform offers a comprehensive suite of tools to streamline every aspect of event planning and vendor management.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Vendor Registration */}
          <div className="flex items-start p-6 border rounded-xl shadow hover:shadow-lg transition">
            <FaUserPlus className="text-red-600 text-2xl mt-1 mr-4" />
            <div>
              <h3 className="font-bold text-lg">Vendor Registration</h3>
              <p className="text-sm text-white">
                Easily register as a vendor, list your services, and upload required documents.
              </p>
            </div>
          </div>

          {/* Event Registration */}
          <div className="flex items-start p-6 border rounded-xl shadow hover:shadow-lg transition">
            <FaCalendarAlt className="text-red-600 text-2xl mt-1 mr-4" />
            <div>
              <h3 className="font-bold text-lg">Event Registration</h3>
              <p className="text-sm text-white">
                Quickly register events and select services from our network of qualified vendors.
              </p>
            </div>
          </div>

          {/* Automated Agreements */}
          <div className="flex items-start p-6 border rounded-xl shadow hover:shadow-lg transition">
            <FaFileContract className="text-red-600 text-2xl mt-1 mr-4" />
            <div>
              <h3 className="font-bold text-lg">Automated Agreements</h3>
              <p className="text-sm text-white">
                Generate and manage vendor agreements and contracts automatically.
              </p>
            </div>
          </div>

          {/* AI-Powered Chatbot */}
          <div className="flex items-start p-6 border rounded-xl shadow hover:shadow-lg transition">
            <FaRobot className="text-red-600 text-2xl mt-1 mr-4" />
            <div>
              <h3 className="font-bold text-lg">AI-Powered Chatbot</h3>
              <p className="text-sm text-white">
                Get instant assistance with our ChatGPT-powered chatbot, available 24/7.
              </p>
            </div>
          </div>

          {/* Comprehensive Dashboard */}
          <div className="flex items-start p-6 border rounded-xl shadow hover:shadow-lg transition">
            <FaChartBar className="text-red-600 text-2xl mt-1 mr-4" />
            <div>
              <h3 className="font-bold text-lg">Comprehensive Dashboard</h3>
              <p className="text-sm text-white">
                Track all your bookings, services, and business analytics in one place.
              </p>
            </div>
          </div>

          {/* Secure & Reliable */}
          <div className="flex items-start p-6 border rounded-xl shadow hover:shadow-lg transition">
            <FaLock className="text-red-600 text-2xl mt-1 mr-4" />
            <div>
              <h3 className="font-bold text-lg">Secure & Reliable</h3>
              <p className="text-sm text-white">
                Enterprise-grade security ensures your data and transactions are always protected.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
         {/* Bottom Buttons  <button className="bg-white text-black px-6 py-3 rounded-xl hover:bg-red-600 transition font-semibold">
            Vendor Login
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-xl hover:bg-red-600 transition font-semibold">
            Event Organizer Login
          </button> */}
        </div>
      </div>
    </section>
  );
}
