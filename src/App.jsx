import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider"

function App() {
  return (
    <>
      <Header />
      <main>
        <Slider/>
      </main>
      <Footer />
    </>
  );
}

export default App;
