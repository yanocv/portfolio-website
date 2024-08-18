import Image from "next/image";
import SkillItem from "./SkillItem";

const Skills: React.FC = (): JSX.Element => {
  return (
    <section className="site-section section-skills">
      <div className="container text-center">
        <h3>My Skills</h3>
        <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
        <div className="row">
          <div className="col-md-4">
            <SkillItem name="Html/css" progress={100} />
            <SkillItem name="Python" progress={75} />
          </div>
          <div className="col-md-4">
            <SkillItem name="Javascript" progress={82} />
            <SkillItem name="Ruby" progress={66} />
          </div>
          <div className="col-md-4">
            <SkillItem name="Php" progress={97} />
            <SkillItem name="Java" progress={45} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
