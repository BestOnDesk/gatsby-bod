import styled from "styled-components";

const FooterArea = styled.div`
  padding: 40px 0 !important;
  background-color: white !important;
`;

const FooterTop = styled.div``;

const Inner = styled.div`
  display: flex !important;
  align-items: center !important;
  flex-wrap: wrap !important;
  padding-bottom: 20px !important;
  border-bottom: 1px solid ${(props) => props.theme.colors.lighter} !important;
  margin-bottom: 20px !important;
`;

const FollowTitle = styled.h5`
  margin-right: 20px !important;
  margin-bottom: 0px !important;

  @media ${(props) => props.theme.layouts.smallMobile} {
    margin-bottom: 10px !important;
  }
`;

const CopyrightArea = styled.div``;

export { FooterArea, FooterTop, Inner, FollowTitle, CopyrightArea };
