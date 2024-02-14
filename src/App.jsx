import "./App.css";
import { Navigation } from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-start xl:px-14 px-8 py-4 gap-14">
        <Navigation />
        <Hero />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
