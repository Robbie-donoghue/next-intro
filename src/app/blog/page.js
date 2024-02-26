import Link from "next/link";
export default async function page({ searchParams }) {
  //get data
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let posts = await response.json(); //parse response

  if (searchParams.user) {
    //loop through array 1 by 1 and return that post if the posts' userID== searchParam user
    posts = posts.filter((post) => post.userId == searchParams.user);
  }

  if (searchParams.sort) {
    posts.reverse();
  }
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            key={post.id}
            <h3>{post.title}</h3>
            <Link href={`/blog${post.id}`}>Read more!</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
