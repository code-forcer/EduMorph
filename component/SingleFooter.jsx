import styles from './SingleFooter.module.css';

import { FaTwitter, FaInstagram, FaLinkedin, FaFacebookF, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Quick Links */}
        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        
        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <h3>Contact</h3>
          <p>Email: support@EduMorph</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        
        {/* Social Links */}
        <div className={styles.socialLinks}>
          <h3>Follow Us</h3>
          <a href="#">Facebook <FaFacebook/></a>
          <a href="#">Twitter <FaTwitter/></a>
          <a href="#">LinkedIn <FaLinkedin/></a>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>© 2023 <span>EduMorph</span>. All Rights Reserved</p>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
