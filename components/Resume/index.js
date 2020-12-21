import Header from '../Header';
import Contact from '../Contact';
import Skills from '../Skills';
import Books from '../Books';
import { ResumeWrapper } from './resume-styled';

const Resume = ({ profile }) => (
    <ResumeWrapper>
        <Header profile={profile} />
        <Contact profile={profile}/>
        <Skills profile={profile} />
        <Books profile={profile} />
    </ResumeWrapper>
);

export default Resume;