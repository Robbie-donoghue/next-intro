import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="mainPage text-3xl font-bold underline">
      <h1>The first header!</h1>
      <p> including dynamic routes and scary page structure</p>
      <Link href="/ancient-japan">
        See what Japanese history you will learn about today!
      </Link>
      <Link href="/blog"> Read blog posts</Link>
    </div>
  );
}
