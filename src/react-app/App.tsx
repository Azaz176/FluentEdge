import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import ContactPage from "@/react-app/pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
