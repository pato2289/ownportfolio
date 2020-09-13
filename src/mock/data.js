import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Patricio Bordenave', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! my name is',
  name: 'Patricio Bordenave',
  subtitle: "I'm React Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilePicture.jpg',
  paragraphOne:
    'I am a react developer born in Buenos Aires, Argentina. I discovered the world of programming after my time in college, and from that moment, I have been practicing every day',
  paragraphTwo:
    'The language I like the most is Javascript, and more precisely working with React (I love hooks)',
  paragraphThree:
    'Some of my knowledges are: Html-Css-Js-React-MaterialUi-Gatsby-NextJs-Bootstrap-Tailwind-Firebase',
  resume: 'https://pdf.ac/mhw0Y', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'rickandmorty.png',
    title: 'Rick and Morty searcher',
    info:
      'App with 3 filters to search any Rick and Morty Character, Location or Episode with extra data when you click the text',
    info2: 'React - Graphql - Apollo - Material Ui',
    url: 'https://puzzlereact.vercel.app/',
    repo: 'https://github.com/pato2289/puzzleChallenge', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gastoshogar.png',
    title: 'Expense control',
    info:
      'App to add, edit, delete, and control your finances. to Test: user:prueba@prueba, password:prueba ',
    info2: 'NextJs, Firebase, Tailwind css',
    url: 'https://gastoshogar.vercel.app/',
    repo: 'https://github.com/pato2289/gastoshogar', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sorteos.png',
    title: 'Random World',
    info: 'App to do draws, build teams, and assigning tasks',
    info2: 'React, Bootstrap',
    url: 'https://sorteos.now.sh/',
    repo: 'https://github.com/pato2289/sorteos', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'coursesearch.png',
    title: 'Course searcher',
    info: 'App to search on a Courses Api',
    info2: 'React, Bootstrap, Axios',
    url: 'https://task1-one.now.sh/',
    repo: 'https://github.com/pato2289/task1', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Send email',
  email: 'patriciofbordenave@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/patriciobordenave/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/pato2289',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
