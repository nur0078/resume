import {
  AnuIcon,
  CarHubLogo,
  Howdy,
  NikeLogo,
  TheStarLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { GlobeIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Anurodh Pandey",
  initials: "AP",
  location: "Sydney, Australia",
  locationLink: "https://www.google.com/maps/place/Sydney/",
  about:
    "Full-stack Developer from Sydney, Australia.",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I work mostly with TypeScript, React, Node.js, and GraphQL.",

  avatarUrl: "https://www.anurodhpandey.com.np/assets/og-aae58940.png",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "anurodhp7@gmail.com",
    tel: "+61450380690",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nur0078",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pandeyanurodh/",
        icon: LinkedInIcon,
      },
      {
        name: "URK",
        url: "https://www.anurodhpandey.com.np/",
        icon: GlobeIcon,
      },
    ],
  },
  education: [
    {
      school: "Federation University of Australia",
      degree: "Bachelor's Degree in Information Technology",
      start: "2020",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Buzzketing",
      link: "https://buzzketing.com.au/",
      badges: ["Intern"],
      title: "Full-stack Developer Intern",
      logo: AnuIcon,
      start: "2023",
      end: "2023",
      description:
        "Implemented in developing key features fo a React.js application leading to a 15% increase in user engagement, and started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "The Star Entertainment Group",
      link: "https://www.starentertainmentgroup.com.au/",
      badges: [],
      title: "Table Games Dealer",
      logo: TheStarLogo,
      start: "2022",
      end: "2024",
      description:
        "Engaged with a dynamic array of customers, providing exceptional service within the upscale ambiance of a 5-star casino, averaging interactions with over 200+ patrons. ",
    },

  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Redux",
    "Node.js",
    "GraphQL",
    "TailwindCSS",
    "MongoDB",
  ],
  projects: [
    {
      title: "Nike",
      techStack: [
        "Side Project",
        "JavaScript",
        "Next.js",
        "Vite",
        "Tailwind",
      ],
      description: "Nike Landing Page",
      logo: NikeLogo,
      link: {
        label: "Project Nike",
        href: "https://nike-three-iota.vercel.app/",
      },
    },
    {
      title: "Car Hub",
      techStack: ["Side Project", "TypeScript", "Next.js", "ReactJS"],
      description:
        "Showcase website for car dealers.",
      logo: CarHubLogo,
      link: {
        label: "Car Hub",
        href: "https://car-showroom-five.vercel.app/",
      },
    },
    {
      title: "Personal Portfolio",
      techStack: ["Side Project", "Next.js", "ReactJS", "TypeScript", "Vite"],
      description:
        "Personal Portfolio Website",
      logo: AnuIcon,
      link: {
        label: "anurodhpandey.com.np",
        href: "https://anurodhpandey.com.np/",
      },
    },
    {
      title: "myTravels",
      techStack: ["Side Project", "Next.js", "TypeScript", "Figma", "ReactJS",],
      description:
        "Personal travel journal.",
      logo: Howdy,
      link: {
        label: "myTravels",
        href: "https://travel-journal-bice.vercel.app/",
      },
    },
    {
      title: "Park-It",
      techStack: ["Side Project", "Next.js", "Javscript", "Google API"],
      description:
        "Personal parking assitance app.",
      logo: Howdy,
      link: {
        label: "ParkIt",
        href: "https://park-it-five.vercel.app/",
      },
    },

    {
      title: "Digital Business Card",
      techStack: ["Side Project", "Next.js", "ReactJS", "CSS"],
      description:
        "Digital Business Card",
      logo: AnuIcon,
      link: {
        label: "Digital ID",
        href: "https://business-card-virid-omega.vercel.app/",
      },
    },
  ],
} as const;
