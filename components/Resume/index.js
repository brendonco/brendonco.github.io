import Header from '../Header';
import Contact from '../Contact';
import Skills from '../Skills';

const Resume = ({ profile }) => (
    <>
        <Header profile={profile} />
        <Contact profile={profile}/>
        <Skills profile={profile} />
    </>
);

export default Resume;