import { VerticalTimeline } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import { experiences } from 'constants';
import SectionWrapper from 'hoc/section-wrapper';
import SectionHeader from 'components/shared/section-header';
import ExperienceCard from './experience-card';

const Experience = () => {
  return (
    <>
      <SectionHeader
        subText={'What I have done so far'}
        HeadText={'Work Experience'}
      />
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences?.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
