"use client";
import { MdxComponents } from "@/components/mdx-components";
import { PostQuery } from "@/tina/__generated__/types";
import React from "react";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface ClientPostProps {
  data: PostQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

export default function ClientPage(props: ClientPostProps) {
  const { data } = useTina(props);
  return (
    <>
      <div data-tina-field={tinaField(data.post, "body")}>
        <TinaMarkdown content={data.post.body} components={MdxComponents} />
      </div>
    </>
  );
}
