import clsx from "clsx";

function CompanyLogo({ className, size = "small", bgColor, imgPath }) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={clsx(className, "grid place-content-center", {
        "size-12.5 rounded-2xl": size === "small",
        "w-31.25 shrink-0 rounded-md": size === "large",
      })}
    >
      <img
        src={imgPath}
        alt=""
        className={clsx(size === "large" && "h-4.25 w-13.75")}
      />
    </div>
  );
}

export default CompanyLogo;
