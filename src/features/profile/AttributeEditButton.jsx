import clsx from "clsx";
import Button from "../../ui/Button";

function AttributeEditButton({ children, className, ...props }) {
  return (
    <Button
      {...props}
      className={clsx(
        className,
        "size-6 bg-transparent p-1 transition-[opacity,visibility] duration-100 hover:bg-slate-100",
      )}
    >
      {children}
    </Button>
  );
}

export default AttributeEditButton;
