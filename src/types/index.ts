export interface BaseSVG {
  width?: number;
  height?: number;
  color?: string;
}

interface Entity {
  id: string;
}

export interface Post extends Entity {
  title: string;
  content: string;
}

export interface PostGroup extends Entity {
  title: string;
  posts: Post[];
  background: string;
}
