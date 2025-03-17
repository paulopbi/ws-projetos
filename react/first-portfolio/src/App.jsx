import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Education from "./layout/Education";
import Hero from "./layout/Hero";
import Projects from "./layout/Projects";
import Skills from "./layout/Skills";
import ThanksMessage from "./utils/ThanksMessage";

function App() {
  //show a thank you message in the console
  ThanksMessage;

  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </>
  );
}

export default App;
