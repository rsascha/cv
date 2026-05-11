import type { Content } from "./types";

export const de: Content = {
  language: "de",
  pageTitle: "Lebenslauf Sascha Rose",
  assetPrefix: "../",
  headerTitle: "Sascha Rose - Software Engineer",
  contact: {
    location: "53508 Mayschoß (Köln, Bonn, Deutschland)",
  },
  intro: {
    bringHeading: "Was ich mitbringe",
    bringParagraphs: [
      "Ich bin Full-Stack-Entwickler und IT-Generalist mit über 20 Jahren Erfahrung in Softwareentwicklung, Architektur und IT-Betrieb. Mein Schwerpunkt liegt auf modernen Web-, App-, Server- und Cloud-Technologien — mit dem Ziel, skalierbare, robuste und wartbare Systeme zu entwerfen.",
      "Ich bringe Erfahrung in der Qualitätssicherung langlaufender Projekte mit — von Unit- über Integrations- bis zu End-to-End-Tests. Sicherheit gehe ich nach demselben Muster an: automatisierte Checks und Scans, integriert in den täglichen Entwicklungsprozess und die CI/CD-Pipelines.",
      "Ich arbeite gerne mit Menschen aus anderen Disziplinen — ich erkläre Technik ohne Insider-Sprache und übernehme Verantwortung für die Umsetzung.",
    ],
    languagesHeading: "Sprachen",
    languagesText: "Deutsch (Muttersprache), Englisch (fließend)",
    lookingForHeading: "Wonach ich suche",
    lookingForText:
      "Ich suche Projekte in Web-, App- und Backend-Entwicklung — als Freelancer, im actyvyst-Team oder in Festanstellung.",
  },
  technologies: {
    heading: "Core-Stack",
  },
  experience: {
    heading: "Wo ich Erfahrung gesammelt habe",
    linksLabel: "Links",
    technologiesLabel: "Technologien",
    items: [
      {
        title: "Software Engineer",
        period: "2025-2026",
        company: "SfP-IT GmbH",
        subtitle: "actyvyst GmbH",
        description:
          "Scanly AI — Entwicklung und Betrieb einer Consumer-App für iOS und Android. Aus einem einzelnen Produktfoto erstellt die App ein fertiges eBay-Inserat — Produkterkennung, Preisermittlung und Beschreibung laufen automatisch.",
        image: "scanlyai-screens.jpg",
        links: [
          { label: "scanlyai.de", href: "https://scanlyai.de" },
          { label: "App Store", href: "https://apps.apple.com/de/app/scanlyai/id6746640373" },
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=de.sfp_it.ScanlyAI",
          },
        ],
        technologies:
          "Expo, React Native, React Native Paper, TanStack Query, SignalR, Firebase, Notifications, RevenueCat.",
      },
      {
        title: "Software Engineer",
        period: "2025",
        company: "Awareness Kitchen",
        subtitle: "actyvyst GmbH",
        description:
          "Komplette Neuimplementierung der „Escape Box“ iPad-App von Grund auf. Der interaktive Game Master für Security-Awareness-Trainings steuert das Spiel als Zeitnehmer und gibt über Multimedia und Animationen Hinweise, um die Spielenden durch die Herausforderungen zu führen.",
        image: "awareness-kitchen-2.jpg",
        technologies: "React Native, Expo, Gesture Handling, Animationen, Videos, TypeScript.",
      },
      {
        title: "Software Engineer",
        period: "2024-2025",
        company: "QiV - Qualität im Verkehr",
        subtitle: "actyvyst GmbH",
        description:
          "Mobile Android-App zur Erfassung und Übermittlung von Verkehrszählungen. Verkehrszählerinnen und -zähler erfassen mit der App konfigurierbare Interviews und Zähldaten. Die Daten werden offline aufgenommen und anschließend an den zentralen Server übertragen, wo sie in einem Auswertungssystem konsolidiert und validiert werden.",
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
          "Die App ermöglicht das Ablesen von Zählerständen (inkl. Kamera-Integration), liefert Verbrauchsprognosen und unterstützt die Optimierung der monatlichen Abschlagszahlungen. Ich habe die Backend-Systeme entwickelt, APIs integriert und die Infrastruktur aufgesetzt — Cloud, CI/CD und Kubernetes-Betrieb.",
        image: "badenova.jpg",
        technologies:
          "React, React Native, Node.js (NestJS, Express), TypeScript, Python (FastAPI), PostgreSQL, GitHub Actions, OAuth 2.0 (PKCE), AWS, Kyma (SAP), Kubernetes.",
      },
      {
        title: "Dozent",
        period: "2023-2025",
        company: "Taktsoft Campus Talents",
        subtitle: "actyvyst GmbH",
        description:
          "Ich habe nebenberuflich als Dozent gearbeitet und Quereinsteigerinnen und Quereinsteigern den Einstieg in die Softwareentwicklung ermöglicht. Außerdem habe ich Teile des Curriculums erstellt und aktualisiert.",
        image: "logo-campus-talents.png",
        technologies:
          "JavaScript, Webentwicklung mit React, App-Entwicklung mit React Native (iOS, Android), API-Entwicklung mit Node.js und Express, MongoDB, PostgreSQL.",
      },
      {
        title: "Software Engineer",
        period: "2024",
        company: "Awareness Kitchen",
        subtitle: "actyvyst GmbH",
        description:
          "Erste Version der „Escape Box“ iPad-App — ein interaktiver Game Master für ein Escape-Room-Erlebnis. Konzipiert als spielerisches Tool für Security-Awareness-Trainings, koordiniert die App das Spiel als Zeitnehmer und liefert mit Multimedia und Animationen Hinweise, um die Spielenden durch die Herausforderungen zu führen.",
        image: "awareness-kitchen-1.jpg",
        technologies: "React Native, Expo, Gesture Handling, Animationen, Videos, TypeScript.",
      },
      {
        title: "Software Engineer",
        period: "2022",
        company: "actyvyst GmbH",
        description:
          "Eintritt bei der actyvyst GmbH als Gesellschafter und Software Engineer — Beginn der Partnerschaft, über die alle oben genannten Projekte gelaufen sind.",
      },
      {
        title: "Software Engineer",
        period: "2022",
        company: "Freelancer",
        description:
          "Freiberufliches Projekt unter dem Dach der actyvyst GmbH: Entwicklung eines Systems zur Buchung von Freizeitaktivitäten in Tourismusregionen. Das mehrsprachige und mandantenfähige System umfasst Apps für Android und iOS, eine Web-App für Endkundinnen und -kunden, eine Weboberfläche zur Verwaltung von Angeboten, Verfügbarkeiten und Preisen sowie eine White-Label-Funktionalität für Anbieter.",
        technologies: "React, React Native, Node.js (Express), PostgreSQL, AWS, AWS CDK.",
      },
      {
        title: "Software Engineer",
        period: "2019-2021",
        company: "Senior Developer bei Amadeus Leisure IT GmbH, Aachen",
        description:
          "Als Senior Developer habe ich die Engineering-Praktiken für Internet Booking Engines im Reiseportal-Bereich geprägt. Zu meinen Aufgaben gehörten Frontend- und Microservice-Entwicklung sowie maßgebliche Beiträge zum Aufbau der Infrastruktur. Ich habe Trunk-based Development eingeführt, Deployments automatisiert, CI/CD-Pipelines implementiert, Testautomatisierung standardisiert (Unit-, E2E- und Integrationstests) und Quality- und Security-Gates etabliert.",
        technologies:
          "Angular, TypeScript, Node.js (NestJS, Express), OpenAPI, ORM, MongoDB, Redis, Keycloak, Kubernetes, Kustomize, NGINX, Prometheus, ELK, Jenkins, Docker, Artifactory, Confluence, Jira, Jest, Cypress, SonarQube, Fortify, BlackDuck, OWASP ZAP.",
      },
      {
        title: "Leiter Softwareentwicklung",
        period: "2010-2019",
        company: "Amadeus Leisure IT GmbH, Bonn",
        description:
          "Am Standort Bonn habe ich bis zu 20 Mitarbeitende in der Softwareentwicklung geführt — zusätzlich war ich IHK-zertifizierter Ausbilder für Fachinformatikerinnen und Fachinformatiker (Anwendungsentwicklung). Inhaltliche Schwerpunkte: Transformation des Unternehmens hin zu einer agilen Organisation, Migration der Softwarelösungen in die Amadeus-Gruppe sowie Verantwortung für die Reisebürolösungen im DACH-Markt. Von 2010 bis 2014 war ich zudem maßgeblich an Entwicklung und internationalem Rollout der „Trusted Reviews“-Plattform beteiligt — verifizierte Hotelbewertungen von echten Reisenden.",
      },
      {
        title: "Teamleiter Softwareentwicklung",
        period: "2000-2010",
        company: "pixell daten & design GmbH, Bonn",
        description:
          "Mein Berufseinstieg in einem Start-up, das Marketingprozesse der Reisebranche digitalisierte; ich bin dort vom Entwickler zum Teamleiter aufgestiegen. Wir entwickelten die Live-Pricing-Lösung „pixell Travel Suite“, lizenziert von Unternehmen wie Expedia, TUI, HRS, REWE und RCCL. Außerdem die erste mobile App in Deutschland zur Buchung von Pauschalreisen, eingesetzt bei Expedia, TUI und Kuoni. Unsere Arbeit wurde mit dem Travel Technology Innovation Award und dem Travel Industry Club Award ausgezeichnet.",
      },
      {
        title: "Student",
        period: "1995-2000",
        company: "Universität Bonn",
        description:
          "Fünf Jahre Studium der Diplom-Informatik — solide Grundlagen in Theorie und praktischer Informatik.",
      },
    ],
  },
  switcher: {
    label: "English",
    href: "../",
  },
};
