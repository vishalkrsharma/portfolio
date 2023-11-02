import styles from '@/scss/components/About.module.scss';

const About = () => {
  return (
    <section>
      <div className={styles.header}>About</div>
      <article className={styles.secondaryText}>
        I&apos;m a final year Computer Science undergraduate, possesses an impressive knack for crafting <span className={styles.highlight}>functional </span>
        and
        <span className={styles.highlight}> user-friendly websites</span> and <span className={styles.highlight}>web applications</span> with simple yet
        <span className={styles.highlight}> captivating designs</span>.
        <br />
        <br />
        When I&apos;m not at the working, I&apos;m on my cycle, or poping heads with my mouse.
      </article>
    </section>
  );
};

export default About;
