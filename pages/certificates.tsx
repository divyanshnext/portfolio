import styles from '@/styles/ArticlesPage.module.css';
import certificates from '@/data/certificates.json';

const CertificatesPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Certificates</h1>
      <p className={styles.pageSubtitle}>
        Here are some of the certifications I have achieved over the years.
      </p>
      <div className={styles.container}>
        {certificates.map((certificate, index) => (
          <div key={index} className={styles.skillCard}>
            <h2>{certificate.title}</h2>
            <p>{certificate.organization}</p>
            <p>{certificate.duration}</p>
            {certificate.description && (
              <ul>
                {certificate.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            )}
            <img
              src={certificate.image}
              alt={certificate.title}
              className={styles.certificateImage}
            />
            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesPage;