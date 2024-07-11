import HomeCard from "@/components/home-card";
import { LuArrowBigRightDash, LuAppWindow } from "react-icons/lu";

export default function Home() {
  return (
    <>
      <h1>This is a simple collection of the following examples, </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <HomeCard
          title={"Pagination"}
          description={"An example of using pagination"}
          href={"/posts"}
          Icon={LuArrowBigRightDash}
        />
        <HomeCard
          title={"TinaMarkdown Component"}
          description={"An example of using TinaMarkdown Component"}
          href={"/posts/markdown"}
          Icon={LuAppWindow}
        />
      </div>
    </>
  );
}
