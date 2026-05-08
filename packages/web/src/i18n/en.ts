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
      "I'm a full-stack developer and IT generalist with 20+ years of experience in software development, architecture, and IT operations. I specialize in modern web, app, server and cloud technologies — designing scalable, robust, and maintainable systems.",
      "I'm experienced in quality assurance for long-term projects — unit, integration, and end-to-end testing. Security follows the same logic: automated checks and scans, integrated into the daily development workflow and CI/CD pipelines.",
      "I enjoy working with people from other disciplines — I explain tech without insider jargon and take ownership of delivery.",
    ],
    languagesHeading: "Languages",
    languagesText: "German (native), English (fluent)",
    lookingForHeading: "What I'm Looking For",
    lookingForText:
      "Looking for projects in web, app, and backend development — as a freelancer, with the actyvyst team, or in a permanent role.",
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
          "Scanly AI — development and operation of a consumer app for iOS and Android. From a single product photo, the app generates a complete eBay listing — product recognition, pricing, and description are all automated.",
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
          "Complete rewrite of the “Escape Box” iPad app, built from scratch. The interactive game master for security awareness training manages the game as a timekeeper and provides hints through multimedia and animations to guide players through the challenges.",
        image: "awareness-kitchen-2.jpg",
        technologies: "React Native, Expo, Gesture Handling, Animations, Videos, TypeScript.",
      },
      {
        title: "Software Engineer",
        period: "2024-2025",
        company: "QiV - Qualität im Verkehr",
        subtitle: "actyvyst GmbH",
        description:
          "Mobile Android app for recording and transmitting traffic counts. Field surveyors use the app to run configurable surveys and capture count data offline; data later syncs to a central server, where it's consolidated and validated in an evaluation system.",
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
          "The app enables meter reading (including camera integration), provides consumption forecasts, and supports monthly payment optimization. I developed the backend systems, integrated APIs, and set up the infrastructure — cloud, CI/CD, and Kubernetes operations.",
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
          'Initial version of the "Escape Box" iPad app — an interactive game master for an escape room experience. Designed as a playful tool for security awareness training, the app coordinates the game as a timekeeper and offers hints using multimedia and animations to guide players through the challenges.',
        image: "awareness-kitchen-1.jpg",
        technologies: "React Native, Expo, Gesture Handling, Animations, Videos, TypeScript.",
      },
      {
        title: "Software Engineer",
        period: "2022",
        company: "actyvyst GmbH",
        description:
          "Joined actyvyst GmbH as co-shareholder and software engineer — the start of the partnership through which all projects above were delivered.",
      },
      {
        title: "Software Engineer",
        period: "2022",
        company: "Freelancer",
        description:
          "Freelance project under the umbrella of actyvyst GmbH: development of a multilingual, multi-tenant system for booking leisure activities in tourist regions. The platform includes apps for Android and iOS, a customer-facing web app, an admin interface for offers, availability, and pricing, and white-label support for providers.",
        technologies: "React, React Native, Node.js (Express), PostgreSQL, AWS, AWS CDK.",
      },
      {
        title: "Software Engineer",
        period: "2019-2021",
        company: "Senior Developer at Amadeus Leisure IT GmbH, Aachen",
        description:
          "As a Senior Developer, I drove engineering practices for internet booking engines on travel portals. My work included frontend and microservice development plus major contributions to infrastructure setup. I introduced trunk-based development, automated deployments, implemented CI/CD pipelines, standardized test automation (unit, E2E, and integration tests), and established quality and security gates.",
        technologies:
          "Angular, TypeScript, Node.js (NestJS, Express), OpenAPI, ORM, MongoDB, Redis, Keycloak, Kubernetes, Kustomize, NGINX, Prometheus, ELK, Jenkins, Docker, Artifactory, Confluence, Jira, Jest, Cypress, SonarQube, Fortify, BlackDuck, OWASP ZAP.",
      },
      {
        title: "Head of Software Development",
        period: "2010-2019",
        company: "Amadeus Leisure IT GmbH, Bonn",
        description:
          'Managed up to 20 software developers at the Bonn location and served as an IHK-certified trainer for IT specialists in application development. Key responsibilities: leading the company\'s transformation into an agile organisation, migrating the software portfolio into the Amadeus Group, and owning the travel agency solutions for the DACH market. From 2010 to 2014, I was also instrumental in developing and rolling out the "Trusted Reviews" platform internationally — verified hotel reviews from real travellers.',
      },
      {
        title: "Team Lead in Software Development",
        period: "2000-2010",
        company: "pixell daten & design GmbH, Bonn",
        description:
          'My career started at a start-up specializing in digitalizing marketing processes in the travel industry, where I grew from developer to team lead. We developed the live pricing solution "pixell Travel Suite", licensed by major companies including Expedia, TUI, HRS, REWE, and RCCL. We also built the first mobile app in Germany for booking package holidays — used by Expedia, TUI, and Kuoni. The work was recognized with the Travel Technology Innovation Award and the Travel Industry Club Award.',
      },
      {
        title: "Student",
        period: "1995-2000",
        company: "University of Bonn",
        description:
          "Five years of Diplom-Informatik (Computer Science) studies — solid grounding in theory and applied computer science.",
      },
    ],
  },
  switcher: {
    label: "Deutsch",
    href: "de/",
  },
};
