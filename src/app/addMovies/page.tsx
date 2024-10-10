"use client";
//動画追加ページ
import React, { useState } from "react";

//supabaseにMovieの情報を追加するfunction
import { addMovie } from "../../../utils/supabase/supabasefunctions";

//shadcnのコンポーネント
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Page = () => {
  const [url, setUrl] = useState("");

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addMovie(url);
    setUrl("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">おススメの動画追加ページです</h1>
      <h1>URLを入力してください</h1>
      <form onSubmit={handleClick}>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            name="title"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            className=""
            placeholder="URL"
          />
          <Button type="submit">追加する</Button>
        </div>
      </form>
    </div>
  );
};

export default Page;
