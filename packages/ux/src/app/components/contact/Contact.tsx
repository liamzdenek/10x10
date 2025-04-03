import * as React from 'react';
import styles from './Contact.module.css';

export interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.sectionTitle}>Contact Me</h1>
        
        <div className={styles.contactContent}>
          <p className={styles.contactText}>
            If you'd like to get in touch, you can reach me at my email address:
          </p>
          
          <p className={styles.emailHint}>
            <strong>my first/given name @ this domain</strong>
          </p>
          
          <p className={styles.contactText}>
            I'm always interested in connecting with like-minded folks.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;