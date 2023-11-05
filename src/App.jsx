import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/Loading/Loading";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";

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
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
