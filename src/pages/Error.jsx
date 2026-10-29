/* eslint-disable tailwindcss/classnames-order */
import Button from "../ui/Button";

function Error({ children, refetch, retry }) {
  return (
    <div className="flex flex-col gap-4 self-center justify-self-center">
      <span className="text-preset-4-regular text-red-500">{children}</span>
      {retry && (
        <Button className="self-center" size="large" onClick={refetch}>
          Retry
        </Button>
      )}
    </div>
  );
}

export default Error;
