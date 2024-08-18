import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Counters from "./Counters";
import Contact from "./Contact";

const MainLayout: React.FC = (): JSX.Element => {
  return (
    <main id="main" className="site-main">
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Counters />
      <Contact />
    </main>
  );
};

export default MainLayout;
