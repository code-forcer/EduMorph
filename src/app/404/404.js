import Link from 'next/link';
import styles from '../Custom404.module.css';  // Assuming you'll create this CSS module

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          src="/img/illustrations.png"  // Replace with your actual image path
          alt="404 Not Found"
          className={styles.image}
        />
        <h1>Oops! Page Not Found</h1>
        <p>It looks like the page you're looking for doesn't exist.</p>
              <Link href="/" className={styles.backHome}>
                  Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
