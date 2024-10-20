import About from "./components/About";
import Hero from "./components/Hero";
import Main, { SectionProps } from "./components/Main";
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
  ];

  return (
    <>
      <Hero />
      <Main sections={sections} />
    </>
  );
}
