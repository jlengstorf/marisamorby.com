import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import useLocation from '../hooks/use-location';

const Nav = ({ navLinks }) => {
  const { location } = useLocation();
  const [currentSection, setCurrentSection] = useState(
    location.hash ? location.hash.replace('#', '') : '',
  );

  const handleClick = event => {
    // we only want to do fancy scrolly stuff on the home page
    if (location.pathname !== '/') {
      return;
    }

    event.preventDefault();
    const nextPage = event.target.href.replace(window.location.origin, '');
    const sectionID = nextPage.replace('/#', '');

    if (!nextPage.startsWith('/#')) {
      navigate(nextPage);
      return;
    }

    document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth' });
    setCurrentSection(sectionID);
  };

  return (
    <nav>
      {navLinks.map(link => (
        <Link
          key={`navlink-${link.path}`}
          to={link.path}
          onClick={handleClick}
          className={
            currentSection && link.path.includes(currentSection)
              ? 'active'
              : null
          }
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
