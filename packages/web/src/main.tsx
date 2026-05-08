import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ContentContext, detectLanguage, getContent } from "./i18n";

const content = getContent(detectLanguage());

if (typeof document !== "undefined") {
  document.title = content.pageTitle;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContentContext.Provider value={content}>
      <App />
    </ContentContext.Provider>
  </StrictMode>
);
