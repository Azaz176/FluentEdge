export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920')] bg-cover bg-center opacity-5"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              DISCOVER THE JOY OF LEARNING LANGUAGES
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Learn Online with Expert & Passionate Instructors
            </p>
            <a
              href="#start-learning"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition shadow-lg hover:shadow-xl"
            >
              Start Learning
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="relative h-96 md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800"
              alt="Language learning"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
