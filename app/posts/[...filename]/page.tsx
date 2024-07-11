import client from "@/tina/__generated__/client";
import React from "react";
import ClientPage from "./client-page";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

const isProd = process.env.NODE_ENV === "production";

export default async function PostPage({
  params,
}: {
  params: { filename: string[] };
}) {
  const { isEnabled } = draftMode();

  const data = await client.queries.post({
    relativePath: `${params.filename?.join("/")}.md`,
  });

  const isDraft = data.data.post.draft;

  if (isProd && isDraft && !isEnabled) {
    return notFound();
  }

  return (
    <div>
      <h1>Post {params.filename}</h1>
      <ClientPage {...data} />
    </div>
  );
}

export async function generateStaticParams() {
  // console.log("generateStaticParams", props);

  const posts = await client.queries.postConnection({
    filter: { draft: { eq: false } },
  });
  const paths = posts.data?.postConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));
  return paths || [];
}
