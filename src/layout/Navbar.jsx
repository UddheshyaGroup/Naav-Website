import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <nav className="w-full bg-[#DFE6E6] border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between md:items-stretch max-w-7xl mx-auto px-4 md:px-0">
            {/* Logo - Leftmost */}
            <div className="flex items-center">
              <Link to="/" onClick={scrollToTop} className="flex items-center">
                <img
                  src="/logo.png"
                  alt="NAAV Logo"
                  className="h-[64px] py-0 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Right aligned */}
            <ul className="hidden md:flex items-center justify-end gap-8 flex-1 px-4">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className={`relative inline-block text-gray-900 font-medium no-underline transition-colors duration-300 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300
                    ${
                      location.pathname === "/"
                        ? "after:w-full text-blue-500"
                        : "after:w-0 hover:after:w-full hover:text-blue-500"
                    }`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/courses"
                  onClick={scrollToTop}
                  className={`relative inline-block text-gray-900 font-medium no-underline transition-colors duration-300 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300
                    ${
                      location.pathname === "/courses"
                        ? "after:w-full text-blue-500"
                        : "after:w-0 hover:after:w-full hover:text-blue-500"
                    }`}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  onClick={scrollToTop}
                  className={`relative inline-block text-gray-900 font-medium no-underline transition-colors duration-300 
                            after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300
                            ${
                              location.pathname === "/aboutus"
                                ? "after:w-full text-blue-500"
                                : "after:w-0 hover:after:w-full hover:text-blue-500"
                            }`}
                >
                  About us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className={`relative inline-block text-gray-900 font-medium no-underline transition-colors duration-300 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300
                    ${
                      location.pathname === "/contact"
                        ? "after:w-full text-blue-500"
                        : "after:w-0 hover:after:w-full hover:text-blue-500"
                    }`}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
            <ul className="flex flex-col p-4 gap-2">
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    closeMobileMenu();
                    scrollToTop();
                  }}
                  className={`block px-4 py-3 rounded-md font-medium transition-colors duration-300 ${
                    location.pathname === "/"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  onClick={() => {
                    closeMobileMenu();
                    scrollToTop();
                  }}
                  className={`block px-4 py-3 rounded-md font-medium transition-colors duration-300 ${
                    location.pathname === "/aboutus"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  onClick={() => {
                    closeMobileMenu();
                    scrollToTop();
                  }}
                  className={`block px-4 py-3 rounded-md font-medium transition-colors duration-300 ${
                    location.pathname === "/aboutus"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => {
                    closeMobileMenu();
                    scrollToTop();
                  }}
                  className={`block px-4 py-3 rounded-md font-medium transition-colors duration-300 ${
                    location.pathname === "/contact"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
