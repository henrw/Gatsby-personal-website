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
  professions: ['Undergraduate Student', 'HCI-AI researcher'],
  tocMaxDepth: 2,
  excerptMaxLength: 500,
  birthday: 'Some day',
  location: 'Ann Arbor, MI',
  email: 'henrw@umich.edu',
  language: 'English',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript:
    process.env.DISQUS_SCRIPT || 'https://boyanzh.disqus.com/embed.js',
  pages: {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    project: 'project',
    wakatime: 'wakatime',
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
    }
  ],
  // rss: '/rss.xml',
  // wakatime: {
  //   username: 'boyanzh',
  //   activity: '8ec8868a-3e3b-4d1d-845f-b1ba0a474e72',
  //   language: '910c9181-965c-4d66-a371-c5d9ffeafbac',
  //   editor: '489d2fc7-aa89-4984-af24-17115132d603',
  //   os: '84d9c631-f6c1-4553-a0cc-cc3634936846',
  // },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || '',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'UA-XXXXXXXXX-X',
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
    }
  ],
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
      title: 'Lab',
      position: 'left',
      data: [
        {
          date: 'May 2022 - Present',
          title: 'Research Assistant',
          location: 'University of Michigan',
          description: 'Work in HAIL Lab and Lifelong Learning Lab with Prof. Anhong Guo and Xu Wang.',
        },
        {
          date: 'Jul 2022 - Present',
          title: 'Research Assistant',
          location: 'University of Michigan',
          description: 'Work in LIT Lab with Dr. Veronica Perez-Rosas.',
        },
        {
          date: 'Jul 2022 - Sep 2022',
          title: 'Research Assistant',
          location: 'NVIDIA',
          description: 'Work in Jim Team with Dr. Linxi "Jim" Fan',
        },
      ],
    },
    {
      title: 'Competition',
      position: 'right',
      data: [
        {
          date: 'Feb 2021',
          title: 'Mathematical Contest in Modeling',
          location: ' ',
          description: 'Meritorious Winner Prize',
        }, {
          date: 'Nov 2020',
          title: 'University Physics Competition',
          location: ' ',
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
          description: 'Visit and help people with mental difficulties.'
        }, {
          date: 'May 2020',
          title: 'High School Advisory',
          location: 'No.2 Foreign Language School, Wenzhou',
          description: 'Advise high school students on College Entrance Examination Prep',
        }
      ],
    },
    {
      title: 'Coursework',
      position: 'left',
      data: [
        {
          date: 'EECS482',
          location: 'Intro to Operating Systems',
        },
        {
          date: 'EECS485',
          location: 'Web Systems',
        },
        {
          date: 'EECS281',
          location: 'Data Structures and Algorithms',
        },
        {
          date: 'EECS280',
          location: 'Programming and Elem. Data Structures',
        }
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
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple',
  ],
  tags: [
    {
      id: 'javascript',
      name: 'javascript',
      description:
        'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      description:
        'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    {
      id: 'rxjs',
      name: 'RxJS',
      description:
        'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    {
      id: 'typescript',
      name: 'typescript',
      description:
        'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    {
      id: 'reactjs',
      name: 'reactjs',
      description:
        'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    {
      id: 'gatsby',
      name: 'Gatsby.js',
      description:
        'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    {
      id: 'html',
      name: 'HTML',
      description:
        'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    {
      id: 'css',
      name: 'css',
      description:
        'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    {
      id: 'python',
      name: 'python',
      description:
        'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
  ],
};
