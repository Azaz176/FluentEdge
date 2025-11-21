import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About J&C Language School</h1>
        <p className="text-lg text-gray-700 mb-4">
          J&C Language School goes beyond what is expected from a language school. Our unique approach to learning 
          will provide you with the cultural understanding and the language skills you need to communicate effectively.
        </p>
        <p className="text-lg text-gray-700">
          We will help you unlock the potential of a new language and discover the world from a new perspective.
        </p>
      </main>
      <Footer />
    </div>
  );
}