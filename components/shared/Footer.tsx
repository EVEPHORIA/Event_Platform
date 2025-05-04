'use client';

import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="wrapper mx-auto max-w-7xl px-5 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + Tagline */}
        <div className="space-y-4">
          <Link href="/">
            <Image 
              src="/assets/image2.png"
              alt="Evephoria Logo"
              width={50}
              height={38}
              className="mb-2"
            />
          </Link>
          <p className="text-sm text-gray-300">
            Where every event becomes an experience, connecting vendors and event organizers on a single platform.
          </p>
          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <Link href="https://www.youtube.com" target="_blank" className="hover:text-red-500">
              <FaYoutube size={20} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" className="hover:text-red-500">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" className="hover:text-red-500">
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" className="hover:text-red-500">
              <FaXTwitter size={20} />
            </Link>
          </div>
        </div>

        {/* Platform */}
        <div>
          <h3 className="font-semibold text-white mb-2">Platform</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-red-500">Home</Link></li>
            <li><Link href="/vendor-registration" className="hover:text-red-500">Vendor Registration</Link></li>
            <li><Link href="/event-registration" className="hover:text-red-500">Event Registration</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-white mb-2">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-red-500">About</Link></li>
            <li><Link href="/services" className="hover:text-red-500">Services</Link></li>
            <li><Link href="/solutions" className="hover:text-red-500">Solutions</Link></li>
            <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-white mb-2">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/privacy" className="hover:text-red-500">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-red-500">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © 2023 Evephoria. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
