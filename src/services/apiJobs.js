import { LIMIT } from "../utils/constants";
import { normalizeObjectKeys } from "../utils/helpers";
import { supabase } from "./supabase";

export async function addBulkNoForeignKey(table, dataArr) {
  const { data, error } = await supabase.from(table).insert(dataArr).select();

  if (error) throw new Error(error);

  return data;
}

export async function insertBulkJobs(jobs) {
  for (const job of jobs) {
    try {
      await insertJob(job);
    } catch (err) {
      console.error(`Could not insert job with id ${job.id}. ${err.message}`);
    }
  }
}

export async function insertJob(job) {
  const { data, error } = await supabase
    .from("companies")
    .select("id, name")
    .eq("name", job.company.name);

  const id = data[0]?.id;
  if (!id) console.error(`FOLLOWING COMPANY NOT FOUND: ${job.company.name}`);

  const filteredJob = Object.fromEntries(
    Object.entries(job).filter(([key, _]) => {
      return (
        // key !== "created_at" &&
        key != "modified_at" && key !== "id" && key !== "company"
      );
    }),
  );

  filteredJob["company_id"] = id;

  console.log(filteredJob.id);

  const { data: updateData, error: updateError } = await supabase
    .from("jobs")
    .insert(filteredJob);

  if (updateError) throw new Error(updateError.message);
}

export async function populateJobs(jobs) {
  jobs.forEach((job) => insertJob(job));
}

export async function getJobs({
  currentCursor = null,
  currentCursorId = null,
}) {
  const { data, error } = await supabase.rpc("get_filtered_jobs_by_cursor", {
    p_cursor_date: currentCursor ?? null,
    p_cursor_id: currentCursorId ?? null,
    p_limit: LIMIT,
  });

  if (error) throw new Error(error.message);

  const normalizedData = data.map((item) => normalizeObjectKeys(item));

  if (normalizedData.length !== LIMIT) return { data: normalizedData };

  const { id: nextCursorId, createdAt: nextCursor } = normalizedData.at(-1);

  return { data: normalizedData, nextCursor: { nextCursor, nextCursorId } };
}

export async function getJob(id) {
  const { data, error } = await supabase
    .from("jobs")
    .select(
      `
      *,
      ...companies(
        logoBgColor:logo_bg_color,
        logoUrl:logo_url,
        companyName:name,
        websiteUrl:website_url
      )`,
    )
    .eq("id", id);

  if (error) console.error(error);

  if (error) throw new Error(error.message);

  const normalizedData = normalizeObjectKeys(data[0]);

  return normalizedData;
}
