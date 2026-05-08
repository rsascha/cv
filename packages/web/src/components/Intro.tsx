import { useContent } from "../i18n";

export function Intro({ className = "" }: { className?: string }) {
  const { intro } = useContent();
  return (
    <div className={className}>
      <h2>{intro.bringHeading}</h2>
      {intro.bringParagraphs.map((paragraph, index) => (
        <div key={index}>
          <p>{paragraph}</p>
          <p>&nbsp;</p>
        </div>
      ))}
      <h2>{intro.languagesHeading}</h2>
      <p>{intro.languagesText}</p>
      <p>&nbsp;</p>
      <h2>{intro.lookingForHeading}</h2>
      <p>{intro.lookingForText}</p>
    </div>
  );
}
