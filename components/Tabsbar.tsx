import React, { memo } from 'react';
import Tab from '@/components/Tab';

import styles from '@/styles/Tabsbar.module.css';

const Tabsbar = memo(() => {
  const tabs = [
    { icon: '/logos/react_icon.svg', filename: 'home.tsx', path: '/' },
    { icon: '/logos/html_icon.svg', filename: 'about.html', path: '/about' },
    { icon: '/logos/js_icon.svg', filename: 'projects.js', path: '/projects' },
    { icon: '/logos/json_icon.svg', filename: 'skills.json', path: '/articles' },
    { icon: '/logos/json_icon.svg', filename: 'certificates.json', path: '/certificates' },
    { icon: '/logos/json_icon.svg', filename: 'achievements.json', path: '/achievements' },
    { icon: '/logos/json_icon.svg', filename: 'education.json', path: '/education' },
    { icon: '/logos/markdown_icon.svg', filename: 'github.md', path: '/github' },
    { icon: '/logos/css_icon.svg', filename: 'contact.css', path: '/contact' },
  ];

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <Tab key={tab.path} icon={tab.icon} filename={tab.filename} path={tab.path} />
      ))}
    </div>
  );
});

Tabsbar.displayName = 'Tabsbar';

export default Tabsbar;
