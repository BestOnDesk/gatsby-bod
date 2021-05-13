import React from "react";
import { SocialLink } from "./index.style";

export type SocialIconType =
  | "facebook"
  | "facebook-f"
  | "instagram"
  | "linkedin"
  | "linkedin-in"
  | "telegram"
  | "telegram-plane";

export interface SocialIconProps {
  link: string;
  type: SocialIconType;
}

const SocialIcon = (props: SocialIconProps) => {
  return (
    <li>
      <SocialLink
        type={props.type}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`fab fa-${props.type}`} />
      </SocialLink>
    </li>
  );
};

export default SocialIcon;
