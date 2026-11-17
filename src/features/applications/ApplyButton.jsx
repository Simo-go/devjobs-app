import clsx from "clsx";
import Button from "../../ui/Button";
import useAuth from "../Auth/useAuth";

function ApplyButton({ className, onClick }) {
  const { isAuthenticated } = useAuth();

  return (
    <Button
      size="large"
      variant="primary"
      className={clsx(className)}
      link={!isAuthenticated}
      to={!isAuthenticated && "/register"}
      onClick={onClick}
    >
      Apply Now
    </Button>
  );
}

export default ApplyButton;
