export type Language = "en" | "de";

export type ExperienceItem = {
  title: string;
  period: string;
  company: string;
  description: string;
  technologies?: string;
  image?: string;
  subtitle?: string;
  links?: { label: string; href: string }[];
};

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
    items: ExperienceItem[];
  };
  switcher: {
    label: string;
    href: string;
  };
};
