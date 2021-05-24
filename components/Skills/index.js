import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

import { SkillsWrapper } from './skills-styled';

const DynamicCardComponent = dynamic(() => import('../Card'));
const DynamicProgressBarComponent = dynamic(() => import('../ProgressBar'));

const Skills = ({ profile }) => (
    <DynamicCardComponent title="Skills">
        <SkillsWrapper>
            {profile.skills.map((skill) => (
                <div key={`${skill.id}`}>
                    <div>&bull; {skill.label}</div>{' '}
                    <DynamicProgressBarComponent completed={skill.rate} bgcolor={skill.color} />
                </div>
            ))}
        </SkillsWrapper>
    </DynamicCardComponent>
);

Skills.propTypes = {
    profile: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Skills;
