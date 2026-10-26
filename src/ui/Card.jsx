import clsx from "clsx";

function Card({ children, className }) {
  return (
    <article className={clsx("rounded-md bg-neutral-0", className)}>
      {children}
    </article>
  );
}

export default Card;
