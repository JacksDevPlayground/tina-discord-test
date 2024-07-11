---
title: TinaMarkdown Component
---

# Example of the TinaMarkdown Component

```javascript
// page.tsx

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

```

```javascript
//Markdown components

import { Components } from "tinacms/dist/rich-text";

export const MdxComponents: Components<{
  // Pass custom components here
}> = {
  p: (props) => <p className="bg-red-200" {...props} />,
  ul: (props) => <ul className="list-disc" {...props} />,
  ol: (props) => <ol className="list-decimal" {...props} />,
};

```

* ✅ Type Safe
* ✅ Full Control
* ✅ Extendable

> Very cool\
> \- Tina User
