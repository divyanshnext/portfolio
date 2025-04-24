import React, { memo } from 'react';
import Image from 'next/image';

import styles from '@/styles/ThemeInfo.module.css';

interface ThemeInfoProps {
  icon: string;
  name: string;
  publisher: string;
  theme: string;
}

const ThemeInfo = memo(({ icon, name, publisher, theme }: ThemeInfoProps) => {
  const handleSetTheme = () => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={icon}
          alt={`${name} logo`}
          width={80}
          height={80}
          className={styles.themeImage}
        />
      </div>
      <div className={styles.info}>
        <div>
          <h3>{name}</h3>
          <h5>{publisher}</h5>
        </div>
        <button onClick={handleSetTheme} className={styles.setThemeButton}>
          Set Color Theme
        </button>
      </div>
    </div>
  );
});

ThemeInfo.displayName = 'ThemeInfo';

export default ThemeInfo;
