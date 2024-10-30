import styles from './Hero.module.css'; // Make sure to create this CSS module

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to EduMorphNFT</h1>
        <p className={styles.heroSubtitle}>
          Empowering the next generation of creators through our exclusive NFT scholarship program.
        </p>
        <p className={styles.heroDescription}>
          Join us in revolutionizing education with blockchain technology. Mint your scholarship NFT today and unlock endless opportunities!
        </p>
      </div>
    </section>
  );
};

export default Hero;
