import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Services />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
