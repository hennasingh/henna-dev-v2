import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Services />
      <AboutMe />
      <Footer />
    </>
  );
};

export default App;
