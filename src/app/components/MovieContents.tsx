"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player"; //動画を埋め込むため

const VIDEO_URL = "https://www.youtube.com/watch?v=aTkkc7F3MCg"; //テストデータ

const MovieContents = () => {
  const [title, setTitle] = useState("");
  const [authorTitle, setAuthorTitle] = useState("");

  //動画情報取得用関数
  const fetchOEmbedData = async () => {
    try {
      const response = await fetch(
        `https://www.youtube.com/oembed?url=${VIDEO_URL}&format=json`
      );
      const data = await response.json();
      setTitle(data.title);
      setAuthorTitle(data.author_name);
    } catch (error) {
      console.error("Error fetching video title:", error);
    }
  };

  useEffect(() => {
    fetchOEmbedData();
  }, []);

  return (
    <>
      <div className="flex border border-black mb-1">
        <div className="bg-slate-600 h-40 w-48">
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=aTkkc7F3MCg"}
            controls={true}
            height={160}
            width={192}
          />
        </div>
        <div className="bg-orange-300 h-40 w-full flex flex-col justify-between">
          <div>{title}</div>
          <div className="text-gray-700 text-sm border-t border-black">
            {authorTitle}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieContents;
