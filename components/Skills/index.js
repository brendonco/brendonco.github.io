import Card from '../Card';
import { SkillsWrapper } from './skills-styled';

const Skills = ({ profile }) => (
    <Card title="Skills">
        <SkillsWrapper>
            {
                profile.skills.map((skill, idx) => (
                <span key={`${skill}-idx`}>&bull; {skill}</span>
                ))
            }
        </SkillsWrapper>
    </Card>

);

export default Skills;