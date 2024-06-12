import { z } from "zod";

export const Route = {
  name: "PostsFilename",
  params: z.object({
    filename: z.string(),
  })
};

