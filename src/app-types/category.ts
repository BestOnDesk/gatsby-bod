export interface MainCategory {
  id: string;
  slug: string;
  name: string;
  wpChildren: {
    nodes: SubCategory[];
  };
}

export interface SubCategory {
  id: string;
  slug: string;
  name: string;
}
