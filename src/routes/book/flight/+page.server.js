import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("flightoffers").select();
  return {
    offers: data ?? [],
  };
}