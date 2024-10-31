// pages/courseModules.jsx

"use client";
import Image from 'next/image';
import styles from '../coursemodule.module.css';
import SingleFooter from '../../../component/SingleFooter';

import SingleHeader from '../../../component/SingleHeader';

export default function CourseModulesPage() {
  return (
    <div className={styles.container}>
    <SingleHeader/>

      <main className={styles.main}>
        <section className={styles.modulesSection}>
          <h2 className={styles.sectionTitle}>Course Modules</h2>
          <div className={styles.moduleGrid}>
            <ModuleCard
              title="Module 1: Introduction to NFTs"
              description="Explore the basics of NFTs and their applications in modern technology."
              status="Completed"
              progress="100%"
            />
            <ModuleCard
              title="Module 2: Blockchain Fundamentals"
              description="Understand the underlying technology behind NFTs and cryptocurrencies."
              status="In Progress"
              progress="45%"
            />
            <ModuleCard
              title="Module 3: NFT Marketplaces"
              description="Discover how to trade and manage NFTs across various platforms."
              status="Not Started"
              progress="0%"
            />
            <ModuleCard
              title="Module 4: NFT Creation"
              description="Learn the process of creating unique NFTs from concept to execution."
              status="Not Started"
              progress="0%"
            />
          </div>
        </section>

        <aside className={styles.evolutionSection}>
          <h2 className={styles.sectionTitle}>Your NFT Evolution</h2>
          <Image
            src="/five.jpg" // Update this path
            alt="NFT Evolution"
            width={200}
            height={200}
            className={styles.avatar}
          />
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '45%' }}></div>
          </div>
          <p className={styles.progressText}>Progress: 45%</p>
        </aside>
      </main>

     <SingleFooter/>
    </div>
  );
}

function ModuleCard({ title, description, status, progress }) {
  return (
    <div className={styles.moduleCard}>
      <h3 className={styles.moduleTitle}>{title}</h3>
      <p className={styles.moduleDescription}>{description}</p>
      <p className={styles.moduleStatus}>{status}</p>
      <p className={styles.moduleProgress}>{progress}</p>
    </div>
  );
}
