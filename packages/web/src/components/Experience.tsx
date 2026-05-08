import { useContent } from "../i18n";

export interface ExperienceItemProps {
  title: string;
  period: string;
  company: string;
  description: string;
  technologies?: string;
  image?: string;
  subtitle?: string;
  links?: { label: string; href: string }[];
}

type ExperienceItemViewProps = ExperienceItemProps & {
  linksLabel: string;
  technologiesLabel: string;
  assetPrefix: string;
};

export function ExperienceItem({
  title,
  period,
  company,
  description,
  technologies,
  image,
  subtitle,
  links,
  linksLabel,
  technologiesLabel,
  assetPrefix,
}: ExperienceItemViewProps) {
  return (
    <div className="mb-8">
      <div className="flex gap-4 items-start">
        <div className="w-1/3 flex-shrink-0">
          <h4>{title}</h4>
          <div className="text-xs text-cv-gray mb-1">{period}</div>
          <div className="mb-1">{company}</div>
          {subtitle && <div className="text-xs text-cv-gray">{subtitle}</div>}
        </div>
        <div className="w-2/3">
          <div className="mb-4">{description}</div>
          {image && (
            <div className="my-4 text-center">
              <img src={`${assetPrefix}${image}`} alt={company} className="max-w-[80%] h-auto" />
            </div>
          )}
          {links && links.length > 0 && (
            <div className="mb-2">
              <span className="font-semibold">{linksLabel}:</span>{" "}
              {links.map((link, i) => (
                <span key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="underline">
                    {link.label}
                  </a>
                  {i < links.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          )}
          {technologies && (
            <div>
              <span className="font-semibold">{technologiesLabel}:</span> {technologies}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const { experience, assetPrefix } = useContent();
  return (
    <div>
      {experience.items.map((item, index) => (
        <ExperienceItem
          key={index}
          {...item}
          linksLabel={experience.linksLabel}
          technologiesLabel={experience.technologiesLabel}
          assetPrefix={assetPrefix}
        />
      ))}
    </div>
  );
}
