export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'QuizMaster',
    description:
      'Attempt quizzes provided by your professors. A portal for you to attempt any quiz.',
    logo: '/logos/driwwwle.svg',
    link: 'https://github.com/divyanshnextiitm/mad1-project',
    slug: 'quizMaster',
  },
  {
    title: 'VSCode Portfolio',
    description:
      'A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/divyanshnext/portfolio',
    slug: 'vscode-portfolio',
  },
];
