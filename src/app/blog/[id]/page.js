import { sql } from "@vercel/postgres";
// /app/posts/[id]/page.jsx

export default async function PostPage({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}` // include the params.id value from the URL
  );
  const posts = await sql`SELECT * FROM posts WHERE id = ${params.id};`; // parse the response as JSON

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.rows.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function generateMetadata({ params, searchParams }, parent) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await result.json();
  return {
    title: `My gold standad blog`,
    description: `This is an article about ${post.title}`,
  };
}
