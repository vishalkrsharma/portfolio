import { FC } from 'react';
import styles from '@/scss/components/Skills.module.scss';

const Skills: FC = () => {
  return (
    <div>
      <div className={styles.header}>Skills</div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.label}>
              <div className={styles.data}>Programming Languages</div>
            </td>
            <td>
              <div className={styles.data}>
                C<br /> C++
                <br /> Java
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
              <div className={styles.data}>Tech Stack</div>
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
                Data Structures and Algorithms
                <br />
                MySQL
                <br />
                Linux
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
