import About from "./components/About";
import Hero from "./components/Hero";
import Main, { SectionProps } from "./components/Main";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";

export default function Home(): JSX.Element {
  const sections: SectionProps[] = [
    {
      id: "about",
      children: <About />,
    },
    {
      id: "skills",
      children: <Skills />,
    },
    {
      id: "service",
      children: <Services />,
    },
    {
      id: "portfolio",
      children: <Portfolio />,
    },
  ];

  return (
    <>
      <Hero />
      <Main sections={sections} />
    </>
  );
}
