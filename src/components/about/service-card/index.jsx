import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn } from 'utils/motion';

const ServiceCard = ({ index, service }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
          <img
            src={service?.icon}
            alt={service?.title}
            className="w-16 h-1/6 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {service?.title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
