import React from "react";
import { StyledWidgetSocial, WidgetTitle } from "./index.style";
import SocialIcons from "../SocialIcons";
import SocialIcon from "../SocialIcons/SocialIcon";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
} from "../../../../constants/socials";

export interface WidgetSocialProps {
  marginBottom?: number;
}

const WidgetSocial = (props: WidgetSocialProps) => {
  return (
    <StyledWidgetSocial marginBottom={props.marginBottom}>
      <WidgetTitle>Resta in contatto</WidgetTitle>
      <SocialIcons mdSize justifyContent={"center"}>
        <SocialIcon link={INSTAGRAM_URL} type={"instagram"} />
        <SocialIcon link={FACEBOOK_URL} type={"facebook"} />
        <SocialIcon link={LINKEDIN_URL} type={"linkedin"} />
        <SocialIcon link={TELEGRAM_URL} type={"telegram"} />
      </SocialIcons>
    </StyledWidgetSocial>
  );
};

export default WidgetSocial;
