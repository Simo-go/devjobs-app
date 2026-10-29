import { useQuery } from "@tanstack/react-query";
import { getJob } from "../../services/apiJobs";

export function useJob(id) {
  const {
    data: job,
    error,
    isPending,
  } = useQuery({
    queryKey: ["job", id],
    queryFn: () => getJob(id),
  });

  return { job, error, isPending };
}
