import styled from "styled-components";

const StyledPostMeta = styled.div`
  margin-top: 34px;
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.layouts.sm} {
    margin-top: 20px;
  }
`;

const PostAuthorAvatar = styled.div`
  min-width: 50px;
  width: 50px;
  margin-right: 15px;
  border-radius: 100%;
  img {
    width: 100%;
    border-radius: 100%;
  }
`;

const Content = styled.div``;

const PostAuthorName = styled.h6`
  margin-bottom: 4px;
  font-weight: ${(props) => props.theme.fonts.weight.pMedium};
  a {
    ${(props) => props.theme.extends.transition}
  }
`;

export { StyledPostMeta, PostAuthorAvatar, Content, PostAuthorName };
