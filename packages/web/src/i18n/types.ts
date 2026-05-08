import type { ExperienceItemProps } from "../components/Experience";

export type Language = "en" | "de";

export type Content = {
  language: Language;
  pageTitle: string;
  assetPrefix: string;
  headerTitle: string;
  contact: {
    location: string;
  };
  intro: {
    bringHeading: string;
    bringParagraphs: string[];
    languagesHeading: string;
    languagesText: string;
    lookingForHeading: string;
    lookingForText: string;
  };
  technologies: {
    heading: string;
  };
  experience: {
    heading: string;
    linksLabel: string;
    technologiesLabel: string;
    items: ExperienceItemProps[];
  };
  switcher: {
    label: string;
    href: string;
  };
};
