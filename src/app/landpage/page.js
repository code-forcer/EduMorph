"use client";
import { useState } from 'react';
import styles from '../landpage.module.css';

import SingleHeader from '../../../component/SingleHeader';
import SingleFooter from '../../../component/SingleFooter';

export default function Home() {

  return (
    <div className={styles.container}>
      <SingleHeader/>
      {/* Main Content */}
      <div className={styles.searchContainer}>
        <input type="text" className={styles.searchInput} placeholder="Search for courses..." />
      </div>
      {/* Course Cards */}
      <section className={styles.courseSection}>
        <div className={styles.courseCard}>
          <img src="/3776369.jpg" alt="Demo Course" className={styles.courseImage} />
          <h2 className={styles.courseTitle}>Demo Course</h2>
          <p className={styles.courseDescription}>Explore the depths of modern education with this comprehensive demo course.</p>
          <button className={styles.accessButton}>Access Course</button>
        </div>
        <div className={styles.courseCard}>
          <img src="/8544601.jpg" alt="Advanced Learning" className={styles.courseImage} />
          <span className={styles.comingSoonBadge}>Coming Soon</span>
          <h2 className={styles.courseTitle}>Advanced Learning</h2>
        </div>
        <div className={styles.courseCard}>
          <img src="/six.jpg" alt="Innovation in Education" className={styles.courseImage} />
          <span className={styles.comingSoonBadge}>Coming Soon</span>
          <h2 className={styles.courseTitle}>Innovation in Education</h2>
        </div>
      </section>
      <SingleFooter/>
    </div>
  );
}
