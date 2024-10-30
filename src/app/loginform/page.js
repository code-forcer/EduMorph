import Footer from '../../../component/Footer';
import styles from '../SignUpForm.module.css';
import { FaGoogle,FaFacebook } from 'react-icons/fa';
export default function SignUpForm() {
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title}>Sign-In </h1>
      <p className={styles.subtitle}>
        Welcome, glad to have you back , sign-in to begin your session
      </p>
      <form className={styles.form}>
        <input type="text" placeholder="Enter your full name" className={styles.input} />

        <input type="password" placeholder="Confirm your password" className={styles.input} />
        <button type="submit" className={styles.joinButton}>Login</button>
        </form>
        <p className={styles.orText}>or sign-in with</p>
        <p className={styles.signInText}>
       Don't have an account? <a href="/signupform">Sign up.</a>
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
