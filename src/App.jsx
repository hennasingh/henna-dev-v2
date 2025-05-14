import "./App.css";
import Header from "./components/header";
import Intro from "./components/Intro";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Services />
      <AboutMe />
    </>
  );
};

export default App;
