import { motion } from 'framer-motion';
import { fadeIn } from 'utils/motion';

const SectionDescription = ({ description, isAnimated = true }) => {
  return isAnimated ? (
    <motion.p
      variants={fadeIn('', '', 0.1, 1)}
      className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      {description}
    </motion.p>
  ) : (
    <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
      {description}
    </p>
  );
};

export default SectionDescription;
