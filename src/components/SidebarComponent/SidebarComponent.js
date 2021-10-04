import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import './Sidebar.css';
import Context from '../../Context';

import ToggleComponent from '../ToggleComponent/ToggleComponent';

function SidebarComponent() {
  const { themeDark } = useContext(Context);

  const linksClasses = themeDark ? 'links white-links' : 'links';
  return (
    <div
      className="sidebar"
      style={
        themeDark
          ? { backgroundColor: '#2b2b2b', color: '#fff' }
          : { backgroundColor: '#fff', color: '#000' }
      }
    >
      <img
        className="profile-img"
        src="https://images.pexels.com/photos/6468076/pexels-photo-6468076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="Me"
      />
      <h2 className="m0">Urbano Gonzalez</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor tempor tempor tempor incididunt ut labore et dolore magna aliqua.
        Ut Ut Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <section className={linksClasses}>
        <a
          href="https://twitter.com/urbandstorm79"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://github.com/urbandstorm79"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/signup"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </section>
      <ToggleComponent />
    </div>
  );
}

export default SidebarComponent;
