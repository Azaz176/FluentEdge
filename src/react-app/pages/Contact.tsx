import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Address:</strong><br />
                PG - 27, Janakpuri<br />
                Delhi - 110058
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong><br />
                info@jandclanguageschool.org
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
