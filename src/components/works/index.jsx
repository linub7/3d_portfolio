import { useState } from 'react';

import SectionWrapper from 'hoc/section-wrapper';
import { projects } from 'constants';
import SectionHeader from 'components/shared/section-header';
import ProjectCard from './project-card';
import SectionDescription from 'components/shared/section-description';

const Works = () => {
  const [activeField, setActiveField] = useState('');
  const handleFilter = (field) => setActiveField(field);
  const filterProjects = projects?.filter((el) => el.field === activeField);
  return (
    <>
      <SectionHeader
        subText={'My Works'}
        HeadText={'Projects'}
        isAnimated={false}
      />
      <div className="w-full flex">
        <SectionDescription
          description={`I have a a lot of projects includes clones and other projects. I developed both backend side and client side, using different skills like redux, context custom hooks and others things. You can see every project github source code`}
          isAnimated={false}
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-20 mt-10 mb-10 w-full">
        <p
          className={`cursor-pointer ${
            activeField === '' ? 'orange-text-gradient font-bold' : ''
          }`}
          onClick={() => handleFilter('')}
        >
          All
        </p>
        <p
          className={`cursor-pointer ${
            activeField === 'react' ? 'orange-text-gradient font-bold' : ''
          }`}
          onClick={() => handleFilter('react')}
        >
          React
        </p>
        <p
          className={`cursor-pointer ${
            activeField === 'next' ? 'orange-text-gradient font-bold' : ''
          }`}
          onClick={() => handleFilter('next')}
        >
          Next
        </p>
        <p
          className={`cursor-pointer ${
            activeField === 'react native'
              ? 'orange-text-gradient font-bold'
              : ''
          }`}
          onClick={() => handleFilter('react native')}
        >
          React native
        </p>
        <p
          className={`cursor-pointer ${
            activeField === 'UI/UX' ? 'orange-text-gradient font-bold' : ''
          }`}
          onClick={() => handleFilter('UI/UX')}
        >
          UI/UX
        </p>
      </div>
      <div className="mt-12 flex flex-wrap gap-7">
        {activeField === ''
          ? projects
              ?.map((item, index) => <ProjectCard key={index} item={item} />)
              .sort(() => Math.random() - 0.5)
          : filterProjects?.map((item, index) => (
              <ProjectCard key={index} item={item} />
            ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
