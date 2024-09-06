import BallCanvas from 'components/canvas/Ball';
import { technologies } from 'constants';
import SectionWrapper from 'hoc/section-wrapper';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies?.map((el, index) => (
        <div key={index} className="w-28 h-28">
          <BallCanvas icon={el?.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
