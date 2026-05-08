import type { ReactNode } from "react";
import { FaCircleInfo, FaEnvelope, FaGithub, FaHouseChimney, FaPhone } from "react-icons/fa6";
import { useContent } from "../i18n";

function IconListItem({ children }: { children: ReactNode }) {
  return <div className="flex gap-2 items-center">{children}</div>;
}

export function IconList() {
  const { contact } = useContent();
  const iconClassName = "h-6 text-xl text-cv-blue";

  return (
    <div>
      <IconListItem>
        <FaEnvelope className={iconClassName} />
        <a href="mailto:sascha.rose@actyvyst.com">sascha.rose@actyvyst.com</a>
      </IconListItem>
      <IconListItem>
        <FaPhone className={iconClassName} />
        <a href="tel:+491795089830">+49 179 50 898 30</a>
      </IconListItem>
      <IconListItem>
        <FaHouseChimney className={iconClassName} />
        <span>{contact.location}</span>
      </IconListItem>
      <div>&nbsp;</div>
      <IconListItem>
        <FaGithub className={iconClassName} />
        <a href="https://github.com/rsascha">github.com/rsascha</a>
      </IconListItem>
      <IconListItem>
        <FaCircleInfo className={iconClassName} />
        <a href="https://actyvyst.de">actyvyst.de</a>
      </IconListItem>
    </div>
  );
}
