import SunLogo from "../assets/icons/icon-sun.svg?react";
import IconLogo from "../assets/icons/icon-moon.svg?react";

function Selector() {
  return (
    <div
      aria-label="UI theme switcher"
      className="flex items-center justify-center gap-2 ring-transparent"
    >
      <SunLogo className="shrink-0" />
      <input
        type="checkbox"
        className="relative cursor-pointer appearance-none outline-none before:block before:h-6 before:w-12 before:rounded-full before:bg-neutral-0 before:ring-offset-0 before:ring-offset-indigo-500 before:transition-shadow after:absolute after:top-[50%] after:left-1 after:block after:size-4 after:translate-y-[-50%] after:rounded-full after:bg-indigo-500 after:transition-all after:duration-300 checked:after:translate-x-6 hover:after:bg-indigo-300 focus-visible:before:ring-2 focus-visible:before:ring-neutral-0 focus-visible:before:ring-offset-2"
      />
      <IconLogo className="shrink-0" />
    </div>
  );
}

export default Selector;
