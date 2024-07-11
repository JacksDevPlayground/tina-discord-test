import client from "@/tina/__generated__/client";
import React from "react";
import ClientPage from "./client-page";
import { draftMode } from "next/headers";

export default async function PostPage({
  params,
}: {
  params: { filename: string[] };
}) {
  const { isEnabled } = draftMode();

  console.log("Draft mode", isEnabled);

  const data = await client.queries.post({
    relativePath: `${params.filename?.join("/")}.md`,
  });

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
