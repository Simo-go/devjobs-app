import Button from "../../ui/Button";

function SocialButton({ Icon }) {
  return (
    <Button
      type="button"
      size="small"
      className="bg-slate-100 hover:bg-slate-200/50 md:shadow-sm"
    >
      {Icon}
    </Button>
  );
}

export default SocialButton;
