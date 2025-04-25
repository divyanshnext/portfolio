import styles from '@/styles/CertificatesPage.module.css';
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
          <div key={index} className={styles.certificateCard}>
            <img
              src={certificate.image}
              alt={certificate.title}
              className={styles.certificateImage}
            />
            <h2 className={styles.certificateTitle}>{certificate.title}</h2>
            <p>{certificate.organization}</p>
            <p>{certificate.duration}</p>
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certificateLink}
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesPage;
