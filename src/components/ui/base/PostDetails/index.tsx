import React from "react";
import { StyledPostDetails } from "./index.style";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import RehypeReact from "rehype-react";
import PostPreview, { isPostPreviewValid } from "../PostPreview";

export interface PostDetailsQueryResult {
  primeLogo: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

export interface PostDetailsProps {
  content: string;
  ast: any;
}

// @ts-ignore
const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    figure: (props: any) => {
      if (isPostPreviewValid(props)) return <PostPreview {...props} />;
      else return <figure {...props}>{props.children}</figure>;
    },

    script: () => null, // TODO: check if scripts can work with iubenda
    ins: () => null,
    br: () => null,
  },
}).Compiler;

const Ast = ({ ast, ...props }: any) => {
  ast.properties = props;
  return renderAst(ast);
};

const PostDetails = ({ ast }: PostDetailsProps) => {
  const { primeLogo }: PostDetailsQueryResult = useStaticQuery(graphql`
    {
      primeLogo: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "logo/amazon-prime-logo.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 62)
        }
      }
    }
  `);

  return (
    <StyledPostDetails
      primeLogoSrc={
        primeLogo.childImageSharp.gatsbyImageData.images.fallback?.src
      }
    >
      <Ast ast={ast} />
    </StyledPostDetails>
  );
};

export default PostDetails;
