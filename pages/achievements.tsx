import styles from '@/styles/ArticlesPage.module.css';
import achievements from '@/data/achievements.json';

const AchievementsPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Achievements</h1>
      <p className={styles.pageSubtitle}>
        Here are some of the achievements I am proud of.
      </p>
      <div className={styles.container}>
        {achievements.map((achievement, index) => (
          <div key={index} className={styles.skillCard}>
            <h2>{achievement.title}</h2>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;