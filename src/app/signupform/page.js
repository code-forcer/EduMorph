import Footer from '../../../component/Footer';
import styles from '../SignUpForm.module.css';
import { FaGoogle,FaFacebook } from 'react-icons/fa';
export default function SignUpForm() {
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title}>Get started for free</h1>
      <p className={styles.subtitle}>
        Unlock a week of uninterrupted learning.<br />
        Flexible subscription.
      </p>
      <form className={styles.form}>
        <input type="text" placeholder="Enter your full name" className={styles.input} />
        <input type="text" placeholder="Choose a unique username" className={styles.input} />
        <input type="password" placeholder="Create a password" className={styles.input} />
        <input type="password" placeholder="Confirm your password" className={styles.input} />
        <button type="submit" className={styles.joinButton}>Join now</button>
        </form>
        
        <p className={styles.orText}>or sign up with</p>
        <p className={styles.signInText}>
        Already part of the community? <a href="/loginform">Sign in.</a>
      </p>
      <div className={styles.socialButtons}>
        <button className={styles.socialButton}><FaGoogle className={styles.icons}/>Google</button>
        <button className={styles.socialButton}><FaFacebook className={styles.icons}/>Facebook</button>
      </div>
      </div>
      <Footer />
      </>
  );
}
