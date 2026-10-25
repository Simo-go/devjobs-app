import CompanyLogo from "./CompanyLogo";

const job_posting = {
  id: 1,
  position: "Senior Software Engineer",
  createdAt: new Date().toISOString(),
  contract: "full-time",
  location: "United Kingdom",
  website: "https://example.com/scoot",
  apply: "https://example.com/scoot/apply",
  description:
    "Scoot is looking for a Senior Software Engineer passionate about building approachable, innovative and user-first experiences to join our small but growing Engineering team. You will be responsible for building and maintaining front end functionality across all of Scoot’s applications, fostering a growing team of software engineers, and helping drive and maintain best software patterns and practices in our codebase.",
  company: {
    name: "Scoot",
    logo: "./assets/logos/scoot.svg",
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

function JobCard() {
  return (
    <article className="relative row-span-3 grid grid-rows-subgrid gap-0 rounded-md bg-neutral-0 px-8 pt-12 pb-5">
      <header className="mb-3">
        <CompanyLogo imgPath="" />
        <span className="mb-1 block text-prest-5 text-sm text-[.75rem] font-medium tracking-wide text-slate-500 uppercase">
          Scoot
        </span>
        <h2 className="text-preset-3 text-slate-900">
          Senior Software Engineer
        </h2>
      </header>
      <section className="mb-6">
        <p className="line-clamp-2 text-prest-5 leading-relaxed font-normal text-[#7F8FA4]">
          Scoot is looking for a Senior Software Engineer passionate about
          building approachable, innovative and user-first experiences to join
          our small but growing Engineering team.
        </p>
      </section>
      <footer className="flex items-center justify-between gap-1">
        <address className="grow text-prest-5 text-indigo-500 not-italic">
          United Kingdom
        </address>
        <div className="flex flex-wrap items-center justify-end gap-x-2 gap-y-0 text-sm text-[#7F8FA4]">
          <span className="shrink-0 text-sm">5h ago</span>
          <span className="shrink-0">&middot;</span>
          <span className="shrink-0">Full Time</span>
        </div>
      </footer>
    </article>
  );
}

export default JobCard;
