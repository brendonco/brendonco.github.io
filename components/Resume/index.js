import PropTypes from 'prop-types';

import Articles from '../Articles';
import Books from '../Books';
import Contact from '../Contact';
import Header from '../Header';
import Skills from '../Skills';
import Travel from '../Travel';
import WorkExperience from '../WorkExperience';
import { ResumeWrapper } from './resume-styled';

const Resume = ({ profile }) => (
    <ResumeWrapper>
        <Header profile={profile} />
        <Contact profile={profile} />
        <WorkExperience profile={profile} />
        <Skills profile={profile} />
        <Books profile={profile} />
        <Articles profile={profile} />
        <Travel profile={profile} />
    </ResumeWrapper>
);

Resume.propTypes = {
    profile: PropTypes.objectOf(PropTypes.any)
};

export default Resume;
