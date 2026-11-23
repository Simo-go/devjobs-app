export type Contract = "part-time" | "full-time" | "student" | "freelance";

export type JobDetails = {
  content: string;
  items: Array<string>;
};

export type Job = {
  applyUrl: string;
  contract: Contract;
  createdAt: string;
  description: string;
  ftsIndex: string | null; // full text search index stored so that it doesn't have to be recalculated every time (note: only recalculated when a job is added or modified with a trigger)
  id: number;
  location: string;
  modifiedAt: string;
  position: string;
  requirements: JobDetails;
  role: JobDetails;
  companyId: number;
};

export type Company = {
  id: number;
  websiteUrl: string;
  logoUrl: string;
  logoBgColor: string;
  companyName: string;
};

export type JobWithCompany = Job & Omit<Company, "id">;

export type FormValues = {
  cv: FileList;
  motivation: string;
};
