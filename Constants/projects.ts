interface Project {
  title: string;
  description: string;
  media: {
    type: "image" | "video";
    src: string;
    width?: number;
    height?: number;
  }[];
  tags: string[];
  link: string;
}

export const projectsData: Project[] = [
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
        link: "https://meowzie.co.uk"
      },
      {
        title: "Plycs.com",
        description: "Made for the University of Plymouth Computer Science Society. It features searchable events, contact pages and CSS animations",
        media: [
          { type: "image", src: "/project/plycs.png", width: 500, height: 500 }
        ],
        tags: ["NextJS", "Tailwind", "React", "CSS"],
        link: "https://plycs.com"
      },
      {
        title: "World wide tax calculator",
        description: "A tax calculator that allows you to calculate your tax in most countries. Features a interactable globe and Tax News",
        media: [
          { type: "image", src: "/project/TaxCalc.png", width: 500, height: 500 }
        ],
        tags: ["NextJS", "Tailwind", "React","TypeScript"],
        link: "https://tax-app-rho.vercel.app/"    
      },
      {
        title: "PicFlick",
        description: "An App for IOS and Android that allows you to swipe through your camera roll and delete or keep your photos in an easy way",
        media: [
          { type: "image", src: "/project/PicFlick.webp", width: 500, height: 500 }
        ],
        tags: ["React", "React Native", "Expo"],
        link: "https://github.com/C0gzy/SwipeDeleteProject"
      },
      {
        title: "Top Horror",
        description: "Made for my University End of year project. The website has a searchable list of 10,000 horror films from indie to high budget to help users find the perfect film to watch that night.",
        media: [
          { type: "image", src: "/project/TopHorror.png", width: 500, height: 500 }
        ],
        tags: ["NodeJS", "HTML", "CSS", "JSON", "JavaScript"],
        link: "/SubWebs/Comp1004WebsiteProject/index.html"
      },
      {
        title: "Green M&M",
        description: "A Python Discord Bot. Built to Download and play Music/Videos From Youtube. The Project is free and Open-Source at my GitHub page. Currently it supports video queues, Video Descriptions.",
        media: [
          { type: "image", src: "/project/Disc.png", width: 300, height: 300 }
        ],
        tags: ["Python", "Discord.py"],
        link: "https://github.com/C0gzy/GreenM-M"
      },
    ]