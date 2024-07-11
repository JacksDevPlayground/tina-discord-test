import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  // tinaioConfig: {
  //   frontendUrlOverride: "https://app.tinajs.dev",
  //   identityApiUrlOverride: "https://identity.tinajs.dev",
  //   contentApiUrlOverride: "https://content.tinajs.dev",
  //   assetsApiUrlOverride: "https://assets-api.tinajs.dev",
  // },
  admin: {
    authHooks: {
      onLogin: async ({ token }) => {
        console.log("onLogin Auth Hook Hit");

        //  When the user logs in enter preview mode
        location.href = `/api/draft?token=${token.id_token}&slug=` + location;
      },
      onLogout: async () => {
        // When the user logs out exit preview mode
        location.href = `/api/disable-draft?slug=` + location;
      },
    },
  },

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
          router(args) {
            return `/posts/${args.document._sys.breadcrumbs.join("/")}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "boolean",
            label: "Draft",
            name: "draft",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            parser: {
              type: "mdx",
            },
          },
        ],
      },
    ],
  },
});
