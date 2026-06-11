import type { ProjectType, TestimonialType } from "../types";

export const mockProjects: ProjectType[] = [
    {
      id: 1,
      title: 'Project Name',
      description:
        'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
      image: '/assets/projects/woman.jpg',
    },
    {
      id: 2,
      title: 'Project Name',
      description:
        'What was your role, your deliverables, if the project was personal, freelancing.',
      image: '/assets/projects/calendar.jpg',
    },
    {
      id: 3,
      title: 'Project Name',
      description:
        'You can also add in this description the type of the project, if it was for web, mobile, electron.',
      image: '/assets/projects/phone.jpg',
    },
  ];

export const mockTestimonials: TestimonialType[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Product Manager at TechCorp",
    text: "Madelyn is an exceptionally skilled developer. Her attention to detail and ability to translate complex design systems into functional React code is outstanding.",
    avatar: "/assets/testimonials/user.png"
  }
];