import dynamic from "next/dynamic";

const DynamicMovieContents = dynamic(
  () => import("./myComponents/MovieContents"),
  { ssr: false }
  //memoに経緯残している。(1)
  //ハイドレーションエラー回避の為
);

export default function Home() {
  return (
    <>
      <DynamicMovieContents />
    </>
  );
}
