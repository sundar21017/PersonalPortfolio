const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/sundar21017',
  title: 'SP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sundar',
  role: 'Full Stack Developer',
  description:
    'Highly skilled and experienced Full Stack Developer with 3 years of hands-on expertise in designing, developing, and implementing complex web applications. Proficient in both front-end and back-end technologies, adept at translating client requirements into scalable, reliable software solutions. Proven track record of collaborating with cross-functional teams to deliver projects on time and within budget.',
  resume: 'src/assets/Resume.pdf',
  social: {
    linkedin: 'www.linkedin.com/in/sundara-pandian-85ba0a19b',
    github: 'https://github.com/sundar21017',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Square Now',
    description:
      'SquareNow is our flagship product, designed to provide an all-encompassing solution for financial institutions. From monitoring field officers activities to seamlessly managing financial data and even creating balance sheets and profit and loss statements, SquareNow is the quintessential LMS that transforms the way lending institutions operate',
    stack: ['Angular Js', 'Javascript', 'Php'],
    sourceCode: '',
    livePreview: 'https://kapiital.com/index.php/project/squarenow/',
  },
  {
    name: 'Pookadai',
    description:
      'Pookadai is an one stop solution for your daily flower needs. With our solution we make your daily prayers really easy by giving the seemless experience of not just delivering the flower we take care of right flower on the right day. Download the Pookadai app on your phone',
    stack: ['React', 'Javascript', 'Php'],
    sourceCode: '',
    livePreview: 'https://pookadai.co.in/',
  },
  {
    name: 'Get It Now',
    description:
      'GetItNow product of Kapiital Kapslock is a mobile app-based platform that provides Instant loans for Salaried Professionals and College Students (from recognized educational institutions). The loans availed are instantly credited to your Bank account.',
    stack: ['React', 'Javascript', 'Php'],
    sourceCode: '',
    livePreview: 'https://getitnow.digital/',
  },
  {
    name: 'PaisaNow',
    description:
      'Our revolutionary PaisaNow is a marketplace application that ensures a complete phygital platform. It streamlines onboarding processes, verification, and application through a distributed ledger based on blockchain technology, ensuring security and efficiency in the lending process',
    stack: ['React', 'Javascript', 'Php'],
    sourceCode: '',
    livePreview: 'https://getitnow.digital/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React Js',
  'React Native',
  'Expo',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'Php',
  'Mysql',
  'Angular Js',
  'Rest API',
  'Context API',
  'Payment Gateway',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ssundar21017@gmail.com',
}

export { header, about, projects, skills, contact }
