import { type Project } from "@/lib/types"

export const projectsData: Project[] = [

  {
    title: "ErrorMail",
    description: "A tool to help developers debug their code by sending them an email with the error message and the stack trace. It also provides a code snippet to help the developer fix the error.",
    media: [
      { type: "image", src: "/project/ErrorMail/main1.png", width: 500, height: 500 },
      { type: "image", src: "/project/ErrorMail/main2.png", width: 500, height: 500 }
    ],
    tags: ["React", "Tailwind", "TypeScript", "Node.js", "Express", 'NextJS' , 'Docker' , 'NPM' , 'SQLlite'],
    link: [{ linkName: "Visit Website", link: "https://errormail.online/" } , { linkName: 'NPM Package', link: 'https://www.npmjs.com/package/errormail'}]
  },

  {
    title: "OpenGrammer",
    description : `A JavaScript npm package that scans text for grammar mistakes using custom rules and provides visual indicators with hover tooltips showing correction suggestions. 
    Custom grammar rule engine for detecting common mistakes. 
    Zero external dependencies (for core functionality). 
    Easy integration into web projects, React, and TipTap editors. `,
    media: [
      { type: "image", src: "/project/OpenGrammer.png", width: 500, height: 500 }
    ],
    tags: ["JavaScript", "npm", "React", "TypeScript"],
    link: [{ linkName: "Visit Website", link: "https://open-grammer.vercel.app/" }]
  },

    {
        title: "Meowzie",
        description: "A website and Social App to share cat videos. Donations given to the site are passed on to cat charities. You can upload videos , comment and share with your friends.",
        media: [
          { type: "video", src: "/project/meowzie/Demo.mov" },
          { type: "image", src: "/project/meowzie/Main.png", width: 500, height: 500 },
          { type: "image", src: "/project/meowzie/SShot1.png", width: 500, height: 500 },
          { type: "image", src: "/project/meowzie/SShot2.png", width: 500, height: 500 }
        ],
        tags: ["NextJS", "Tailwind", "React", "TypeScript", "Firebase","React Native"],
        link: [{ linkName: "Visit Website", link: "https://meowzie.co.uk" },{ linkName: "Web Source Code", link: "https://github.com/C0gzy/MeowzieWebsite" }]
      },
      {
        title: "Plycs.com",
        description: "[Unavaible due to current shift in ownership] Made for the University of Plymouth Computer Science Society. It features searchable events, contact pages and CSS animations",
        media: [
          { type: "image", src: "/project/plycs.png", width: 500, height: 500 }
        ],
        tags: ["NextJS", "Tailwind", "React", "CSS"],
        link: []
      },
      {
        title: "World wide tax calculator",
        description: "A tax calculator that allows you to calculate your tax in most countries. Features a interactable globe and Tax News",
        media: [
          { type: "image", src: "/project/TaxCalc.png", width: 500, height: 500 }
        ],
        tags: ["NextJS", "Tailwind", "React","TypeScript"],
        link: [{ linkName: "Visit Website", link: "https://tax-app-rho.vercel.app/" }]    
      },
      {
        title: "PicFlick",
        description: "An App for IOS and Android that allows you to swipe through your camera roll and delete or keep your photos in an easy way",
        media: [
          { type: "image", src: "/project/PicFlick.webp", width: 500, height: 500 }
        ],
        tags: ["React", "React Native", "Expo"],
        link: [{ linkName: "Source Code", link: "https://github.com/C0gzy/SwipeDeleteProject" }]
      },
      {
        title: "Top Horror",
        description: "Made for my University End of year project. The website has a searchable list of 10,000 horror films from indie to high budget to help users find the perfect film to watch that night.",
        media: [
          { type: "image", src: "/project/TopHorror.png", width: 500, height: 500 }
        ],
        tags: ["NodeJS", "HTML", "CSS", "JSON", "JavaScript"],
        link: [{ linkName: "View Project", link: "/SubWebs/Comp1004WebsiteProject/index.html" }]
      },
    ]

/*


  {
    title: "lexly Alpha",
    description: "Lexly is a AI powered Word Processor built on top of OpenGrammer package that allows you to write with AI. You can analyse rubrics and get feedback on your writing. This is hasnt been released yet as there is still much to do however i wanted to show it off as it is a project i am proud of.",
    media: [
      { type: "video", src: "/project/lexly/Demo.mp4" },
      { type: "image", src: "/project/lexly/editor.png", width: 500, height: 500 },
      { type: "image", src: "/project/lexly/home.png", width: 500, height: 500 }
    ],
    tags: ["React", "Tailwind", "TypeScript", "Python", "Nodejs"],
    link: []
  },
    */

