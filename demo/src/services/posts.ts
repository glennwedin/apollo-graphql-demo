import { ApolloError } from 'apollo-server-errors';

export interface Post {
  id: number;
  title: string;
  author: string;
  created: String;
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Tittel på post',
    author: 'Glenn',
    created: '2021-11-01T21:00:00Z',
  },
  {
    id: 2,
    title: 'Tittel på post 2',
    author: 'Glenn',
    created: '2021-11-01T21:00:00Z',
  },
  {
    id: 3,
    title: 'Tittel på post 3',
    author: 'Glenn',
    created: '2021-11-01T21:00:00Z',
  },
];

export const getPosts = (): Post[] => {
  return posts;
};

export const getPost = (id: number): Post => {
  const post = posts.find((post) => post.id === id);
  if (!post) {
    throw new ApolloError('Fant ikke post');
  }
  return post;
};
