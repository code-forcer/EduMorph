"use client";
import Image from 'next/image';
import illustration from '/public/illustrations.png'; // Ensure the illustration is in the public folder
import styles from './page.module.css';
import Link from 'next/link';
import Footer from '../../component/Footer';

import SingleHeader from '../../component/SingleHeader';
export default function ChooseRole() {
  return (
    <>
      <SingleHeader/>
      <div className={styles.container}>
      <h2 className={styles.heading}>Choose your role, start here for the excited journey!.</h2>
      <div className={styles.card}>
        <h1 className={styles.title}>Excited to learn or ready to teach?</h1>
        <p className={styles.subtitle}>Discover tailored educational content for every</p>
        <div className={styles.illustration}>
          <Image src={illustration} alt="Illustration of person studying on computer" width={150} height={150} />
        </div>
        <div className={styles.buttonContainer}>
          <Link href='/home'><button className={styles.getStartedButton}>Get Started</button>
          </Link>
      </div>

        <p className={styles.footerText}>Explore educational content on the go!</p>
      </div>
      </div>
      <Footer/>
    </>
  );
}
