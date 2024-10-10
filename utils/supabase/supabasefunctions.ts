import {supabase} from "./supabase"

//Movie取得用
export const getMovie = async () =>{
    const movie = await supabase.from("Movie").select("*").order("id", { ascending: true }); // idで昇順に並べる
    return movie
}
//Movie追加用
export const addMovie = async (url : string) =>{
    await supabase.from("Movie").insert({url:url})
}