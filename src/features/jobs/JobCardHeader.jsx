import CompanyLogo from "./CompanyLogo";

function JobCardHeader({ job }) {
  const {
    jobPosition: position,
    logoUrl,
    name: companyName,
    logoBgColor,
  } = job;

  return (
    <header className="mb-3">
      <CompanyLogo
        imgPath={logoUrl}
        bgColor={logoBgColor}
        className="absolute top-0 left-8 translate-y-[-50%]"
      />
      <span className="text-preset-5 mb-1 block text-sm text-[.75rem] font-medium tracking-wide text-slate-500 uppercase">
        {companyName}
      </span>
      <h2 className="text-preset-3 text-slate-900">{position}</h2>
    </header>
  );
}

export default JobCardHeader;
