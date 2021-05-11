import React from "react";
import { SocialElement, SocialWithText, StyledSocialArea } from "./index.style";

export type Social =
  | "instagram"
  | "facebook"
  | "linkedin"
  | "twitter"
  | "youtube"
  | "pinterest"
  | "discord"
  | "telegram";

export interface SocialAreaProps {
  socials: {
    link: string;
    type: Social;
  }[];
}

const SocialArea = (props: SocialAreaProps) => {
  return (
    <StyledSocialArea>
      <SocialWithText>
        {props.socials.map((social) => (
          <SocialElement type={social.type} key={social.type}>
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${social.type}`} />
              <span>
                {social.type.charAt(0).toUpperCase() + social.type.slice(1)}
              </span>
            </a>
          </SocialElement>
        ))}
      </SocialWithText>
    </StyledSocialArea>
  );
};

export default SocialArea;
