export interface Project {
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