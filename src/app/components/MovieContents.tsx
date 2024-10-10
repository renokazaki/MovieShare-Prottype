"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player"; //動画を埋め込むため

//supabaseからMovieの情報を取得
import { getMovie } from "../../../utils/supabase/supabasefunctions";

interface Movie {
  id: number;
  url: string;
  title: string;
  authorTitle: string;
}

const MovieContents = () => {
  const [MovieData, setMovieData] = useState<Movie[]>([]);

  //Movieデータ取得function
  //(2)promise.allについてメモあり
  const getMovieData = async () => {
    //supabaseよりレコードの配列を取得
    const movie = await getMovie();
    if (movie.data) {
      // 各動画のタイトルと著者名を取得してMovieDataを更新する
      const updatedMovies = await Promise.all(
        movie.data.map(async (movie: Movie) => {
          const oEmbedData = await fetchOEmbedData(movie.url); // 各URLに対してoEmbedデータを取得。タイトルと投稿者が返ってくる
          return { ...movie, ...oEmbedData }; // Movieオブジェクトにタイトルと著者の情報も追加
        })
      );
      setMovieData(updatedMovies); //追加された新しい情報
    } else {
      console.error("Supabaseから動画データが取得できませんでした");
    }
  };

  //動画情報取得用関数
  //以下URLに動画のURLを差し込むと情報を取得できる
  //今回はタイトルと投稿者を取得しリターンする
  const fetchOEmbedData = async (url: string) => {
    try {
      const response = await fetch(
        `https://www.youtube.com/oembed?url=${url}&format=json`
      );
      const data = await response.json();
      return { title: data.title, authorTitle: data.author_name };
    } catch (error) {
      console.error("Error fetching video title:", error);
      return { title: "Unknown Title", authorTitle: "Unknown Author" }; // エラー時のデフォルト値
    }
  };

  //画面表示時に動画を表示するため
  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <>
      {MovieData.map((movie) => (
        <div key={movie.id} className="flex border border-black mb-1">
          <div className="bg-slate-600 h-40 w-48">
            <ReactPlayer
              url={movie.url}
              controls={true}
              height={160}
              width={192}
            />
          </div>
          <div className="bg-orange-300 h-40 w-full flex flex-col justify-between">
            <div>{movie.title}</div>
            <div className="text-gray-700 text-sm border-t border-black">
              {movie.authorTitle}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieContents;
