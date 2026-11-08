import clsx from "clsx";
import Button from "../../ui/Button";
import useAuth from "../Auth/useAuth";

function ApplyButton({ applyUrl, className }) {
  const { isAuthenticated } = useAuth();

  return (
    <Button
      size="large"
      variant="primary"
      className={clsx(className)}
      link
      to={isAuthenticated ? applyUrl : "/register"}
      target={isAuthenticated && "_blank"}
    >
      Apply Now
    </Button>
  );
}

export default ApplyButton;
