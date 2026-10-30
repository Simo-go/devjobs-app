import { LIMIT } from "../utils/constants";
import { normalizeObjectKeys } from "../utils/helpers";
import { supabase } from "./supabase";

export async function addBulkNoForeignKey(table, dataArr) {
  const { data, error } = await supabase.from(table).insert(dataArr).select();

  if (error) throw new Error(error);

  return data;
}

export async function insertJob(job) {
  const { data, error } = await supabase
    .from("companies")
    .select("id, name")
    .eq("name", job.company.name);

  const id = data[0].id;
  console.log(data);

  console.log(id, error);

  const filteredJob = Object.fromEntries(
    Object.entries(job).filter(([key, _]) => {
      console.log(key);

      return (
        key !== "created_at" &&
        key != "modified_at" &&
        key !== "id" &&
        key !== "company"
      );
    }),
  );

  filteredJob["company_id"] = id;

  const { data: updateData, error: updateError } = await supabase
    .from("jobs")
    .insert(filteredJob)
    .select();
  console.log(updateError);

  if (updateError) throw new Error(updateError.message);
  console.log(updateData);
}

export async function populateJobs(jobs) {
  jobs.forEach((job) => insertJob(job));
}

export async function getJobs({
  currentCursor = new Date().toISOString(),
  currentCursorId,
}) {
  let idLatestJob, idError;
  if (!currentCursorId) {
    const { data, error } = await supabase
      .from("jobs")
      .select("id")
      .order("created_at", { ascending: false })
      .limit(1);
    idLatestJob = data[0].id;
    idError = error;
  }

  if (idError) throw new Error(idError.message);

  const { data, error } = await supabase
    .from("jobs")
    .select(
      `
    id,
    position,
    createdAt:created_at,
    contract,
    description,
    requirements,
    role,
    location,
    applyUrl:apply_url,
    ...companies!inner(
      companyName:name,
      logoUrl:logo_url,
      logoBgColor:logo_bg_color,
      websiteUrl:website_url
    )
    `,
    )
    .lt("created_at", currentCursor)
    .lt("id", currentCursorId ?? idLatestJob)
    .order("created_at", {
      ascending: false,
    })
    .order("id", { ascending: false })
    .limit(LIMIT);

  if (error) throw new Error(error.message);

  if (data.length !== LIMIT) return { data };

  const { id: nextCursorId, createdAt: nextCursor } = data.at(-1);

  return { data, nextCursor: { nextCursor, nextCursorId } };
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

  if (error) throw new Error(error.message);

  const normalizedData = normalizeObjectKeys(data[0]);

  return normalizedData;
}
