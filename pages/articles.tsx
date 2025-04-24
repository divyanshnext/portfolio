import styles from '@/styles/ArticlesPage.module.css';
import Image from 'next/image';

const SkillsPage = () => {
  const skills = [
    { name: 'JavaScript', icon: '/logos/js_icon.svg' },
    { name: 'TypeScript', icon: '/logos/json_icon.svg' },
    { name: 'React', icon: '/logos/react_icon.svg' },
    { name: 'Next.js', icon: '/logos/react_icon.svg' },
    { name: 'Node.js', icon: '/logos/js_icon.svg' },
    { name: 'CSS', icon: '/logos/css_icon.svg' },
    { name: 'HTML', icon: '/logos/html_icon.svg' },
    { name: 'Git', icon: '/logos/vscode_icon.svg' },
    { name: 'REST APIs', icon: '/logos/json_icon.svg' },
    { name: 'GraphQL', icon: '/logos/json_icon.svg' },
  ];

  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Skills</h1>
      <p className={styles.pageSubtitle}>
        Here are some of the technical skills I have acquired over the years.
      </p>
      <div className={styles.container}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <Image
              src={skill.icon}
              alt={skill.name}
              width={40}
              height={40}
              className={styles.skillIcon}
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

SkillsPage.displayName = 'SkillsPage';

export default SkillsPage;
