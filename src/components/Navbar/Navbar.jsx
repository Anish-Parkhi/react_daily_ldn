import React, { useEffect, useState } from 'react';
import burger from '../../assets/menu.png';
import styles from './Navbar.module.css';
function Navbar() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [open, setIsOpen] = useState(false);
  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', updateWindowSize);
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  return (
    <div>
      <nav className={styles.navbarMainContainer}>
        {windowSize > 600 ? (
          <ul className={styles.listMainContainer}>
            <li>Home</li>
            <li>News</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        ) : (
          <>
            <ul className={styles.listMainContainer}>
              <li style={{ flexBasis: '10%' }}>Home</li>
              <li
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
                style={{ flexBasis: '10%' }}
              >
                <img
                  className={styles.imageContainer}
                  src={burger}
                  alt="menu"
                />
              </li>
            </ul>
            {open ? (
              <div>
                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    listStyle: 'none',
                    fontSize: '1.8rem',
                    gap: '1rem',
                    padding: '1.9rem',
                    paddingTop: '0rem',
                    marginTop: '0px',
                  }}
                >
                  <li>News</li>
                  <li>Contacts</li>
                  <li>About</li>
                </ul>
              </div>
            ) : null}
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
