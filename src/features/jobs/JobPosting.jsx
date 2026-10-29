import { useParams } from "react-router";
import CompanyCard from "./CompanyCard";
import JobBox from "./JobBox";
import { useJob } from "./useJob";
import LoadingSpinner from "../../ui/LoadingSpinner";

const job = {
  id: 1,
  position: "Senior Software Engineer",
  createdAt: new Date().toISOString(),
  contract: "full-time",
  location: "Nicosia",
  apply: "https://example.com/scoot/apply",
  description:
    "Scoot is looking for a Senior Software Engineer passionate about building approachable, innovative and user-first experiences to join our small but growing Engineering team. You will be responsible for building and maintaining front end functionality across all of Scoot’s applications, fostering a growing team of software engineers, and helping drive and maintain best software patterns and practices in our codebase.",
  company: {
    name: "Scoot",
    logo: "./assets/logos/scoot.svg",
    bg_color: "#E99210",
    website: "https://example.com/scoot",
  },
  requirements: {
    content:
      "The ideal candidate is as passionate about solving challenges through technology. They are well-versed in building proof of concepts from scratch and taking these POCs to production and scale. The right fit will have the engineering experience to build and iterate quickly and is comfortable working with product and design to set the technical strategy and roadmap.",
    items: [
      "5+ years of industry experience in a software engineering role, preferably building a SaaS product. You can demonstrate significant impact that your work has had on the product and/or the team.",
      "Experience with scalable distributed systems, both built from scratch as well as on AWS primitives.",
      "Extremely data-driven.",
      "Ability to debug complex systems.",
    ],
  },
  role: {
    content:
      "We are looking for a Senior Software Engineer to join as one of our first hires. As we iterate on our MVP, you will have the opportunity to drive the vision and own the build behind our digital experience. You’ll have the support of an experienced technical advisor, a Head of Product, and an external team to work with.",
    items: [
      "This role is for someone who is excited about the early stage - you’ll be responsible for turning the platform vision into reality through smart, efficient building and testing.",
      "Translate the product roadmap into engineering requirements and own the engineering roadmap",
      "Work with limited resources to test and learn as efficiently as possible, while laying the framework to build a more scalable product over time.",
      "Collaborate with product, design, and external engineering teammates as needed.",
    ],
  },
};

function JobPosting() {
  const { id } = useParams();

  const { job, error, isPending } = useJob(id);

  if (isPending) return <LoadingSpinner />;

  if (error) return <Error>{error.message}</Error>;

  return (
    <div className="mx-auto max-w-182.5 pb-40 md:pb-10">
      <CompanyCard job={job} />
      <JobBox job={job} />
    </div>
  );
}

export default JobPosting;
