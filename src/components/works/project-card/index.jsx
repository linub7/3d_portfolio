import { Tilt } from 'react-tilt';

import { github, url } from 'assets';

const ProjectCard = ({ item }) => {
  const handleNavigate = (path) => window.open(path, '_blank');
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={item?.image}
          alt={item?.name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          {item?.source_code_link_front && (
            <div
              onClick={() => handleNavigate(item?.source_code_link_front)}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer m-2"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          )}
          {item?.source_code_link_back && (
            <div
              onClick={() => handleNavigate(item?.source_code_link_back)}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer m-2"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          )}
          {item?.url && (
            <div
              onClick={() => handleNavigate(item?.url)}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer m-2"
            >
              <img src={url} alt="url" className="w-1/2 h-1/2 object-contain" />
            </div>
          )}
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{item?.name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{item?.description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {item?.tags?.map((tag, j) => (
          <p key={j} className={`text-[14px] ${tag?.color}`}>
            #{tag?.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

export default ProjectCard;
