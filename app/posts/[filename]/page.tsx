import React from "react";

export default function PostPage({
  params: { filename },
}: {
  params: { filename: string };
}) {
  return <div>Post {filename}</div>;
}
