import { motion } from 'framer-motion';

import { styles } from 'src/styles';
import { textVariant } from 'utils/motion';

const SectionHeader = ({ subText, HeadText, isAnimated = true }) => {
  return isAnimated ? (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>{subText}</p>
      <h2 className={styles.sectionHeadText}>{HeadText}</h2>
    </motion.div>
  ) : (
    <>
      <p className={styles.sectionSubText}>{subText}</p>
      <h2 className={styles.sectionHeadText}>{HeadText}</h2>
    </>
  );
};

export default SectionHeader;
