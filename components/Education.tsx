import styles from '@/scss/components/Education.module.scss';

const Education = () => {
  return (
    <section>
      <div className={styles.header}>Education</div>
      <table
        className={styles.table}
        cellSpacing='0'
        cellPadding='0'
      >
        <tbody>
          <tr>
            <td className={styles.label}>
              <div className={styles.data}>2020-present</div>
            </td>
            <td>
              <div className={styles.data}>
                Techno International New Town
                <br />
                B.Tech in Computer Science & Engineering
              </div>
            </td>
          </tr>
          <tr>
            <td className={styles.label}>
              <div className={styles.data}>2008-2020</div>
            </td>
            <td>
              <div className={styles.data}>
                Maria&apos;s Day School
                <br />
                Higher Secondary & Secondary
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Education;
