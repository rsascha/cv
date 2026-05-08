import type { Content } from "./types";

export const en: Content = {
  language: "en",
  pageTitle: "CV Sascha Rose",
  assetPrefix: "",
  headerTitle: "Sascha Rose - Software Engineer",
  contact: {
    location: "53508 Mayschoß (Cologne, Bonn, Germany)",
  },
  intro: {
    bringHeading: "What I Bring to the Table",
    bringParagraphs: [
      "I am a generalist — IT expert and full-stack developer with 20+ years of experience in software development, architecture, and IT operations. I specialize in modern web, app, server and cloud technologies — designing scalable, robust, and maintainable systems.",
      "I'm experienced in quality assurance for long-term projects — covering unit, integration and end-to-end testing. I also focus on security-related aspects and their seamless automation and integration into daily development and CI/CD pipelines.",
      "With a strong focus on continuous learning and innovation, I stay up-to-date with current tech trends and best practices.",
      "My experience working with interdisciplinary teams allows me to communicate technical decisions effectively and lead implementations with confidence. I combine excellent analytical and decision-making skills with strong self-organisation and a solution-oriented mindset.",
    ],
    languagesHeading: "Languages",
    languagesText: "German (native), English (fluent)",
    lookingForHeading: "What I'm Looking For",
    lookingForText:
      "Seeking opportunities in web, app, and backend development either independently or together with trusted colleagues from actyvyst. Also open to permanent roles or full-time employment.",
  },
  technologies: {
    heading: "Core Stack",
  },
  experience: {
    heading: "Where I Gained Experience",
    linksLabel: "Links",
    technologiesLabel: "Technologies",
    items: [
      {
        title: "Software Engineer",
        period: "2025-2026",
        company: "SfP-IT GmbH",
        subtitle: "actyvyst GmbH",
        description:
          "Scanly AI - App development and operation of a consumer app for iOS and Android for creating listings. One photo. A finished eBay listing. Sell and earn money. ScanlyAI recognizes your products, determines the best price, and writes your listing automatically.",
        image: "scanlyai-screens.jpg",
        links: [
          { label: "scanlyai.de", href: "https://scanlyai.de" },
          { label: "App Store", href: "https://apps.apple.com/de/app/scanlyai/id6746640373" },
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=de.sfp_it.ScanlyAI",
          },
        ],
        technologies: "Expo, React Native, React Native Paper, TanStack Query, SignalR, Firebase, Notifications.",
      },
      {
        title: "Software Engineer",
        period: "2025",
        company: "Awareness Kitchen",
        subtitle: "actyvyst GmbH",
        description:
          "Development of a new version of the “Escape Box” iPad app — an interactive game master for an escape room experience. Designed as a playful tool for security awareness training, the app manages the game as a timekeeper and provides hints through multimedia and animations to guide players through the challenges.",
        image: "awareness-kitchen-2.jpg",
        technologies: "React Native, Expo, Gesture Handling, Animations, Videos, TypeScript.",
      },
      {
        title: "Software Engineer",
        period: "2024-2025",
        company: "QiV - Qualität im Verkehr",
        subtitle: "actyvyst GmbH",
        description:
          "Mobile app for Android to record and transmit traffic countings. Traffic counters can use this app to record configurable interviews and count data. The data is recorded offline and then transmitted to the central server, where it is consolidated and validated in an evaluation system.",
        image: "qiv.jpg",
        technologies:
          "React, React Native, Node.js (Express), TypeScript, Excel: [Power Query, AddIn (VB Script), TaskPane (React)], .Net (C#), PostgreSQL, GitHub Actions, Clerk, Render.",
      },
      {
        title: "Software Engineer",
        period: "2022-2025",
        company: "badenova AG & Co. KG",
        subtitle: "actyvyst GmbH",
        description:
          "The app enables meter reading (including camera integration), provides consumption forecasts, and supports monthly payment optimization. I developed the backend systems, integrated APIs, and set up the entire infrastructure.",
        image: "badenova.jpg",
        technologies:
          "React, React Native, Node.js (NestJS, Express), TypeScript, Python (FastAPI), PostgreSQL, GitHub Actions, OAuth 2.0 (PKCE), AWS, Kyma (SAP), Kubernetes.",
      },
      {
        title: "Lecturer",
        period: "2023-2025",
        company: "Taktsoft Campus Talents",
        subtitle: "actyvyst GmbH",
        description:
          "I worked part-time as a lecturer, helping career changers enter the field of software development. I also created and updated parts of the curriculum.",
        image: "logo-campus-talents.png",
        technologies:
          "JavaScript, web development with React, app development with React Native (iOS, Android), API development with Node.js and Express, MongoDB, PostgreSQL.",
      },
      {
        title: "Software Engineer",
        period: "2024",
        company: "Awareness Kitchen",
        subtitle: "actyvyst GmbH",
        description:
          'Development of the "Escape Box" iPad app, an interactive game master for an escape room experience. Designed as a playful tool for security awareness training, the app coordinates the game as a timekeeper and offers hints using multimedia and animations to guide players through the challenges.',
        image: "awareness-kitchen-1.jpg",
        technologies: "React Native, Expo, Gesture Handling, Animations, Videos, TypeScript.",
      },
      {
        title: "Software Engineer",
        period: "2022",
        company: "actyvyst GmbH",
        description: "I joined actyvyst GmbH as a shareholder and software engineer.",
      },
      {
        title: "Software Engineer",
        period: "2022",
        company: "Freelancer",
        description:
          "Freelance software projects under the umbrella of actyvyst GmbH. Development of a system for booking leisure activities in tourist regions. The multilingual and multi-client system includes apps for Android and iOS as well as a web app for customers, a web interface for managing offers, vacancies & prices, and a white-label functionality for providers.",
        technologies: "React, React Native, Node.js (Express), PostgreSQL, AWS, AWS CDK.",
      },
      {
        title: "Software Engineer",
        period: "2019-2021",
        company: "Senior Developer at Amadeus Leisure IT GmbH, Aachen",
        description:
          "As a Senior Developer, I led software development in the field of internet booking engines for travel portals. My tasks included frontend and microservice development, as well as major contributions to infrastructure setup. I introduced trunk-based development, automated deployments, implemented CI/CD pipelines, standardized test automation (unit, E2E, and integration tests), and established quality and security gates to ensure software quality and security.",
        technologies:
          "Angular, TypeScript, Node.js (NestJS, Express), OpenAPI, ORM, MongoDB, Redis, Keycloak, Kubernetes, Kustomize, NGINX, Prometheus, ELK, Jenkins, Docker, Artifactory, Confluence, Jira, Jest, Cypress, SonarQube, Fortify, BlackDuck, OWASP ZAP.",
      },
      {
        title: "Head of Software Development",
        period: "2010-2019",
        company: "Amadeus Leisure IT GmbH, Bonn",
        description:
          'In this role, I managed up to 20 employees in software development at the Bonn location. I was also an IHK-certified trainer for IT specialists in application development. I led the transformation of the company into an agile organization and oversaw the migration of software solutions into the Amadeus Group. A key responsibility was leading travel agency solutions for the DACH market. From 2010 to 2014, I was also instrumental in developing and rolling out the "Trusted Reviews" platform internationally, providing verified hotel reviews from real travelers.',
      },
      {
        title: "Team Lead in Software Development",
        period: "2000-2010",
        company: "pixell daten & design GmbH, Bonn",
        description:
          'In my first position, I was part of a start-up specializing in digitalizing marketing processes in the travel industry. We developed the live pricing solution "pixell Travel Suite" which was licensed by major companies such as Expedia, TUI, HRS, REWE, and RCCL. We also developed the first mobile app in Germany for booking package holidays, used by Expedia, TUI, and Kuoni. Our work was recognized with the Travel Technology Innovation Award and the Travel Industry Club Award.',
      },
      {
        title: "Student",
        period: "1995-2000",
        company: "University of Bonn",
        description: "Studied Diplom-Informatik (Computer Science)",
      },
    ],
  },
  switcher: {
    label: "Deutsch",
    href: "de/",
  },
};
