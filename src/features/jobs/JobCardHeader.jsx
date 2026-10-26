import CompanyLogo from "./CompanyLogo";

function JobCardHeader({ job }) {
  const {
    position,
    company: { logo, name: copmanyName, bg_color: bgColor },
  } = job;

  return (
    <header className="mb-3">
      <CompanyLogo
        imgPath={logo}
        bgColor={bgColor}
        className="absolute top-0 left-8 translate-y-[-50%]"
      />
      <span className="mb-1 block text-prest-5 text-sm text-[.75rem] font-medium tracking-wide text-slate-500 uppercase">
        {copmanyName}
      </span>
      <h2 className="text-preset-3 text-slate-900">{position}</h2>
    </header>
  );
}

export default JobCardHeader;
