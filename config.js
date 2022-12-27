module.exports = {
  pathPrefix: '',
  siteUrl: 'https://henrw.github.io',
  title: 'Muzhe Wu',
  description: 'Personal Website of Muzhe Wu',
  author: 'Muzhe Wu',
  authorAlternative: '吴沐哲',
  introduction: [
    'I am currently a senior student studying for a bachelor\'s degree in Computer Science at [University of Michigan](https://umich.edu/) and a dual degree in Electrical and Computer Engineering at [Shanghai Jiao Tong University](https://en.sjtu.edu.cn/).',
    'My research interest mainly lies in the interdisciplinary field of Human-Computer Interaction and Artificial Intelligence, in which I focus on creating intelligent interactive systems/agents that can learn from humans’ behaviors and respond in alignment with humans’ intents.',
    'I’m fortunate to have worked with Professors [Anhong Guo](https://guoanhong.com/), [Xu Wang](https://web.eecs.umich.edu/~xwanghci/), [Veronica Perez Rosas](https://vrncapr.engin.umich.edu/) through my undergraduate research.'
  ],
  avatar: 'avatar.png',
  professions: [
    'CSE Student',
    'HCI/AI Researcher'
  ],
  tocMaxDepth: 2,
  excerptMaxLength: 500,
  // birthday: 'Some day',
  location: 'Ann Arbor, MI',
  email: 'henrw@umich.edu',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  // disqusScript: process.env.DISQUS_SCRIPT
  //   || 'https://tc-imba.disqus.com/embed.js',
  pages: {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    research: 'research',
    projects: 'projects',
  },
  social: [
    {
      url: '/resume.pdf',
      icon: ['ai', 'cv'],
    }, {
      url: 'https://github.com/henrw',
      icon: ['fab', 'github'],
    }, {
      url: 'https://www.linkedin.com/in/muzhe-wu-573920223',
      icon: ['fab', 'linkedin'],
    }, {
      url: 'https://twitter.com/MuzheW',
      icon: ['fab', 'twitter'],
    }, {
      url: 'https://www.instagram.com/wumuzhe/',
      icon: ['fab', 'instagram'],
    },
  ],
  // facebook: 'https://www.facebook.com/rolwin.monteiro',
  // instagram: 'https://www.instagram.com/wumuzhe/',
  // rss: '/rss.xml',
  // wakatime: {
  //   username: 'tcimba',
  //   activity: '7add4047-08f9-4da8-b649-aa114503678f',
  //   language: '460a84ab-722a-4b80-b896-cabaa13ad7eb',
  //   editor: 'd851639a-28d8-4884-949f-d338a858f7e9',
  //   os: 'caf7d0d1-8fd2-4595-a991-363c8583fea9',
  // },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT
    || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  education: [
    {
      date: 'Aug 2021 - Present',
      icon: 'university',
      title: 'B.S. in Computer Science',
      location: 'University of Michigan',
    }, {
      date: 'Sep 2019 - Aug 2021',
      icon: 'university',
      title: 'B.S. in Electrical and Computer Engineering',
      location: 'Shanghai Jiao Tong University',
    }],
  interests: [
    {
      icon: 'universal-access',
      title: 'Human-Computer Interaction',
    },
    {
      icon: 'language',
      title: 'Natural Language Processing',
    },
    {
      icon: 'layer-group',
      title: 'Multimodal Learning',
    }
  ],
  experience: [
    {
      title: 'Labs',
      position: 'left',
      data: [
        {
          date: 'May 2022 - Present',
          title: 'Human-AI Lab',
          location: 'University of Michigan',
          description: 'Advised by Prof. Anhong Guo.',
        },
        {
          date: 'May 2022 - Present',
          title: 'Lifelong Learning Lab',
          location: 'University of Michigan',
          description: 'Advised by Prof. Xu Wang.',
        },
        {
          date: 'Jul 2022 - Present',
          title: 'Language and Information Technologies Lab',
          location: 'University of Michigan',
          description: 'Advised by Dr. Veronica Perez-Rosas.',
        },
        {
          date: 'Jul 2022 - Sep 2022',
          title: 'Jim Team',
          location: 'NVIDIA',
          description: 'Advised by Dr. Linxi "Jim" Fan.',
        },
      ],
    },
    {
      title: 'Competitions',
      position: 'right',
      data: [
        {
          date: 'Feb 2021',
          title: 'Mathematical Contest in Modeling',
          location: 'remote',
          description: 'Meritorious Winner Prize',
        }, {
          date: 'Nov 2020',
          title: 'University Physics Competition',
          location: 'remote',
          description: 'Silver Medal',
        },
      ],
    },
    {
      title: 'Volunteer',
      position: 'left',
      data: [
        {
          date: 'Sept 2019 - Dec 2020',
          title: 'JI Voluntary Association',
          location: 'Jiangchuan Sunshine Nursing House, Shanghai',
          description: 'Help people with mental difficulties.'
        }, {
          date: 'May 2020',
          title: 'High School Advisory',
          location: 'No.2 Foreign Language School, Wenzhou',
          description: 'Advise high school students on College Entrance Examination Preparation.',
        }
      ],
    },
    {
      title: 'Relevant Coursework',
      position: 'right',
      data: [
        {
          date: 'EECS 493',
          location: 'User Interface Dev',
        }, {
          date: 'EECS 498',
          location: 'Human-AI Interaction & Systems',
        }, {
          date: 'PHIL 340',
          location: 'Mind & Machine',
        }, {
          date: 'EECS 445',
          location: 'Intro Machine Learning',
        }, {
          date: 'EECS 487',
          location: 'Intro to NLP',
        }, {
          date: 'EECS 498',
          location: 'Deep Learning for Computer Vision',
        }, {
          date: 'EECS 598',
          location: 'Science of Deep Learning',
        }, {
          date: 'EECS 485',
          location: 'Web Systems',
        }, {
          date: 'EECS 482',
          location: 'Intro Oper System',
        },
      ],
    },
  ],
  awards: [
    {
      date: '2021 Fall, 2022 Winter',
      title: 'University of Michigan Dean’s Honor List',
    }, {
      date: '2019-2020, 2020-2021',
      title: 'SJTU Undergraduate Excellent Scholarship',
    },
  ],
  tagColors: [
    'magenta', 'red', 'volcano', 'orange', 'gold',
    'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple',
  ],
  tags: [
    {
      id: 'javascript',
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    {
      id: 'rxjs',
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    {
      id: 'typescript',
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    {
      id: 'reactjs',
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    {
      id: 'gatsby',
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    {
      id: 'html',
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    {
      id: 'css',
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    {
      id: 'python',
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
  ],
};
