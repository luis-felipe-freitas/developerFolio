/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Luis Felipe Freitas",
  title: "Hello there, I'm Luis Felipe Freitas",
  subTitle: emoji(
    `I am a network engineer working with IT project management for about 5 years. 
I am also love working with Data Science and AI Engineering.`
  ),
  resumeLink: "bit.ly/Luis-Curriculum", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/luis-felipe-freitas",
  linkedin: "https://www.linkedin.com/in/luis-felipe-freitas-n/",
  gmail: "luisfelipefreitas@outlook.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA LOVER WHO WANTS TO EXPLORE EVERYTHING",
  skills: [
    emoji(
      `⚡ IT project manager who also performs IT Risk Assessment activities.`
    ),
    emoji(`⚡ Research and implementation of data science and AI bussiness 
    focused solutions, specifically computer vision.`),
    emoji(`⚡ Management using agile methodologies, PMBOK and BPMN.`)
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "AI/ML",
      fontAwesomeClassname: "fas fa-brain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Brasilia",
      logo: require("./assets/images/unb.png"),
      subHeader: "Bachelor in Network Enginering",
      duration: "July 2019",
      desc: "Participated in the research of Wireless networks",
      descBullets: [
        "Wireless networks and applications of recent technologies combined with their electromagnetic characteristics."
      ]
    },
    {
      schoolName: "Catholic University of Brasilia",
      logo: require("./assets/images/ucb.png"),
      subHeader: "Bachelor in Information Security",
      duration: "July 2019",
      desc: "Participated in the research of Security Aspects of Networks",
      descBullets: ["Security Aspects of Corporate Wireless Networks."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "IT project manager",
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Analisys",
      progressPercentage: "80%"
    },
    {
      Stack: "Risk Assessment",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Civil Aviation Regulation Technician",
      company: "National Civil Aviation Agency",
      companylogo: require("./assets/images/anac.png"),
      date: "November 2016 – Present",
      desc: "",
      descBullets: [
        `Perform risk assessment routines in the IT department, identifying and
evaluating hazard and then suggesting a mitigating strategy to be implemented
by the technical team`,
        `Management of IT projects beginning to end. Understanding the needs of the
business area and making sure it’s aligned with the enterprise goals and
providing an IT based solution to it.`,
        `Provide AI/ML solutions to optimize business process models, audit databases
that include images and create an innovative environment inside the areas.`,
        `Analyzing data form(architecture), storage, transfer, and representation to
improve performance for clients, users and business areas.`,
        `Collaborate and contribute with other engineers and senior managers to facilitate
creation of business solutions.`
      ]
    },
    {
      role: "Digital Accelerator Coordinator",
      company: "National Civil Aviation Agency",
      companylogo: require("./assets/images/anac.png"),
      date: "March 2020 – Present",
      desc: `Partner with professionals of different areas of the organization to understand
and optimize business processes using artificial intelligence. Applying
supervised and unsupervised learning, computer vision and natural language
processing in order to achieve the business goals`
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS THAT I HELPED TO CREATE",
  projects: [
    {
      image: require("./assets/images/anac-id.png"),
      projectName: "ANAC-ID",
      projectDesc: `ANAC-id is the artificial intelligence algorithm 
	    developed in-house for analyzing images in the Agency's databases.`,
      footerLink: [
        {
          name: "More",
          url: "https://www.canva.com/design/DAExNMxeQR4/A0cdjUod7JWZskTl53o1jA/view?utm_content=DAExNMxeQR4&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/clustering.png"),
      projectName: "Clustering",
      projectDesc: `Unsupervised machine learning, that is, it does not need to have a prior classification. 
	Tends to group more similar items based on some similarity metric.
	Using summarization and clustering algorithms it is possible to group texts by their similarity.`,
      footerLink: [
        {
          name: "More",
          url: "https://www.canva.com/design/DAExNMxeQR4/A0cdjUod7JWZskTl53o1jA/view?utm_content=DAExNMxeQR4&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/classificacao.png"),
      projectName: "Classification",
      projectDesc: `Classification is supervised machine learning, it must have a prior classification.`,
      footerLink: [
        {
          name: "More",
          url: "https://www.canva.com/design/DAExNMxeQR4/A0cdjUod7JWZskTl53o1jA/view?utm_content=DAExNMxeQR4&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "COBIT",
      subtitle: "Control Objectives for Information and Related Technology",
      image: require("./assets/images/cobit.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "More",
          url: "https://www.isaca.org/resources/cobit"
        }
      ]
    },
    {
      title: "Praise by the Official Diary",
      subtitle: `Praise for my dedication, efficiency, responsibility, technical capacity and commitment to the public interest in working with the Priority Digital Notebook project`,
      image: require("./assets/images/elogio.png"),
      footerLink: [
        {
          name: "View",
          url: "https://pergamum.anac.gov.br/arquivos/PA2017-4209.PDF"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+55 61 9903-1073",
  email_address: "luisfelipefreitas@outlook.com"
};

/************** NAO UTILIZADO */
// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
/*********************************************************/

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
