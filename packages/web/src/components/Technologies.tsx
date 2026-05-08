import { useContent } from "../i18n";
import { coreStack } from "../data/coreStack";

type TechStackItemProps = {
  technology: string;
  logo: string;
  assetPrefix: string;
};

export function TechStackItem({ technology, logo, assetPrefix }: TechStackItemProps) {
  return (
    <div className="flex flex-col mb-1 items-center flex-1/2">
      <img src={`${assetPrefix}${logo}`} alt={`${technology} logo`} className="w-12 h-12" />
      <div className="text-xs mt-1 text-center">{technology}</div>
    </div>
  );
}

export function Technologies({ className = "" }: { className?: string }) {
  const { technologies, assetPrefix } = useContent();
  return (
    <div className={className}>
      <h2 className="ml-5">{technologies.heading}</h2>
      <div className={"flex flex-wrap justify-between"}>
        {coreStack.map((entry) => (
          <TechStackItem
            key={entry.technology}
            technology={entry.technology}
            logo={entry.logo}
            assetPrefix={assetPrefix}
          />
        ))}
      </div>
    </div>
  );
}
