import Link from "next/link";
import { FiMail, FiPhone, FiClock, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 gradient-text">PC Labels</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Your trusted partner for professional label printing services. 
              Quality, precision, and excellence in every print.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-600 dark:text-gray-400 hover:text-primary-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-600 dark:text-gray-400 hover:text-primary-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-600 dark:text-gray-400 hover:text-primary-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-600 dark:text-gray-400 hover:text-primary-400 transition">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-gray-900 dark:text-white">Our Services</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="hover:text-primary-400 transition cursor-default">Size Labels</li>
              <li className="hover:text-primary-400 transition cursor-default">Woven Labels</li>
              <li className="hover:text-primary-400 transition cursor-default">Washcare Labels</li>
              <li className="hover:text-primary-400 transition cursor-default">Ribbons</li>
              <li className="hover:text-primary-400 transition cursor-default">Hangtags</li>
              <li className="hover:text-primary-400 transition cursor-default">Custom Printing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-gray-900 dark:text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMail className="mr-3 mt-1 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:info@pclabels.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-400 transition"
                >
                  info@pclabels.com
                </a>
              </li>
              <li className="flex items-start">
                <FiPhone className="mr-3 mt-1 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+919871088867"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-400 transition"
                >
                  +91 9871088867
                </a>
              </li>
              <li className="flex items-start">
                <FiPhone className="mr-3 mt-1 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+918076392558"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-400 transition"
                >
                  +91 8076392558
                </a>
              </li>
              <li className="flex items-start">
                <FiPhone className="mr-3 mt-1 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+918920767545"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-400 transition"
                >
                  +91 8920767545
                </a>
              </li>
              <li className="flex items-start">
                <FiClock className="mr-3 mt-1 text-primary-400 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">Mon-Fri: 9AM-6PM</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mr-3 mt-1 text-primary-400 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">
                  Z-32, Okhla Phase-2, Okhla Industrial Area, New Delhi-110020, Delhi, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-900 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} PC Labels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

