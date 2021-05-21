import styled from "styled-components";
import { SocialIconType } from "./index";

const SocialLink = styled.a<{ type: SocialIconType }>`
  &:hover {
    color: ${(props) => props.theme.colors.white};

    background: ${(props) => {
      switch (props.type) {
        case "facebook":
        case "facebook-f":
          return props.theme.colors.facebook;
        case "instagram":
          return props.theme.colors.instagram;
        case "linkedin":
        case "linkedin-in":
          return props.theme.colors.linkedin;
        case "telegram":
        case "telegram-plane":
          return props.theme.colors.telegram;
      }
    }};
  }
`;

export { SocialLink };
