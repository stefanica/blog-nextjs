import { posts } from "../../../lib/placeholder-data";
import Post from "@/app/ui/components/posts/posts";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = posts.find((post) => post.id === id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <h1>Post</h1>
      <Post {...post} />
    </>
  );
}