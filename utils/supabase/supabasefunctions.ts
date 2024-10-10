import {supabase} from "./supabase"

//room取得用
export const getMovie = async () =>{
    const movie = await supabase.from("Movie").select("*").order("id", { ascending: true }); // idで昇順に並べる
    return movie
}
//room取得用
export const getRoom = async () =>{
    const room = await supabase.from("room").select("*").order("id", { ascending: true }); // idで昇順に並べる
    return room
}