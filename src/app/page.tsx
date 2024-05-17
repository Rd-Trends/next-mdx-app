import { getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function Home() {
  const post = await getPostBySlug("/");

  if (!post) {
    return notFound();
  }
  const source = post.source;
  return <div className=" space-y-8">{post.content}</div>;
}
