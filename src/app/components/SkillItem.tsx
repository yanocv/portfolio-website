import "../styles/SkillItem.css";

interface SkillItemProps {
  name: string;
  progress: number;
}

const SkillItem: React.FC<SkillItemProps> = ({
  name,
  progress,
}): JSX.Element => {
  return (
    <div className="skill">
      <h4 className="text-left">{name}</h4>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillItem;
