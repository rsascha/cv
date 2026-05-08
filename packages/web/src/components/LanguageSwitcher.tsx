import { useContent } from "../i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { switcher } = useContent();
  return (
    <a href={switcher.href} className={`underline text-cv-blue ${className}`} hrefLang={switcher.href === "../" ? "en" : "de"}>
      {switcher.label}
    </a>
  );
}
