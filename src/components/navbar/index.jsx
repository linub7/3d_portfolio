import { useState } from 'react';
import { Link } from 'react-router-dom';

import { myLogo, menu, close } from 'assets';
import { styles } from 'src/styles';
import NavbarList from './list';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleSetActive = (el, isHome = false, isMobile = false) => {
    setActive(el);
    isHome && window.scrollTo(0, 0);
    isMobile && setToggle(false);
  };

  const handleToggle = () => setToggle((prev) => !prev);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={'/'}
          className="flex items-center gap-2"
          onClick={() => handleSetActive('', true, false)}
        >
          <img src={myLogo} alt="logo" className="w-14 h-14 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex items-center">
            Mohammad &nbsp;<span className="sm:block hidden">| Hadi</span>
          </p>
        </Link>
        <NavbarList
          active={active}
          ulStyle="list-none hidden sm:flex flex-row gap-10"
          liStyle="hover:text-white text-[18px] font-medium cursor-pointer"
          isHome={false}
          isMobile={false}
          onClick={(el, isHome, isMobile) =>
            handleSetActive(el, isHome, isMobile)
          }
        />
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={handleToggle}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <NavbarList
              ulStyle="list-none flex flex-col gap-4 justify-end items-start"
              liStyle="font-poppins font-medium cursor-pointer text-[16px]"
              active={active}
              isHome={false}
              isMobile={true}
              onClick={(el, isHome, isMobile) =>
                handleSetActive(el, isHome, isMobile)
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
