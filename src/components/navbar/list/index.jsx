import { navLinks } from 'constants';

const NavbarList = ({
  ulStyle = '',
  liStyle = '',
  active = false,
  isHome = false,
  isMobile = false,
  onClick = () => {},
}) => {
  return (
    <ul className={ulStyle}>
      {navLinks?.map((item, index) => (
        <li
          key={index}
          className={`${
            active === item?.title ? 'text-white' : 'text-secondary'
          } ${liStyle}`}
          onClick={() => onClick(item?.title, isHome, isMobile)}
        >
          <a href={`#${item?.id}`}>{item?.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarList;
