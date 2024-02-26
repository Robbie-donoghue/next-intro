import Link from "next/link";

export default function Page({ params }) {
  console.log(params);
  return (
    <div>
      <h2>Cool Japanese warriors </h2>
      <p>I'll populate this later </p>
      <Link href={`/ancient-japan/${params.id}/names-of-samurai`}>
        Link to samurai
      </Link>
    </div>
  );
}
