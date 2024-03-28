import { sql } from "@vercel/postgres";
import { Redirect } from "next";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
export default function NewPostPage() {
  async function handleSavePost(formData) {
    "use server"; //run funct on server
    console.log("saving post to database");
    //get obj that formdata obj next provides, save in vars
    const title = formData.get("title");
    const content = formData.get("content");
    //insert data into postgres
    await sql`INSERT INTO posts (title, content) VALUES (${title}, ${content})`;
    console.log("post saved");
    revalidatePath("/blog");
    redirect("/blog");
  }
  // return handleSavePost jsx
  return (
    <form action={handleSavePost}>
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text"></input>
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content"></textarea>
      <button type="submit">save</button>
    </form>
  );
}
