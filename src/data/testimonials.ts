export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

// Editable placeholder data - replace easily with real client information
export const testimonialsData: TestimonialItem[] = [
  {
    id: "01",
    name: "Alex Johnson",
    role: "Founder, Studio Nexus",
    quote:
      "Sahil transformed our digital brand into something truly extraordinary. The combination of clean design, fluid animations, and 3D visual depth exceeded all our expectations.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "02",
    name: "Marcus Sterling",
    role: "Design Director, Horizon Media",
    quote:
      "Working with Sahil was seamless from start to finish. His attention to detail, micro-interactions, and visual craftsmanship set a new benchmark for our web presence.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "03",
    name: "Elena Rostova",
    role: "Head of Product, Vantage Labs",
    quote:
      "The aesthetic sensibility and smooth user experience Sahil delivered gave our startup instant credibility. Clients consistently compliment our website's feel.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
];
