import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const ExperienceCard = ({ item }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={item?.date}
      iconStyle={{ background: item?.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full"></div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{item?.title}</h3>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {item?.points?.map((el, index) => (
            <li
              key={index}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
