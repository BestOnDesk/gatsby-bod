export interface MenuCategory {
  id: string;
  slug: string;
  name: string;
  wpChildren: {
    nodes: {
      id: string;
      slug: string;
      name: string;
    }[];
  };
}
