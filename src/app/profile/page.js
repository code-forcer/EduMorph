// pages/profile.jsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import styles from '../profile.module.css';
import SingleFooter from '../../../component/SingleFooter';
import SingleHeader from '../../../component/SingleHeader';
export default function ProfilePage() {
  return (
    <div className={styles.container}>
      <SingleHeader/>

      <main className={styles.main}>
        <aside className={styles.sidebar}>
          <div className={styles.profileCard}>
            <div className={styles.profileImage}>
              <Image
                src="/cartoon-man-wearing-glasses (1).jpg" // Update this path
                alt="Profile Picture"
                width={100}
                height={100}
                className={styles.image}
              />
            </div>
            <h2 className={styles.profileName}>Alex Johnson</h2>
            <p className={styles.profileBio}>Passionate learner with a love for technology and design.</p>
            <button className={styles.editButton}>Edit Profile</button>
          </div>
        </aside>

        <section className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Progress Overview</h3>
            <div className={styles.graphPlaceholder}><Image src='/graph.jpg'  alt="Graph"
                width={120}
                height={120}/></div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Your NFTs</h3>
            <div className={styles.nftGrid}>
              <NFTCard title="Course Completion Badge" />
              <NFTCard title="Top Performer Badge" />
              <NFTCard title="Community Leader Badge" />
            </div>
          </div>
        </section>
      </main>
    <SingleFooter/>
    </div>
  );
}

function NFTCard({ title }) {
  return (
    <div className={styles.nftCard}>
      <h4 className={styles.nftTitle}>{title}</h4>
      <button className={styles.nftButton}>View</button>
    </div>
  );
}
