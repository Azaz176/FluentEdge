import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function TestimonialsPreview() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'Canada',
      text: 'Improved my IELTS score from 6.5 to 8.0 in just 3 months!',
      rating: 5
    },
    {
      name: 'Ahmed Hassan',
      country: 'Egypt',
      text: 'Best TOEFL preparation. Flexible timings worked perfectly for me.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      country: 'India',
      text: 'PTE coaching helped me achieve my target score. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      country: 'China',
      text: 'GRE Verbal training was exceptional. Clear explanations and great support.',
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Students Say</h2>
        <div className="relative">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 min-h-[300px] flex items-center">
            <div className="text-center w-full">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600">{testimonials[currentIndex].country}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/testimonials"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            View All Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}

