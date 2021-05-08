import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

export interface TabAreaProps {
  mainCategorySlug: string;
}

interface TabAreaQueryProps {
  categories: {
    nodes: {
      slug: string;
      name: string;
      wpChildren: {
        nodes: {
          slug: string;
          name: string;
          posts: {
            nodes: {
              date: string;
              slug: string;
              title: string;
              featuredImage: {
                node: {
                  localFile: {
                    childImageSharp: IGatsbyImageData;
                  };
                };
              };
            }[];
          };
        };
      }[];
    };
  };
}

const TabArea = (props: TabAreaProps) => {
  const { categories }: TabAreaQueryProps = useStaticQuery(graphql`
    query {
      categories: allWpCategory(
        sort: { fields: name, order: DESC }
        filter: {
          slug: { ne: "uncategorized-en" }
          wpChildren: { nodes: { elemMatch: { count: { gt: 0 } } } }
        }
      ) {
        nodes {
          slug
          name
          wpChildren {
            nodes {
              slug
              name
              posts {
                nodes {
                  date
                  slug
                  title
                  featuredImage {
                    node {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(width: 780, height: 520)
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  console.log(categories);
};

export default TabArea;
