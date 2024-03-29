import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import PopularPlaces from "./components/PopularPlaces";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{minHeight:'90vh'}}>
        <Header />
        <Hero />
        <PopularPlaces />
      </div>
      <Footer />
    </>
  );
}

export default App;
