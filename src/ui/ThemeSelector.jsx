import SunLogo from "../assets/icons/icon-sun.svg?react";
import IconLogo from "../assets/icons/icon-moon.svg?react";

function Selector() {
  return (
    <div
      aria-label="UI theme switcher"
      className="flex items-center justify-center gap-2"
    >
      <SunLogo className="shrink-0" />
      <input
        type="checkbox"
        className="relative cursor-pointer appearance-none before:block before:h-6 before:w-12 before:rounded-full before:bg-neutral-0 after:absolute after:top-[50%] after:left-1 after:block after:size-4 after:translate-y-[-50%] after:rounded-full after:bg-indigo-500 after:transition-all after:duration-300 checked:after:translate-x-6 hover:after:bg-indigo-300"
      />
      <IconLogo className="shrink-0" />
    </div>
  );
}

export default Selector;
