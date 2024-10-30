// pages/index.js

"use client";

import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styles from '../home.module.css';

import SingleHeader from '../../../component/SingleHeader';
import SingleFooter from '../../../component/SingleFooter';
import Hero from '../../../component/Hero';
export default function Home() {
  return (
    <div>
      
      <SingleHeader />
      <Hero/>
      {/* Hero Section */}
      <section className={styles.heroSection}>
              <div className={styles.container}><br/><hr/>
          <div className={styles.benefitCards}>
            <div className={styles.cardGreen}>
              <span className={styles.comingSoonBadge}>Coming Soon</span>
              <img src="/illustrations.png" alt="Creator" className={styles.icon} />
              <h2 className={styles.cardTitle}>Creator</h2>
              <p className={styles.cardText}>
                Unleash your creativity and share your educational content with the world. Coming soon to{' '}
                <a href="#" className={styles.link}>EduMorph.Design</a>.
              </p>
            </div>
            <div className={styles.cardWhite}>
              <img src="/illustrations.png" alt="Learner" className={styles.icon} />
              <h2 className={styles.cardTitle}>Learner</h2>
              <p className={styles.cardText}>
                Join the community of learners and start your educational journey with{' '}
                <a href="#" className={styles.link}>EduMorph.Design</a>.
              </p>
              <button className={styles.signUpButton}>Sign Up</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className={styles.whyJoinSection}>
        <div className={styles.container}>
          <h2 className={styles.whyJoinTitle}>Why Join as a Learner?</h2>
          <p className={styles.whyJoinText}>
            As a Learner at <span className={styles.highlightedText}>EduMorph.Design</span>, you gain access to a world of educational resources, personalized learning paths, and a supportive community. Plus, you earn a unique Dynamic NFT to showcase your educational progress and achievements.
          </p>
          <div className={styles.benefitCards}>
            <div className={styles.benefitCard}>
              <img src="/illustrations.png" alt="Certified Progress" className={styles.icon} />
              <h3 className={styles.cardTitle}>Certified Progress</h3>
              <p className={styles.cardText}>
                Track your learning milestones and achievements with our unique NFT system.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <img src="/illustrations.png" alt="Community Support" className={styles.icon} />
              <h3 className={styles.cardTitle}>Community Support</h3>
              <p className={styles.cardText}>
                Engage with a vibrant community of learners and educators.
              </p>
            </div>
          </div>
        </div>
      </section>

     <SingleFooter/>
    </div>
  );
}
