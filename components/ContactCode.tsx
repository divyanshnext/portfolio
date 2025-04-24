import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'divyanshkrchaturvedi.com',
    href: 'https://divyanshkrchaturvedi.com',
  },
  {
    social: 'email',
    link: 'divyanshchaturvedi317@gmail.com',
    href: 'mailto:divyanshchaturvedi317@gmail.com',
  },
  {
    social: 'github',
    link: 'divyanshnext',
    href: 'https://github.com/divyanshnext',
  },
  {
    social: 'linkedin',
    link: 'divyanshnext',
    href: 'https://www.linkedin.com/in/divyanshnext/',
  },
  {
    social: 'twitter',
    link: 'divyanshnext',
    href: 'https://www.twitter.com/divyanshnext',
  },
  {
    social: 'telegram',
    link: 'next',
    href: 'https://t.me/next',
  },
  {
    social: 'peerlist',
    link: 'dyc',
    href: 'https://peerlist.io/dyc',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
