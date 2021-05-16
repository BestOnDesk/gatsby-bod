import React from "react";
import {
  SocialShareButton,
  SocialShareButtonTooltip,
  SocialShareElement,
  SocialShareLink,
  StyledSocialShare,
} from "./index.style";
import copy from "copy-to-clipboard";

import {
  getTelegramUrlTextLink,
  getWhatsappTextLink,
} from "../../../../utils/social";

export interface SocialShareProps {
  className?: string;
  whatsapp?: string;
  telegram?: {
    url: string;
    text: string;
  };
  linkClipboard: string;
}

const SocialShare = (props: SocialShareProps) => {
  return (
    <StyledSocialShare className={props.className}>
      {props.whatsapp && (
        <SocialShareElement>
          <SocialShareLink
            href={getWhatsappTextLink(props.whatsapp)}
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
            href={getTelegramUrlTextLink(
              props.telegram.url,
              props.telegram.text
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-telegram" />
          </SocialShareLink>
        </SocialShareElement>
      )}
      {props.linkClipboard && (
        <SocialShareElement>
          <SocialShareButton
            onClick={() => {
              copy(props.linkClipboard);
            }}
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
