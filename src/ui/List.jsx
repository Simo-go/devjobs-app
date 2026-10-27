import clsx from "clsx";

function List({ className, items, numbered, children }) {
  if (numbered)
    return (
      <ol
        className={clsx(className, "list-decimal [counter-reset:list-number]")}
      >
        {items.map((item) => (
          <li
            className="flex items-start gap-4 [counter-increment:list-number] before:inline-block before:font-bold before:text-indigo-500 before:content-[counter(list-number)]"
            key={item}
          >
            {item}
          </li>
        ))}
      </ol>
    );

  return (
    <ul className="list-outside list-disc space-y-2 pl-4">
      {items.map((item) => children(item))}
    </ul>
  );
}

export default List;
