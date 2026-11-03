import { createContext, use, useRef, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

const MenuContext = createContext();

function Menu({ children }) {
  const [open, setOpen] = useState(false);

  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }

  function toggleMenu() {
    setOpen((open) => !open);
  }

  return (
    <MenuContext value={{ open, openMenu, closeMenu, toggleMenu }}>
      <div className="relative">{children}</div>
    </MenuContext>
  );
}

Menu.Trigger = function Trigger({ render }) {
  const { toggleMenu, open } = useMenuContext();

  function handleToggle() {
    toggleMenu();
  }

  return render(handleToggle);
};

Menu.Item = function MenuItem({ children }) {
  const { closeMenu } = useMenuContext();

  return (
    <li
      onClick={closeMenu}
      className="cursor-pointer px-4 py-3 transition-colors duration-300 hover:bg-slate-200/50"
    >
      {children}
    </li>
  );
};

Menu.List = function MenuList({ children }) {
  const { open, closeMenu } = useMenuContext();
  const ref = useRef();

  useClickOutside(true, ref, closeMenu);

  if (!open) return null;

  return (
    <ul
      className="absolute top-13 right-0 w-30 rounded-sm bg-slate-100 text-slate-900"
      ref={ref}
    >
      {children}
    </ul>
  );
};

function useMenuContext() {
  const context = use(MenuContext);

  if (!context)
    throw new Error(
      "Menu contex cannot be used outside of the Menu component!",
    );

  return context;
}

export default Menu;
