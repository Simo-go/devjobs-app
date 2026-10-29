import { LIMIT } from "../../utils/constants";
import JobSkeleton from "./JobSkeleton";

function JobsSkeleton({ numCards }) {
  return Array.from({ length: numCards }, (_, idx) => (
    <JobSkeleton key={idx} />
  ));
}

export default JobsSkeleton;
