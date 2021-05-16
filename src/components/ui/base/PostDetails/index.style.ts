import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

const StyledPostDetails = styled.div<{ primeLogoSrc?: string }>`
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
      margin: 20px 0;
      display: flex;
      background: ${(props) => props.theme.colors.lightest};
      border-radius: ${(props) => props.theme.borders.radius};
      .aawp-product__thumb {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 20px;
        img {
          border-radius: ${(props) => props.theme.borders.radius};
          overflow: hidden;
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
        padding: 20px 20px 20px 20px;

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
`;

export { StyledPostDetails };