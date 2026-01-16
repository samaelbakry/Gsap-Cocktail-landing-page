import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Cocktails from "./components/Cocktails/Cocktails";
import About from "./components/About/About";
import Art from "./components/Art/Art";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Cocktails />
        <About/>
        <Art/>
      </main>
    </>
  );
};

export default App;
