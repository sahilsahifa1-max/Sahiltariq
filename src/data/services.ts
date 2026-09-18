export interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "01",
    name: "3D Design",
    description:
      "Creating detailed 3D objects, scenes, visual elements, and creative assets designed to make digital experiences more immersive and visually memorable.",
  },
  {
    id: "02",
    name: "Web Design",
    description:
      "Designing clean, modern, responsive websites with strong layouts, typography, visual hierarchy, and user-focused experiences.",
  },
  {
    id: "03",
    name: "UI/UX Design",
    description:
      "Creating intuitive and visually engaging interfaces with a focus on usability, responsive design, interaction, and a smooth user journey.",
  },
  {
    id: "04",
    name: "Motion & Animation",
    description:
      "Creating smooth animations, interactive transitions, and motion experiences that add energy, depth, and personality to websites and digital products.",
  },
  {
    id: "05",
    name: "Web Development",
    description:
      "Building responsive and interactive websites using modern technologies, turning creative designs and ideas into functional digital experiences.",
  },
];
