import styles from '@/scss/components/Skills.module.scss';

const Skills = () => {
  return (
    <section>
      <div className={styles.header}>Skills</div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.label}>
              <div className={styles.data}>Programming Languages</div>
            </td>
            <td>
              <div className={styles.data}>
                C++
                <br /> Java
                <br /> JavaScript <br /> TypeScript
              </div>
            </td>
          </tr>
          <tr>
            <td className={styles.label}>
              <div className={styles.data}>Cirrculum</div>
            </td>
            <td>
              <div className={styles.data}>
                DSA
                <br /> DBMS
                <br /> OOP
              </div>
            </td>
          </tr>
          <tr>
            <td className={styles.label}>
              <div className={styles.data}>Web Development</div>
            </td>
            <td>
              <div className={styles.data}>
                HTML
                <br /> CSS
                <br /> Javascript
                <br /> ReactJs
                <br /> NextJs
                <br /> NodeJs
                <br /> Jest
              </div>
            </td>
          </tr>
          <tr>
            <td className={styles.label}>
              <div className={styles.data}>Mobile App Development</div>
            </td>
            <td>
              <div className={styles.data}>ReactNative</div>
            </td>
          </tr>
          <tr>
            <td className={styles.label}>
              <div className={styles.data}>Web Dev Stack</div>
            </td>
            <td>
              <div className={styles.data}>MERN</div>
            </td>
          </tr>
          <tr>
            <td className={styles.label}>
              <div className={styles.data}>Version Control System</div>
            </td>
            <td>
              <div className={styles.data}>Git</div>
            </td>
          </tr>
          <tr>
            <td className={styles.label}>
              <div className={styles.data}>Others</div>
            </td>
            <td>
              <div className={styles.data}>
                MySql
                <br />
                MongoDB
                <br />
                Linux
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Skills;
