import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/Loading/Loading";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Works from "./components/Works/Works.jsx";
import Works1 from "./components/Works/Works1.jsx";
import Works2 from "./components/Works/Works2.jsx";

import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
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
      <section id="Works">
        <Works className="works-section" />
      </section>
      <section id="Works2">
        <Works1 className="works-section" />
      </section>
      <section id="Works3">
        <Works2 className="works-section" />
      </section>
      <section id="Contact">
        <Contact className="contact-section"/>
      </section>
    </div>
  );
}

export default App;
