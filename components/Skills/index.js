import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { SkillsWrapper } from './skills-styled';

const DynamicCardComponent = dynamic(() => import('../Card'));
const DynamicProgressBarComponent = dynamic(() => import('../ProgressBar'));

const Skills = ({ profile, theme }) => (
    <DynamicCardComponent title="Skills">
        <SkillsWrapper>
            {profile.skills.map((skill) => (
                <div key={`${skill.id}`}>
                    <div>&bull; {skill.label}</div>{' '}
                    <DynamicProgressBarComponent
                        completed={skill.rate}
                        bgcolor={skill.color}
                        textcolor={theme.text}
                    />
                </div>
            ))}
        </SkillsWrapper>
    </DynamicCardComponent>
);

Skills.propTypes = {
    profile: PropTypes.objectOf(PropTypes.any).isRequired,
    theme: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withTheme(Skills);
