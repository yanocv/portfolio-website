import "../styles/Skills.css";
import SkillItem from "./SkillItem";

const Skills: React.FC = (): JSX.Element => {
  return (
    <section className="section-skills">
      <div className="container text-center">
        <h3>My Skills</h3>
        <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
        <div className="row">
          <div className="col-md-4">
            <SkillItem name="HTML" progress={90} />
            <SkillItem name="SCSS/CSS" progress={90} />
          </div>
          <div className="col-md-4">
            <SkillItem name="Javascript" progress={90} />
            <SkillItem name="TypeScript" progress={70} />
          </div>
          <div className="col-md-4">
            <SkillItem name="ReactJS" progress={80} />
            <SkillItem name="Vue3" progress={25} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
