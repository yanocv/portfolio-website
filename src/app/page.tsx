import About from "./components/About";
import Hero from "./components/Hero";
import Main, { SectionProps } from "./components/Main";

export default function Home(): JSX.Element {
  const sections: SectionProps[] = [
    {
      id: "about",
      children: <About />,
    },
  ];

  return (
    <>
      <Hero />
      <Main sections={sections} />
    </>
  );
}
