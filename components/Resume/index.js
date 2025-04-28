import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

const DynamicArticlesComponent = dynamic(() => import('../Articles'));
const DynamicBooksComponent = dynamic(() => import('../Books'));
const DynamicCertificatesComponent = dynamic(() => import('../Certificates'));
const DynamicContactComponent = dynamic(() => import('../Contact'));
const DynamicHeaderComponent = dynamic(() => import('../Header'));
const DynamicSkillsComponent = dynamic(() => import('../Skills'));
const DynamicTravelComponent = dynamic(() => import('../Travel'));
const DynamicWorkExperienceComponent = dynamic(() => import('../WorkExperience'));
const DynamicTalkComponent = dynamic(() => import('../Talk'));

import { ResumeWrapper } from './resume-styled';

const Resume = ({ profile }) => (
    <ResumeWrapper className="content">
        <DynamicHeaderComponent profile={profile} />
        <DynamicContactComponent profile={profile} />
        <DynamicWorkExperienceComponent profile={profile} />
        <DynamicSkillsComponent profile={profile} />
        <DynamicBooksComponent profile={profile} />
        <DynamicCertificatesComponent profile={profile} />
        <DynamicArticlesComponent profile={profile} />
        <DynamicTalkComponent profile={profile} />
        <DynamicTravelComponent profile={profile} />
    </ResumeWrapper>
);

Resume.propTypes = {
    profile: PropTypes.objectOf(PropTypes.any)
};

export default Resume;
