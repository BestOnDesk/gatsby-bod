import styled from "styled-components";

const StyledSocialShare = styled.ul`
  ${(props) => props.theme.extends.listStyle}
  margin: 0 -5px;
  display: flex;
  flex-wrap: wrap;
`;

const SocialShareElement = styled.li`
  margin: 0 5px;
`;

const SocialShareLink = styled.a`
  color: ${(props) => props.theme.colors.extra02};
  font-size: ${(props) => props.theme.fonts.size.b3};
  line-height: ${(props) => props.theme.fonts.height.b3};
  display: block;
  ${(props) => props.theme.extends.transition}

  &:hover {
    color: ${(props) => props.theme.colors.primary} !important;
  }
`;

const SocialShareButtonTooltip = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 24px;
  left: -113px;
  background: ${(props) => props.theme.colors.extra02Transparent};
  z-index: 100;
  border-radius: 1000px;
  color: white;
  width: 200px;
  padding: 4px 0;
  transition: all 0.4s ease-in-out;
`;

const SocialShareButton = styled.button`
  color: ${(props) => props.theme.colors.extra02};
  font-size: ${(props) => props.theme.fonts.size.b3};
  line-height: ${(props) => props.theme.fonts.height.b3};
  display: block;
  position: relative;
  appearance: none;
  border: none;
  padding: 0;
  cursor: pointer;
  ${(props) => props.theme.extends.transition}

  &:hover {
    color: ${(props) => props.theme.colors.primary} !important;
  }

  &:focus {
    ${SocialShareButtonTooltip} {
      opacity: 1 !important;
    }
  }
`;

export {
  StyledSocialShare,
  SocialShareElement,
  SocialShareLink,
  SocialShareButton,
  SocialShareButtonTooltip,
};
