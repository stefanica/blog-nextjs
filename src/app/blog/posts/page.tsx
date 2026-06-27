import { posts } from '../../lib/placeholder-data';
import Post from '@/app/ui/components/posts/posts';

export default function PostsPage() {
  return (
    <main>
      <h1>Posts</h1>

      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          date={post.date}
        />
      ))}
    </main>
  );
}