import { Stepper } from './work-experience-styled';
import { transformWorkTitle } from '../../common/helper';

const WorkExperience = ({ profile: { workExperience } }) => (
  <>
  <strong>EXPERIENCE</strong>
  <Stepper>
      {
        workExperience.map(work => (
          <li key={work.id}>
            <time dateTime={work.date} />
            <div>
                <strong>{transformWorkTitle(work)}</strong>
                <span>{work.position}</span>

              <aside>
                  <p>
                    {work.description}
                  </p>
                </aside>
            </div>
          </li>
        ))
      }
    </Stepper>
  </>
);

export default WorkExperience;
