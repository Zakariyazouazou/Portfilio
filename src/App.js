import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import "./App.css"

function App() {
  return (
    <div className="bg-orange-300">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <div className="mt-20 casscreen"/>
      <Work />
      <div className="pt-5"/>
      <Contact />
    </div>
  );
}

export default App;
