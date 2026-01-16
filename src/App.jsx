import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Cocktails from "./components/Cocktails/Cocktails";
import About from "./components/About/About";
import Art from "./components/Art/Art";
import Menu from "./components/Menu/Menu";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Cocktails />
        <About/>
        <Art/>
        <Menu/>
      </main>
    </>
  );
};

export default App;
