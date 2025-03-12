import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8 lg:px-12 mt-5 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/acme-logo-dark.png"
                alt="Everything Talent Logo"
                width={120}
                height={80}
                className="mb-4"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Everything Talent</h2>
              <p className="text-gray-400 text-sm max-w-xs">
                Enhancing Hiring with AI-powered assessment and tracking for
                accurate recruitment
              </p>
            </div>
            <div className="flex space-x-4 pt-2">
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          {/* Resources Column */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Hiring Guides
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Started Column */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
              Get Started
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Hiring Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Funded Startups
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Free Trial
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Request Demo
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Trust
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  CCPA Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Everything Talent. All rights
            reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
}
