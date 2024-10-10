import dynamic from "next/dynamic";

const DynamicMovieContents = dynamic(
  () => import("../app/components/MovieContents"),
  { ssr: false }
  //memoに経緯残している。(1)
  //ハイドレーションエラー回避の為
);

export default function Home() {
  return (
    <>
      <DynamicMovieContents />
      <DynamicMovieContents />
      <DynamicMovieContents />
      <DynamicMovieContents />
      <DynamicMovieContents />
      <DynamicMovieContents />
    </>
  );
}
