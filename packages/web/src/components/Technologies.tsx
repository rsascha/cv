type TechStackItemProps = {
  technology: string;
  logo: string;
};

export function TechStackItem({ technology, logo }: TechStackItemProps) {
  return (
    <div className="flex flex-col w-20">
      <div>
        <img src={logo} alt={`${technology} logo`} className="w-11 h-11" />
      </div>
      <div>{technology}</div>
    </div>
  );
}

export function Technologies({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <h2>My Core Stack</h2>
      <div className={"flex flex-wrap justify-between gap-4"}>
        <TechStackItem technology="React" logo="react.png" />
        <TechStackItem technology="React Native" logo="phone.png" />
        <TechStackItem technology="HTML" logo="html5.png" />
        <TechStackItem technology="CSS" logo="css3.png" />
        <TechStackItem technology="Tailwind CSS" logo="tailwind.png" />

        <TechStackItem technology="JavaScript" logo="js.png" />
        <TechStackItem technology="TypeScript" logo="ts.png" />
        <TechStackItem technology="Python" logo="python.png" />

        <TechStackItem technology="Node.js" logo="nodejs.png" />
        <TechStackItem technology="Express.js" logo="express.png" />
        <TechStackItem technology="PostgreSQL" logo="pg.png" />
        <TechStackItem technology="MongoDB" logo="mongo.png" />

        <TechStackItem technology="Git/GitHub" logo="github.png" />
        <TechStackItem technology="Jenkins" logo="jenkins.png" />
        <TechStackItem technology="AWS" logo="aws.png" />
        <TechStackItem technology="Docker" logo="docker.png" />
        <TechStackItem technology="Kubernetes" logo="k8s.png" />
      </div>
    </div>
  );
}
