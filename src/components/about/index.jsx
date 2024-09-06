import { services } from 'constants';
import ServiceCard from './service-card';
import SectionWrapper from 'hoc/section-wrapper';
import SectionHeader from 'components/shared/section-header';
import SectionDescription from 'components/shared/section-description';

const About = () => {
  return (
    <>
      <SectionHeader subText={'Introduction'} HeadText={'Overview'} />
      <SectionDescription
        description={`I am Mohammad Hadi, a native Turkish speaker with proficiency in Farsi, English, and German. I am passionate about programming and continuously strive to expand my skillset. Currently, I am learning the Redis database and plan to explore Flutter development in the future. My dedication to learning is unwavering.`}
      />
      <div className="mt-20 flex flex-wrap gap-10">
        {services?.map((service, index) => (
          <ServiceCard key={index} index={index} service={service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
