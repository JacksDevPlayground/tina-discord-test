import { Components } from "tinacms/dist/rich-text";

export const MdxComponents: Components<{
  // Pass custom components here
}> = {
  p: (props) => <p className="bg-red-200" {...props} />,
  ul: (props) => <ul className="list-disc" {...props} />,
  ol: (props) => <ol className="list-decimal" {...props} />,
};
