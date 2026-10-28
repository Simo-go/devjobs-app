import { supabase } from "./supabase";
import jobs from "../data.json";

export async function getJobs() {
  const { data, error } = await supabase.from("jobs").select("*, companies(*)");
  console.log(data);
}

getJobs();

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
