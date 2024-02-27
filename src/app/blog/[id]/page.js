// /app/posts/[id]/page.jsx
export default async function PostPage({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}` // include the params.id value from the URL
  );
  const post = await response.json(); // parse the response as JSON

  return (
    <div>
      <h1>Post {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
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
