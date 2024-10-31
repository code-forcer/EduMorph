"use client";
import React from 'react';
import styles from '../scholarship.module.css';
import SingleFooter from '../../../component/SingleFooter';
import SingleHeader from '../../../component/SingleHeader';

const ScholarshipPage = () => {
  return (

    <div className={styles.container}>
      <SingleHeader/>
      <header className={styles.header}>
        <h1>Apply for a Scholarship</h1>
        <p>Unlock new opportunities by applying for scholarships tailored to your NFT profile. Fill in the form below to get started.</p>
      </header>

      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Full Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
        </div>

        <select className={styles.select}>
          <option value="">Choose NFT Criteria</option>
          <option value="Art">Art</option>
          <option value="Technology">Technology</option>
          <option value="Education">Education</option>
        </select>

        <div className={styles.checkboxContainer}>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">Agree to Terms and Conditions</label>
        </div>

        <button type="submit" className={styles.submitButton}>Submit Application</button>
      </form>

      <section className={styles.showcase}>
        <h2>Your NFT Showcase</h2>
        <div className={styles.nftGrid}>
          <div className={styles.nftItem}>
            <img src="/illustrations.png" alt="Futuristic Cityscape" />
            <p>Futuristic Cityscape</p>
          </div>
          <div className={styles.nftItem}>
            <img src="/illustrations.png" alt="Abstract Swirls" />
            <p>Abstract Swirls</p>
          </div>
          <div className={styles.nftItem}>
            <img src="/illustrations.png" alt="Mythical Beast" />
            <p>Mythical Beast</p>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>Testimonials</h2>
        <div className={styles.testimonial}><img src='/illustrations.png'/>
          <p>“The scholarship I received through EduMorph helped me advance my studies and explore new NFT projects.” - Emily Tran</p>
        </div>
        <div className={styles.testimonial}>
          <img src='/illustrations.png'/>
          <p>“Thanks to the scholarship, I was able to attend workshops and enhance my NFT skills.” - Alex Kim</p>
        </div>
      </section>

     <SingleFooter/>
    </div>
  );
};

export default ScholarshipPage;
