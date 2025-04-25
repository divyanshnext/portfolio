import Image from 'next/image';
import styles from '@/styles/ProjectsPage.module.css';

const education = [
  {
    institution: 'Indian Institute of Technology, Madras',
    degree: 'BS - Data Science and Applications',
    location: 'Chennai, India',
    duration: 'Jan 2023 - Apr 2027',
    logo: '/logos/iitm_logo.png',
  },
  {
    institution: 'Lovely Professional University, Phagwara',
    degree: 'B.Tech - Computer Science and Engineering',
    location: 'Punjab, India',
    duration: 'Aug 2022 - Apr 2026',
    logo: '/logos/lpu_logo.jpg',
  },
];

const EducationPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Education</h1>
      <p className={styles.pageSubtitle}>Here is my educational background.</p>
      <div className={styles.container}>
        {education.map((edu, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={edu.logo}
              alt={edu.institution}
              className={styles.logo}
              width={100}
              height={100}
            />
            <h2>{edu.institution}</h2>
            <p>{edu.degree}</p>
            <p>{edu.location}</p>
            <p>{edu.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
