import Header from '../Header';
import Contact from '../Contact';
import Skills from '../Skills';
import { ResumeWrapper } from './resume-styled';

const Resume = ({ profile }) => (
    <ResumeWrapper>
        <Header profile={profile} />
        <Contact profile={profile}/>
        <Skills profile={profile} />
    </ResumeWrapper>
);

export default Resume;