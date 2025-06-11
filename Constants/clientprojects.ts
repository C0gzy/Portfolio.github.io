
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
  link: { linkName: string; link: string }[];
}

export const clientprojectsData: Project[] = [
    {
        title: "Torbridge Capital",
        description: 
        "I interned at Torbridge Capital where I created multiple scripts in Python that automate email service with APIendpoints which is projected to save 2+ hours every week. I learned a lot from the internship about making productionready and efficient code and how to create a program that suites the business’s needs.",
        media: [
          { type: "image", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3-DwEhT9fw0skmEXPglo6EH1qcQeP3Aypq2yFFYStw-w4BUos6pOhC3L5e0bWrdCypg&usqp=CAU", width: 500, height: 50 },
        ],
        tags: ["Python"],
        link: [{ linkName: "Company Website", link: "https://torbridgecapital.co.uk/" }],
      },
      {
        title: "IOT Manager",
        description: "IOT Manager is a project that I created for my 2nd year Group project for a Client and company named 'FarFields' . It is a web application that allows you to manage your IOT devices. It is a web/IOS/Android application that allows you to manage your IOT devices.",
        media: [
          { type: "image", src: "/project/IotLogo.png", width: 500, height: 50 },
        ],
        tags: ["ReactNative", "Expo", "NodeJS", "CSS", "Firebase"],
        link: [{ linkName: "Client Website", link: "https://www.farfields.net/" }],
      }
    ]

