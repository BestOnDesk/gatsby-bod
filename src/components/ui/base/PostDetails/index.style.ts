import styled from "styled-components";

const StyledPostDetails = styled.div`
  blockquote {
    margin-bottom: 60px;
    margin-top: 60px;
    font-size: 30px;
    line-height: 40px;
    color: ${(props) => props.theme.colors.gray};
    font-weight: 500;
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
        font-weight: bold;
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  div.table-contents {
    background: ${(props) => props.theme.colors.lightest};
    padding: 20px;
    border-radius: ${(props) => props.theme.borders.radius};
    margin: 60px 0;

    ul {
      ${(props) => props.theme.extends.listStyle}
      margin: 0;

      li:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export { StyledPostDetails };
