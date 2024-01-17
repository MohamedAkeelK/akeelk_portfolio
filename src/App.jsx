import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/Loading/Loading";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";

import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}

export default App;
