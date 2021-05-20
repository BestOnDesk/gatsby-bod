import React from "react";
import {
  SocialShareButton,
  SocialShareButtonTooltip,
  SocialShareElement,
  SocialShareLink,
  StyledSocialShare,
} from "./index.style";
import copy from "copy-to-clipboard";

export interface SocialShareProps {
  className?: string;
  whatsapp?: string;
  telegram?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  website?: string;
  linkClipboard?: string;
  sizeMd?: boolean;
}

const SocialShare = (props: SocialShareProps) => {
  return (
    <StyledSocialShare className={props.className} sizeMd={props.sizeMd}>
      {props.whatsapp && (
        <SocialShareElement>
          <SocialShareLink
            href={props.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp" />
          </SocialShareLink>
        </SocialShareElement>
      )}
      {props.telegram && (
        <SocialShareElement>
          <SocialShareLink
            href={props.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-telegram" />
          </SocialShareLink>
        </SocialShareElement>
      )}
      {props.facebook && (
        <SocialShareElement>
          <SocialShareLink
            href={props.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook" />
          </SocialShareLink>
        </SocialShareElement>
      )}
      {props.instagram && (
        <SocialShareElement>
          <SocialShareLink
            href={props.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" />
          </SocialShareLink>
        </SocialShareElement>
      )}
      {props.linkedin && (
        <SocialShareElement>
          <SocialShareLink
            href={props.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
          </SocialShareLink>
        </SocialShareElement>
      )}
      {props.youtube && (
        <SocialShareElement>
          <SocialShareLink
            href={props.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
          </SocialShareLink>
        </SocialShareElement>
      )}
      {props.website && (
        <SocialShareElement>
          <SocialShareLink
            href={props.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-globe-europe" />
          </SocialShareLink>
        </SocialShareElement>
      )}
      {props.linkClipboard && (
        <SocialShareElement>
          <SocialShareButton
            onClick={() => props.linkClipboard && copy(props.linkClipboard)}
          >
            <SocialShareButtonTooltip>Link copiato!</SocialShareButtonTooltip>
            <i className="fas fa-link"></i>
          </SocialShareButton>
        </SocialShareElement>
      )}
    </StyledSocialShare>
  );
};

export default SocialShare;
