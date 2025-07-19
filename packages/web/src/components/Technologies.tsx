import type { ReactNode } from "react";

type TechItemContainerProps = {
  title: string;
  children: ReactNode;
};

export function TechItemContainer({ title, children }: TechItemContainerProps) {
  return (
    <div className="mb-4">
      <h4 className="bg-cv-blue text-cv-white rounded-t-lg p-2">{title}</h4>
      <div className="border border-cv-blue rounded-b-lg p-2 bg-cv-white">{children}</div>
    </div>
  );
}

type TechStackItemProps = {
  technology: string;
  logo: string;
  experience: number;
};

export function TechStackItem({ technology, logo, experience }: TechStackItemProps) {
  return (
    <div className="flex items-center gap-1 w-full mb-1.5">
      <img src={logo} alt={`${technology} logo`} className="w-4 h-4" />
      <span className="flex-1 text-xs">{technology}</span>
      <div className="flex-1 flex gap-2 items-center">
        <div className="h-2 w-full border">
          <div className="h-full bg-cv-blue" style={{ width: `${(experience / 10) * 100}%` }}></div>
        </div>
        <span className="text-xs">{experience}/10</span>
      </div>
    </div>
  );
}

export function Technologies({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <TechItemContainer title="Languages">
        <TechStackItem technology="JavaScript" logo="js.png" experience={9} />
        <TechStackItem technology="TypeScript" logo="ts.png" experience={8} />
        <TechStackItem technology="Python" logo="python.png" experience={3} />
      </TechItemContainer>

      <TechItemContainer title="Frontend">
        <TechStackItem technology="React" logo="react.png" experience={9} />
        <TechStackItem technology="React Native" logo="phone.png" experience={9} />
        <TechStackItem technology="HTML" logo="html5.png" experience={8} />
        <TechStackItem technology="CSS" logo="css3.png" experience={7} />
      </TechItemContainer>

      <TechItemContainer title="Backend & Databases">
        <TechStackItem technology="Node.js" logo="nodejs.png" experience={9} />
        <TechStackItem technology="Express.js" logo="express.png" experience={9} />
        <TechStackItem technology="PostgreSQL" logo="pg.png" experience={7} />
        <TechStackItem technology="MongoDB" logo="mongo.png" experience={5} />
      </TechItemContainer>

      <TechItemContainer title="DevOps & Tools">
        <TechStackItem technology="Git/GitHub" logo="github.png" experience={8} />
        <TechStackItem technology="Jenkins" logo="jenkins.png" experience={8} />
        <TechStackItem technology="AWS" logo="aws.png" experience={7} />
        <TechStackItem technology="Docker" logo="docker.png" experience={7} />
        <TechStackItem technology="Kubernetes" logo="k8s.png" experience={6} />
      </TechItemContainer>
      <div className="text-[0.6em] text-cv-gray italic text-center">
        0: no clue | 5: good knowledge | 10: evangelist
      </div>
    </div>
  );
}
