// import sanityClient from "./sanityClient";

export type DataType = {
  name: string;
  title: string;
  location: string;
  currentTimezone: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
  skills: string[];
  about: [string, string][];
  experiences: {
    position: string;
    company: string;
    location: string;
    date: string;
    description: string;
    skills: string[];
  }[];
  projects: {
    title: string;
    description: string;
    image: string;
    link?: string;
  }[];
  certifications: {
    title: string;
    provider: string;
    description: string;
  }[];
  contactIframe: string;
};

export const data: DataType = {
  name: "Melvin Soldia",
  title: "Full Stack Developer / AI Applications",
  location: "Spain",
  currentTimezone: "Europe/Madrid",
  email: "mewbentech@gmail.com",
  linkedin: "https://www.linkedin.com/in/melvin-soldia/",
  github: "",
  website: "",
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "GraphQL",
    "REST",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Chakra UI",
    "Git",
    "GitHub",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "GCP",
    "Firebase",
    "Redis",
    "RabbitMQ",
    "Elasticsearch",
    "OpenAI",
  ],
  about: [
    [
      `10+ Years of Expertise`,
      `Proven track record in building scalable, high-performance web and mobile applications using modern technologies like React, React Native, TypeScript, Next.js, and PostgreSQL.`,
    ],
    [
      `AI & Innovation Focus`,
      `Certified in Google AI Essentials; skilled at integrating AI tools and frameworks into practical, real-world applications.`,
    ],
    [
      `Frontend & Backend Mastery`,
      `Extensive experience in full-stack development, from designing pixel-perfect UIs to implementing secure backend systems (e.g., payment gateways with Stripe, AWS Lambda).`,
    ],
    [
      `Scalability & Performance`,
      `Optimized drag-and-drop functionality for a 30% speed improvement and built robust Next.js codebases for complex workflows.`,
    ],
    [
      `Map-Based & Geospatial Solutions`,
      `Expertise in extending Mapbox functionalities for client-specific requirements in geospatial applications.`,
    ],
    [
      `Mobile App Development`,
      `Built and deployed React Native apps from development to production (Expo), including domain management and subscription-based features.`,
    ],
    [
      `Testing & Code Quality`,
      `Proficient in writing unit, integration, and E2E tests (Mocha, Cypress) to ensure reliability and maintainability.`,
    ],
    [
      `Certifications & Security`,
      `Certified Network Defender (CND) with expertise in secure authentication (Auth0), payments (Stripe, PayPal), and data-driven workflows.`,
    ],
  ],
  experiences: [
    {
      position: "Senior Full Stack Developer",
      company: "Wander",
      location: "US, Remote",
      date: "Mar 2024 - Present",
      description:
        "Interactive maps for web and mobile. Using AI, transform reels into map points of interest.",
      skills: [
        "React",
        "Typescript",
        "Next.js",
        "Nest.js",
        "Firebase",
        "Mapbox",
        "React Native",
      ],
    },
    {
      position: "Full Stack Developer",
      company: "Plutio",
      location: "London, Remote",
      date: "Aug 2021 - Dec 2023",
      description:
        "Project management tool including invoices, proposals, contracts, subscriptions, dynamic forms, chat and wiki.",
      skills: ["React", "Typescript", "Meteor.js", "MongoDB", "GCP", "AWS"],
    },
    {
      position: "Full Stack Developer",
      company: "General Studios NZ",
      location: "New Zealand, Remote",
      date: "July 2018 - July 2020",
      description: "Developing several app ideas from scratch",
      skills: [
        "React",
        "Api Integrations",
        "React Native",
        "Go",
        "Docker",
        "Google Home",
        "Chrome Extensions",
        "PostgreSQL",
        "GCP",
      ],
    },
    {
      position: "Information Systems Analyst",
      company: "Bohol Island State University",
      location: "Bohol Philippines",
      date: "January 2011 - June 2018",
      description:
        "Developing inhouse information systems for the whole university over 6 campuses with 500+ employees and 10000+ students",
      skills: ["React", "PostgreSQL", "Go", "Php"],
    },
  ],
  projects: [
    {
      title: "Next.js E-commerce",
      description:
        "A responsive e-commerce application built with Next.js, featuring server-side rendering and dynamic routing. Includes pagination, search filters, checkout, light and dark mode.",
      image: "/projects/nextjs-ecommerce.jpg",
      link: "https://sweet-apple-acres-rouge.vercel.app/",
    },
    {
      title: "Conscious Flights",
      description:
        "A flight search engine that allows users to find and book flights with a focus on sustainability. Mobile and web built with Expo, Next.js, TypeScript, and Tailwind CSS.",
      image: "/projects/conscious-flights.png",
    },
    {
      title: "Plutio Chrome Extension (Unofficial)",
      description:
        "A Chrome extension that enhances the Plutio experience by adding features like bulk downloading of invoices, proposals, and contracts.",
      image: "/projects/plutio-chrome-extension.png",
      link: "https://chromewebstore.google.com/detail/plutio-chrome-extension-u/dihehfjgdpbglknjkeknjjiodpmldkea",
    },
    {
      title: "Integrated Student Management and Information System",
      description:
        "A comprehensive system for managing student data, including enrollment, grades, and finance for Bohol Island State University.",
      image: "/projects/ismis-bisu.png",
      link: "https://ismis.bisu.edu.ph",
    },
  ],
  certifications: [
    {
      title: "Google AI Essentials",
      provider: "Coursera",
      description: "Issued Dec 2024",
    },
    {
      title: "EF SET English Certificate (C2 Proficient)",
      provider: "EF Standard English Test (EF SET)",
      description: "Issued Sep 2023",
    },
    {
      title: "Certified Network Defender (CND)",
      provider: "EC-Council",
      description: "Issued Sep 2017 · Credential ID 96815176667",
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      provider: "EC-Council",
      description: "Issued Aug 2017 · Credential ID 331957",
    },
  ],
  contactIframe:
    "https://tally.so/embed/mDaqOq?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
};

// export const fetchData = async () => {
//   const query = `*[_type == "portfolioData"][0]{
//     name,
//     title,
//     location,
//     currentTimezone,
//     email,
//     linkedin,
//     github,
//     website,
//     skills,
//     about,
//     experiences[] {
//       position,
//       company,
//       location,
//       date,
//       description,
//       skills
//     },
//     projects[] {
//       title,
//       description,
//       image,
//       link
//     },
//     certifications[] {
//       title,
//       provider,
//       description
//     },
//     contactIframe
//   }`;

//   const data = await sanityClient.fetch(query);
//   return data;
// };
