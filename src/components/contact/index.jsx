import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

import SectionWrapper from 'hoc/section-wrapper';
import { slideIn } from 'utils/motion';
import SectionHeader from 'components/shared/section-header';
import ContactInput from './input';
import EarthCanvas from 'components/canvas/Earth';
import ContactInfo from './info';

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);

  const handleChange = (e) => {
    const {
      target: { value, name },
    } = e;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        'service_nu2yyws',
        'template_u31iu6j',
        {
          from_name: values?.name,
          to: 'Muuhammad',
          from_email: values?.email,
          to_email: 'vuedev77@gmail.com',
          message: values?.message,
        },
        'hR_SX3n3W5V2K5E7F'
      );
      toast.success('Email sent.');
      setValues({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.log(error);
      toast.error('OOPS... Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <SectionHeader
          isAnimated={false}
          HeadText={'Contact'}
          subText={'Get in touch'}
        />
        <ContactInfo />
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <ContactInput
            label={'Your Name'}
            type={'text'}
            name={'name'}
            placeholder={'What is your name?'}
            value={values?.name}
            onChange={handleChange}
          />
          <ContactInput
            label={'Your Email'}
            type={'email'}
            name={'email'}
            placeholder={'What is your email?'}
            value={values?.email}
            onChange={handleChange}
          />
          <ContactInput
            label={'Your Message'}
            type={'text'}
            name={'message'}
            placeholder={'What do you want to say?'}
            value={values?.message}
            isTextarea={true}
            onChange={handleChange}
          />
          <button
            disabled={
              isLoading ||
              !values?.name?.trim() ||
              !values?.email?.trim() ||
              !values?.message?.trim()
            }
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {isLoading ? 'Sending...' : 'Send Email'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
