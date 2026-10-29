import CompanyLogo from "./CompanyLogo";

function JobCardHeader({ job }) {
  const { position, logoUrl, companyName, logoBgColor } = job;
  console.log(logoUrl);

  return (
    <header className="mb-3">
      <CompanyLogo
        imgPath={logoUrl}
        bgColor={logoBgColor}
        className="absolute top-0 left-8 translate-y-[-50%]"
      />
      <span className="mb-1 block text-prest-5 text-sm text-[.75rem] font-medium tracking-wide text-slate-500 uppercase">
        {companyName}
      </span>
      <h2 className="text-preset-3 text-slate-900">{position}</h2>
    </header>
  );
}

export default JobCardHeader;
