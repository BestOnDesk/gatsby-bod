import { PostPreview } from "../app-types/post";

const sortPostsPreviewDateDesc = (posts: PostPreview[]): PostPreview[] => {
  return posts.sort((a, b) => {
    return Date.parse(b.date) - Date.parse(a.date);
  });
};

const getLastPostsPreview = (
  posts: PostPreview[],
  last: number
): PostPreview[] => sortPostsPreviewDateDesc(posts).slice(0, last);

export { getLastPostsPreview };
