import client from "@/tina/__generated__/client";
import Link from "next/link";
import { PostConnectionQueryVariables } from "@/tina/__generated__/types";

// Way to track cursors for each page
// {'0': 'Y29udGVudC9wb3N0cy9UZXN0LTEubWQ=',...}
let cursorMap: {
  [key: number]: string;
} = {};

export default async function PostListPage({ searchParams }: any) {
  const { after, page = 0 } = searchParams || {};
  const currentPage = parseInt(page);

  const forwardOptions: PostConnectionQueryVariables = {
    first: 1,
    after: after || cursorMap[currentPage - 1] || null,
  };
  const posts = await client.queries.postConnection(forwardOptions);

  // Update the cursor map
  if (posts?.data?.postConnection?.totalCount >= 0) {
    cursorMap[currentPage] = posts.data.postConnection.pageInfo.endCursor;
  }

  const pageInfo = posts.data.postConnection.pageInfo;
  const hasNextPage = pageInfo.hasNextPage;

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.data?.postConnection.totalCount > 0 ? (
          posts.data.postConnection.edges?.map((post) => (
            <li key={post?.node?._sys.filename}>
              <a href={`/posts/${post?.node?._sys.filename}`}>
                {post?.node?.title}
              </a>
            </li>
          ))
        ) : (
          <>No Posts</>
        )}
      </ul>
      <div>
        {currentPage > 0 && (
          <Link href={`posts/?page=${currentPage - 1}`}>Prev</Link>
        )}
        {hasNextPage && (
          <Link
            href={`posts/?page=${currentPage + 1}&after=${pageInfo.endCursor}`}
          >
            Next
          </Link>
        )}
      </div>
    </>
  );
}
