import Card from '../Card';
import ProgressBar from '../ProgressBar';
import { SkillsWrapper } from './skills-styled';

const Skills = ({ profile }) => (
  <Card title="Skills">
      <SkillsWrapper>
      {profile.skills.map((skill) => (
              <div key={`${skill.id}`}>
                  <div>&bull; {skill.label}</div>
                  {' '}
                  <ProgressBar completed={skill.rate} bgcolor={skill.color} />
                </div>
            ))}
    </SkillsWrapper>
    </Card>
);

export default Skills;
