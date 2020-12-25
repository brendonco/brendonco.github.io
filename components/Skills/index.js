import Card from '../Card';
import { SkillsWrapper } from './skills-styled';
import ProgressBar from '../ProgressBar';

const Skills = ({ profile }) => (
    <Card title="Skills">
        <SkillsWrapper>
            {
                profile.skills.map((skill, idx) => (
                    <div key={`${skill}-idx`}>&bull; {skill.label} <ProgressBar completed={skill.rate} bgcolor={skill.color} /></div>
                ))
            }
        </SkillsWrapper>
    </Card>

);

export default Skills;