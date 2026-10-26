import clsx from "clsx";

function Card({ children, className, tabIndex = -1 }) {
  return (
    <article
      className={clsx("rounded-md bg-neutral-0", className)}
      tabIndex={tabIndex}
    >
      {children}
    </article>
  );
}

export default Card;
