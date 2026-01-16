import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Cocktails from "./components/Cocktails/Cocktails";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Cocktails />
        <About/>
      </main>
    </>
  );
};

export default App;
