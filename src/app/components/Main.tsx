export interface SectionProps {
  id: string;
  children: React.ReactNode;
}

interface MainProps {
  sections: SectionProps[];
}

const Main: React.FC<MainProps> = ({ sections }: MainProps): JSX.Element => {
  return (
    <main id="main" className="site-main">
      {sections.map((section) => (
        <section key={section.id} className="site-section">
          {section.children}
        </section>
      ))}
    </main>
  );
};

export default Main;
