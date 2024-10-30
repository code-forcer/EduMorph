import { useState, useEffect, useRef } from 'react';
import styles from './SingleHeader.module.css'; // Ensure to create this CSS module file
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing React Icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    // Add event listener to handle clicks outside the menu
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/globe.svg" alt="Logo" className={styles.logo} />
          <h1 className={styles.siteTitle}>EduMorph.Design</h1>
        </div>

        {/* Hamburger Icon */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links for Desktop */}
        <nav className={styles.desktopMenu}>
          <a href="/home" className={styles.navLinkDesktop}>Home</a>
          <a href="/coursemodule" className={styles.navLinkDesktop}>Courses</a>
          <a href="/profile" className={styles.navLinkDesktop}>Profile</a>
          <a href="/landpage" className={styles.navLinkDesktop}>Contact</a>
          <a href="/loginform" className={styles.navLinkDesktop}>Login</a>
          
        </nav>
      </header>

      {/* Slide-in Mobile Menu */}
      <nav ref={menuRef} className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <a href="/home" className={styles.navLinkMobile} onClick={closeMenu}>Home</a>
        <a href="/coursemodule" className={styles.navLinkMobile} onClick={closeMenu}>Courses</a>
        <a href="/profile" className={styles.navLinkMobile} onClick={closeMenu}>Profile</a>
        <a href="/landpage" className={styles.navLinkMobile} onClick={closeMenu}>Contact</a>
        <a href="/loginform" className={styles.navLinkMobile}>Login</a>
      </nav>
    </div>
  );
};

export default Header;
