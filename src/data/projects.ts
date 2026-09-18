export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  type: string;
  description: string;
  liveUrl?: string;
  images: {
    leftTop: string;
    leftBottom: string;
    rightMain: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "01",
    name: "Quick Grills & Cafe",
    category: "Web Design / Development",
    type: "Personal Project",
    description:
      "A modern restaurant website created with a strong visual identity, responsive layout, animated hero section, menu presentation, and interactive user experience.",
    liveUrl: "#",
    images: {
      // Easily replaceable screenshot paths
      leftTop: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
      leftBottom: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
      rightMain: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    },
  },
  {
    id: "02",
    name: "Flex Theory",
    category: "Branding / Fitness",
    type: "Personal Project",
    description:
      "A fitness-focused digital brand concept built around motivation, visual identity, social media content, and modern fitness aesthetics.",
    liveUrl: "#",
    images: {
      // Easily replaceable screenshot paths
      leftTop: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
      leftBottom: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
      rightMain: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    },
  },
  {
    id: "03",
    name: "Sahil Portfolio",
    category: "3D / Web Design",
    type: "Personal Project",
    description:
      "A personal creative portfolio combining 3D visuals, modern web design, smooth motion, responsive layouts, and interactive digital experiences.",
    liveUrl: "#",
    images: {
      // Easily replaceable screenshot paths
      leftTop: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      leftBottom: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
      rightMain: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1200&auto=format&fit=crop",
    },
  },
];
