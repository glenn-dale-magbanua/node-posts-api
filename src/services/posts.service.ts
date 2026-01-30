
export type Post = { id: string; name: string; description: string };

// In-memory demo store
const posts: Post[] = [
  { id: '1', name: 'Post 1', description: 'Description 1' },
  { id: '2', name: 'Post 2', description: 'Description 2' },
];

export function listPosts(): Post[] {
  return posts;
}

export function createPost(data: Pick<Post, 'name' | 'description'>): Post {
  const id = String(posts.length + 1);
  const user = { id, ...data };
  posts.push(user);
  return user;
}
