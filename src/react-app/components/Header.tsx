import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">J&C Language School</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-900 hover:text-green-600 transition">
              Home
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium text-gray-900 hover:text-green-600 transition">
                Languages
              </button>
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[180px]">
                <a href="#french" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">French</a>
                <a href="#german" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">German</a>
                <a href="#spanish" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Spanish</a>
              </div>
            </div>
            <a href="#kids" className="text-sm font-medium text-gray-900 hover:text-green-600 transition">
              Kids
            </a>
            <a href="#testimonials" className="text-sm font-medium text-gray-900 hover:text-green-600 transition">
              Testimonials
            </a>
            <a href="#blog" className="text-sm font-medium text-gray-900 hover:text-green-600 transition">
              Blog
            </a>
            <Link to="/about" className="text-sm font-medium text-gray-900 hover:text-green-600 transition">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium text-gray-900 hover:text-green-600 transition">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-sm font-medium text-gray-900 hover:text-green-600 py-2">
                Home
              </Link>
              <a href="#kids" className="text-sm font-medium text-gray-900 hover:text-green-600 py-2">
                Kids
              </a>
              <a href="#testimonials" className="text-sm font-medium text-gray-900 hover:text-green-600 py-2">
                Testimonials
              </a>
              <Link to="/about" className="text-sm font-medium text-gray-900 hover:text-green-600 py-2">
                About
              </Link>
              <Link to="/contact" className="text-sm font-medium text-gray-900 hover:text-green-600 py-2">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
