import styled, { css } from "styled-components";
import { Social } from "./index";

const StyledSocialArea = styled.div`
  padding: 35px 50px;
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borders.radius};

  @media ${(props) => props.theme.layouts.md} {
    padding: 35px 30px;
  }
  @media ${(props) => props.theme.layouts.sm} {
    padding: 35px 30px;
  }
  @media ${(props) => props.theme.layouts.largeMobile} {
    padding: 28px 15px;
  }
`;

const SocialWithText = styled.ul`
  margin: -5px;
  ${(props) => props.theme.extends.listStyle}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media ${(props) => props.theme.layouts.md} {
    justify-content: flex-start;
  }
  @media ${(props) => props.theme.layouts.sm} {
    justify-content: flex-start;
  }
`;

const SocialElement = styled.li<{ type: Social }>`
  margin: 5px;

  a {
    i {
      width: 50px;
      height: 50px;
      line-height: 50px;
      border-radius: 100%;
      background: ${(props) => props.theme.colors.lightest};
      display: inline-block;
      text-align: center;
      color: ${(props) => props.theme.colors.gray};
      margin-right: 18px;
      ${(props) => props.theme.extends.transition}
      font-size: ${(props) => props.theme.fonts.size.b3};

      @media ${(props) => props.theme.layouts.lg} {
        margin-right: 12px;
      }

      @media ${(props) => props.theme.layouts.md} {
        margin-right: 12px;
      }

      @media ${(props) => props.theme.layouts.sm} {
        margin-right: 8px;
        width: 40px;
        height: 40px;
        line-height: 40px;
      }
    }

    span {
      font-weight: ${(props) => props.theme.fonts.weight.pMedium};
      font-size: ${(props) => props.theme.fonts.size.b2};
      line-height: 20px;
      display: inline-block;
      ${(props) => props.theme.extends.transition}
    }
  }

  ${(props) => {
    switch (props.type) {
      case "instagram":
        console.log("test");
        return css`
          &:hover {
            a {
              i {
                background: ${(props) => props.theme.colors.instagram};
                color: ${(props) => props.theme.colors.white};
              }
              span {
                color: ${(props) => props.theme.colors.instagram};
              }
            }
          }
        `;
      case "twitter":
        return css`
          &:hover {
            a {
              i {
                background: ${(props) => props.theme.colors.twitter};
                color: ${(props) => props.theme.colors.white};
              }
              span {
                color: ${(props) => props.theme.colors.twitter};
              }
            }
          }
        `;
      case "facebook":
        return css`
          &:hover {
            a {
              i {
                background: ${(props) => props.theme.colors.facebook};
                color: ${(props) => props.theme.colors.white};
              }
              span {
                color: ${(props) => props.theme.colors.facebook};
              }
            }
          }
        `;
      case "youtube":
        return css`
          &:hover {
            a {
              i {
                background: ${(props) => props.theme.colors.youtube};
                color: ${(props) => props.theme.colors.white};
              }
              span {
                color: ${(props) => props.theme.colors.youtube};
              }
            }
          }
        `;
      case "pinterest":
        return css`
          &:hover {
            a {
              i {
                background: ${(props) => props.theme.colors.pinterest};
                color: ${(props) => props.theme.colors.white};
              }
              span {
                color: ${(props) => props.theme.colors.pinterest};
              }
            }
          }
        `;
      case "discord":
        return css`
          &:hover {
            a {
              i {
                background: ${(props) => props.theme.colors.discord};
                color: ${(props) => props.theme.colors.white};
              }
              span {
                color: ${(props) => props.theme.colors.discord};
              }
            }
          }
        `;
      case "linkedin":
        return css`
          &:hover {
            a {
              i {
                background: ${(props) => props.theme.colors.linkedin};
                color: ${(props) => props.theme.colors.white};
              }
              span {
                color: ${(props) => props.theme.colors.linkedin};
              }
            }
          }
        `;
    }
  }}
`;

export { StyledSocialArea, SocialElement, SocialWithText };
