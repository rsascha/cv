import type { ReactNode } from "react";
import { FaEnvelope, FaPhone, FaHouseChimney, FaGithub, FaCircleInfo, FaSeedling } from "react-icons/fa6";

function IconListItem({ children }: { children: ReactNode }) {
  return <div className="flex gap-2 items-center">{children}</div>;
}

export function IconList() {
  const iconClassName = "h-6 text-xl text-cv-blue";
  const greenIconClassName = "h-6 text-xl text-cv-green";

  return (
    <div>
      <IconListItem>
        <FaEnvelope className={iconClassName} />
        <a href="mailto:sascha.rose@gmail.com">sascha.rose@gmail.com</a>
      </IconListItem>
      <IconListItem>
        <FaPhone className={iconClassName} />
        <a href="tel:+491795089830">+49 179 50 898 30</a>
      </IconListItem>
      <IconListItem>
        <FaHouseChimney className={iconClassName} />
        <span>53508 Mayschoß (Cologne, Bonn, Germany)</span>
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
      <div>&nbsp;</div>
      <IconListItem>
        <FaSeedling className={greenIconClassName} />
        <span>Available from July 2025</span>
      </IconListItem>
    </div>
  );
}
