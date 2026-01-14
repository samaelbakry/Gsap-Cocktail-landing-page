import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";


const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
		<div className="bg-black min-h-screen">

		</div>
      </main>
    </>
  );
};

export default App;
