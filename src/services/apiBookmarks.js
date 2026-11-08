import { supabase } from "./supabase";

export async function getBookmarks() {
  const { data, error } = await supabase.from("bookmarks").select(
    `
      jobId:job_id,
      userId:user_id,
      bookmarkedAt:bookmarked_at
    `,
  );

  if (error) throw error;

  return data;
}

export async function addBookmark({ userId, jobId }) {
  const { error } = await supabase
    .from("bookmarks")
    .insert({ user_id: userId, job_id: jobId });

  if (error) throw error;
}
