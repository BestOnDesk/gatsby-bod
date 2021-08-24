import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

const StyledPostDetails = styled.div<{ primeLogoSrc?: string }>`
  p {
    margin: 0 0 30px;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
  }

  blockquote {
    margin-bottom: 60px;
    margin-top: 60px;
    font-size: 30px;
    line-height: 40px;
    color: ${(props) => props.theme.colors.gray};
    font-weight: ${(props) => props.theme.fonts.weight.pMedium};
    font-style: normal;
    @media ${(props) => props.theme.layouts.sm} {
      font-size: 24px;
      line-height: 34px;
      margin-bottom: 30px;
      margin-top: 30px;
    }

    div.author {
      margin-top: 10px;

      span {
        font-weight: ${(props) => props.theme.fonts.weight.pBold};
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  div.table-contents {
    background: ${(props) => props.theme.colors.lightest};
    padding: 20px;
    border-radius: ${(props) => props.theme.borders.radius};
    margin: 60px 0;

    > div > ul {
      ${(props) => props.theme.extends.listStyle}
      li {
        > ul {
          list-style: none !important;
          margin: 0;

          > li {
            > a {
              font-weight: ${(props) =>
                props.theme.fonts.weight.pRegular} !important;
            }
          }
        }

        &:last-child {
          margin-bottom: 0;
        }

        a {
          font-weight: ${(props) => props.theme.fonts.weight.pMedium};
        }
      }
    }
  }

  .aawp {
    .aawp-product {
      position: relative;
      margin: 30px 0;
      display: flex;
      background: ${(props) => props.theme.colors.lightest};
      border-radius: ${(props) => props.theme.borders.radius};

      @media ${(props) => props.theme.layouts.largeMobile} {
        flex-direction: column;
      }

      .aawp-product__thumb {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 20px;

        .aawp-product__image-link {
          background: #fff;
          border-radius: ${(props) => props.theme.borders.radius};
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            border-radius: ${(props) => props.theme.borders.radius};
            overflow: hidden;
          }
        }

        .aawp-product__ribbon {
          width: 100%;
          background: ${(props) => props.theme.colors.primary};
          color: ${(props) => props.theme.colors.white};
          margin: 8px 0;
          border-radius: ${(props) => props.theme.borders.radius};
          text-align: center;
        }
      }

      .aawp-product__content {
        flex: 4;
        padding: 20px;

        @media ${(props) => props.theme.layouts.largeMobile} {
          padding-top: 0;
        }

        .aawp-product__title {
          font-weight: bold;
        }

        .aawp-product__description {
          display: none;

          ${media.md`
          display: block;
        `}
          ul {
            ${(props) => props.theme.extends.listStyle}
            list-style-type: disc;

            li {
              font-size: ${(props) => props.theme.fonts.size.b2};
              line-height: ${(props) => props.theme.fonts.height.b2};

              &::marker {
              }
            }
          }
        }

        .aawp-product__footer {
          display: flex;
          flex-direction: column;
          align-items: flex-end;

          .aawp-product__pricing {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            margin: 8px 0;

            .aawp-product__price {
              font-size: ${(props) => props.theme.fonts.size.h3};
              line-height: ${(props) => props.theme.fonts.height.h3};
              font-weight: ${(props) => props.theme.fonts.weight.pSemiBold};
            }

            .aawp-check-prime {
              content: url("${(props) => props.primeLogoSrc}");
              margin-bottom: -12px;
            }
          }

          .aawp-product__info {
            text-align: right;
            margin: 8px -14px 4px 0;

            font-size: ${(props) => props.theme.fonts.size.b4};
            line-height: ${(props) => props.theme.fonts.height.b4};
          }

          .aawp-button {
            background: ${(props) => props.theme.colors.primary};
            color: ${(props) => props.theme.colors.white};
            font-weight: ${(props) => props.theme.fonts.weight.pMedium};
            font-size: ${(props) => props.theme.fonts.size.b2};
            display: flex;
            justify-content: center;
            border: 2px solid ${(props) => props.theme.colors.primary};
            ${(props) => props.theme.extends.transition}
            padding: 0 30px;
            height: 50px;
            line-height: 46px;
            border-radius: ${(props) => props.theme.borders.radius};
            transition: 0.2s ease-in-out;

            @media ${(props) => props.theme.layouts.largeMobile} {
              width: 100%;
            }

            &:hover {
              box-shadow: ${(props) => props.theme.shadows.dark};
            }

            &::before {
              font-family: "Font Awesome 5 Brands";
              content: "\\f270";
              margin-right: 8px;
              font-size: 20px;
              margin-top: 1px;
            }
          }
        }
      }

      span.aawp-product__info {
        font-size: ${(props) => props.theme.fonts.size.b4};
        line-height: ${(props) => props.theme.fonts.height.b4};
        position: absolute;
        bottom: 4px;
        left: 8px;

        @media ${(props) => props.theme.layouts.largeMobile} {
          position: relative;
          text-align: center;
          left: 0;
        }
      }
    }
  }

  figure > span {
    border-radius: ${(props) => props.theme.borders.radius};
  }

  img.usr {
    padding: 0 !important;
    margin: 0 !important;
    border: none !important;
    display: inline !important;
    vertical-align: baseline;
    height: 18px !important;
    width: auto !important;
  }

  .no-mobile {
    // TODO: Check /i-5-dispositivi-amazon-piu-apprezzati prime video banner, resolve width
    display: none;

    ${media.md`
    display: block;
      `}

    margin: 0 0 30px;
  }

  .no-desktop {
    ${media.md`
        display: none;
      `}

    margin: 0 0 30px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      color: ${(props) => props.theme.colors.primary};
      position: relative;
      display: inline;
      background-image: linear-gradient(
        to right,
        currentColor 0%,
        currentColor 100%
      );
      background-size: 0px 2px;
      background-position: 0px 95%;
      transition: background-size 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86)
        0s;
      padding: 0.1% 0px;
      background-repeat: no-repeat;

      &:hover {
        background-size: 100% 2px;
      }
    }
  }

  .aligncenter,
  .text-center {
    text-align: center;
  }

  div.wp-block-image img {
    border-radius: ${(props) => props.theme.borders.radius};
    margin-bottom: 30px;
  }

  pre.pre-black {
    background: ${(props) => props.theme.colors.lightest};
    word-break: break-word !important;
  }
`;

export { StyledPostDetails };
