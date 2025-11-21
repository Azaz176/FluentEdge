import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wider">CONTACT</h3>
            <p className="text-gray-700 mb-2">PG - 27, Janakpuri</p>
            <p className="text-gray-700">Delhi - 110058</p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wider">IMPORTANT LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#french" className="text-gray-700 hover:text-green-600 transition">French Language</a></li>
              <li><a href="#german" className="text-gray-700 hover:text-green-600 transition">German Language</a></li>
              <li><a href="#spanish" className="text-gray-700 hover:text-green-600 transition">Spanish Language</a></li>
              <li><a href="#testimonials" className="text-gray-700 hover:text-green-600 transition">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wider">SUBSCRIBE</h3>
            <p className="text-gray-700 mb-4 font-semibold">GET IN TOUCH</p>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 transition text-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">© 2025 FLUENTEDGE</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="text-sm text-gray-600 hover:text-green-600 transition">Privacy Policy</a>
            <a href="#refund" className="text-sm text-gray-600 hover:text-green-600 transition">Refund Policy</a>
            <a href="#terms" className="text-sm text-gray-600 hover:text-green-600 transition">Terms & Conditions</a>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#instagram" className="text-gray-600 hover:text-green-600 transition">
              <Instagram size={20} />
            </a>
            <a href="#youtube" className="text-gray-600 hover:text-green-600 transition">
              <Youtube size={20} />
            </a>
            <a href="#facebook" className="text-gray-600 hover:text-green-600 transition">
              <Facebook size={20} />
            </a>
            <a href="#linkedin" className="text-gray-600 hover:text-green-600 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
