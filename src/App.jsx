import { Toaster } from 'react-hot-toast';

import Navbar from 'components/navbar';
import Hero from 'components/hero';
import About from 'components/about';
import Experience from 'components/experience';
import Tech from 'components/tech';
import Works from 'components/works';
// import Feedbacks from 'components/feedbacks';
import Contact from 'components/contact';
import StarsCanvas from 'components/canvas/Stars';

const App = () => {
  return (
    <>
      <Toaster />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  );
};

export default App;
