import PropTypes from 'prop-types';

import { transformWorkTitle } from '../../common/helper';
import { Stepper } from './work-experience-styled';

const WorkExperience = ({ profile: { workExperience } }) => (
    <>
        <strong>EXPERIENCE</strong>
        <Stepper>
            {workExperience.map((work) => (
                <li key={work.id}>
                    <time dateTime={work.date} />
                    <div>
                        <img
                            alt="logo"
                            src={work.companyLogo}
                            blurDataURL={work.companyLogo}
                            width="56px"
                            height="56px"
                            placeholder="blur"
                        />
                        <strong>{transformWorkTitle(work)}</strong>
                        <span>{work.position}</span>

                        <aside>
                            <p>{work.description}</p>
                        </aside>
                    </div>
                </li>
            ))}
        </Stepper>
    </>
);

WorkExperience.propTypes = {
    profile: PropTypes.objectOf(PropTypes.any).isRequired
};

export default WorkExperience;
