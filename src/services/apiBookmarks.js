import { normalizeObjectKeys } from "../utils/helpers";
import { supabase } from "./supabase";

export async function getBookmarks({ userId }) {
  const { data, error } = await supabase
    .from("bookmarks")
    .select(
      `
      ...jobs!inner(
      *,
        ...companies!inner(
         companyId:id,
      companyName:name,
      logoUrl:logo_url,
      logoBgColor:logo_bg_color,
      websiteUrl:website_url
        )
      )
    `,
    )
    .eq("user_id", userId);

  if (error) throw error;

  const normalizedData = data.map((item) => ({
    ...normalizeObjectKeys(item),
    jobPosition: item.position,
  }));

  return normalizedData;
}

export async function addBookmark({ userId, jobId }) {
  const { error } = await supabase
    .from("bookmarks")
    .insert({ user_id: userId, job_id: jobId });

  if (error) throw error;
}

export async function removeBookmark({ userId, jobId }) {
  const { error } = await supabase
    .from("bookmarks")
    .delete()
    .eq(`user_id`, userId)
    .eq("job_id", jobId);

  if (error) throw error;
}

export async function getBookmarkedJobIds({ userId }) {
  const { data, error } = await supabase
    .from("bookmarks")
    .select(
      `
      bookmarkedAt:bookmarked_at,
      jobId:job_id
    `,
    )
    .eq("user_id", userId);

  if (error) throw error;

  return data;
}
