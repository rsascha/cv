import { useContent } from "../i18n";

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
        <TechStackItem technology="React" logo="react.png" assetPrefix={assetPrefix} />
        <TechStackItem technology="React Native" logo="phone.png" assetPrefix={assetPrefix} />
        <TechStackItem technology="HTML" logo="html5.png" assetPrefix={assetPrefix} />
        <TechStackItem technology="CSS" logo="css3.png" assetPrefix={assetPrefix} />
        <TechStackItem technology="Tailwind CSS" logo="tailwind.png" assetPrefix={assetPrefix} />

        <TechStackItem technology="TypeScript" logo="ts.png" assetPrefix={assetPrefix} />
        <TechStackItem technology="JavaScript" logo="js.png" assetPrefix={assetPrefix} />
        <TechStackItem technology="Python" logo="python.png" assetPrefix={assetPrefix} />

        <TechStackItem technology="Node.js (Express)" logo="nodejs.png" assetPrefix={assetPrefix} />
        <TechStackItem technology="PostgreSQL" logo="pg.png" assetPrefix={assetPrefix} />
        <TechStackItem technology="MongoDB" logo="mongo.png" assetPrefix={assetPrefix} />

        <TechStackItem technology="Git/GitHub" logo="github.png" assetPrefix={assetPrefix} />
        <TechStackItem technology="Jenkins" logo="jenkins.png" assetPrefix={assetPrefix} />
        <TechStackItem technology="AWS" logo="aws.png" assetPrefix={assetPrefix} />
        <TechStackItem technology="Docker" logo="docker.png" assetPrefix={assetPrefix} />
        <TechStackItem technology="Kubernetes" logo="k8s.png" assetPrefix={assetPrefix} />
      </div>
    </div>
  );
}
