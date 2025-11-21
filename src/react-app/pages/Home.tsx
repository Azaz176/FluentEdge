import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import FeaturedOn from '@/react-app/components/FeaturedOn';
import Stats from '@/react-app/components/Stats';
import AgeGroups from '@/react-app/components/AgeGroups';
import Features from '@/react-app/components/Features';
import Instructors from '@/react-app/components/Instructors';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedOn />
        <Stats />
        <AgeGroups />
        <Features />
        <Instructors />
      </main>
      <Footer />
    </div>
  );
}
