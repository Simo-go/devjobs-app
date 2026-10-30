import clsx from "clsx";

function CompanyLogo({ className, size = "small", bgColor, imgPath }) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={clsx(className, "flex items-center justify-center", {
        "size-12.5 rounded-2xl": size === "small",
        "w-31.25 shrink-0 rounded-md": size === "large",
      })}
    >
      <img src={imgPath} alt="" className={clsx(size === "large" && "w-20")} />
    </div>
  );
}

export default CompanyLogo;
