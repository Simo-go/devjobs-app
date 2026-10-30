import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getJob } from "../../services/apiJobs";

export function useJob(id) {
  const queryClient = useQueryClient();

  const {
    data: job,
    error,
    isPending,
  } = useQuery({
    queryKey: ["job", id],
    queryFn: () => getJob(id),
    initialData: () => {
      const job = getJobFromCache(queryClient, id);
      console.log(job);

      return job ?? undefined;
    },
  });

  return { job, error, isPending };
}

function getJobFromCache(queryClient, id) {
  const jobs = queryClient
    .getQueryData(["jobs"])
    ?.pages.flatMap((page) => page.data);

  return jobs?.find((job) => job.id === Number(id));
}
