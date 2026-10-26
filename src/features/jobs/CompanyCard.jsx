import Button from "../../ui/Button";
import Card from "../../ui/Card";
import CompanyLogo from "./CompanyLogo";

function CompanyCard() {
  return (
    <Card className="-mt-8 mb-10 flex">
      <CompanyLogo size="large" />
      <div className="p-6">
        <h2 className="mb-4 text-preset-3 text-slate-900">Scoot</h2>
        <Button variant="secondary" size="normal">
          company site
        </Button>
      </div>
    </Card>
  );
}

export default CompanyCard;
