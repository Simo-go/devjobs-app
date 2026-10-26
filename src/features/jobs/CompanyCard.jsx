import Button from "../../ui/Button";
import Card from "../../ui/Card";
import CompanyLogo from "./CompanyLogo";

function CompanyCard({ job }) {
  const {
    company: { name: companyName, logo, bg_color: bgColor, website },
  } = job;

  return (
    <Card className="-mt-8 mb-10 flex">
      <CompanyLogo size="large" imgPath={logo} bgColor={bgColor} />
      <div className="p-6">
        <h2 className="mb-4 text-preset-3 text-slate-900">{companyName}</h2>
        <Button variant="secondary" size="normal">
          company site
        </Button>
      </div>
    </Card>
  );
}

export default CompanyCard;
