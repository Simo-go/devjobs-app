import Button from "../../ui/Button";
import Card from "../../ui/Card";
import CompanyLogo from "./CompanyLogo";

function CompanyCard({ job }) {
  const {
    company: { name: companyName, logo, bg_color: bgColor, website },
  } = job;

  return (
    <Card className="-mt-8 mb-10 flex">
      <CompanyLogo
        size="large"
        imgPath={logo}
        bgColor={bgColor}
        className="aspect-square max-w-30 max-md:w-[30%]"
      />
      <div className="flex grow flex-wrap items-center justify-between gap-2 p-6">
        <h2 className="text-preset-3 text-slate-900">{companyName}</h2>
        <Button
          variant="secondary"
          size="normal"
          link
          to={website}
          target="_blank"
        >
          company site
        </Button>
      </div>
    </Card>
  );
}

export default CompanyCard;
