import { createContext, useContext } from "react";
import type { Content, Language } from "./types";
import { en } from "./en";
import { de } from "./de";

export type { Content, Language } from "./types";

const contents: Record<Language, Content> = { en, de };

export function getContent(language: Language): Content {
  return contents[language];
}

export function detectLanguage(): Language {
  const htmlLang = typeof document !== "undefined" ? document.documentElement.lang : "";
  if (htmlLang.toLowerCase().startsWith("de")) {
    return "de";
  }
  return "en";
}

export const ContentContext = createContext<Content>(en);

export function useContent(): Content {
  return useContext(ContentContext);
}
