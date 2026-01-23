import React from "react";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Naav moto */}
          <div className="flex flex-col">
            <img
              src="/logo.png"
              alt="NAAV Logo"
              className="h-[72px] py-0 w-auto object-contain mb-4 mx-auto"
            />
            <p className="text-center md:text-left">
              " Where every child belongs,every smile matters, and every day
              sparks curiosity "
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center gap-3">
              <Mail size={20} />
              <a
                href="mailto:info.naav@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                info.naav@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} />  
              <div className="flex flex-col">
                <a
                  href="tel:+97761560360"
                  className="hover:text-blue-400 transition-colors"
                >
                  +977 61-560360
                </a>
                <a
                  href="tel:+97761560260"
                  className="hover:text-blue-400 transition-colors"
                >
                  +977 61-560260
                </a>
              </div>
            </div>
          </div>

          {/* App Downloads */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Download Our App</h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://apps.apple.com/app/id1183813244?fbclid=IwAR2MgyKu9XkxU2Si97c5lMxCLKq62FYO_5EWrGJ_4aW886lXfxt0ktbNYI4"
                className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.ingrails.nepal_adarsha_awasiya_bidyalaya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} NAAV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
