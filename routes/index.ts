// Automatically generated by declarative-routing, do NOT edit
import { z } from "zod";
import { makeRoute } from "./makeRoute";

const defaultInfo = {
  search: z.object({}),
};

import * as HomeRoute from "@/app/page.info";
import * as PostsRoute from "@/app/posts/page.info";
import * as PostsFilenameRoute from "@/app/posts/[...filename]/page.info";

export const Home = makeRoute("/", {
  ...defaultInfo,
  ...HomeRoute.Route,
});
export const Posts = makeRoute("/posts", {
  ...defaultInfo,
  ...PostsRoute.Route,
});
export const PostsFilename = makeRoute("/posts/[filename]", {
  ...defaultInfo,
  ...PostsFilenameRoute.Route,
});