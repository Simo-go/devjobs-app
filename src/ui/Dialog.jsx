/* eslint-disable @eslint-react/rules-of-hooks */
/* eslint-disable @eslint-react/no-use-context */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Button from "./Button";
import clsx from "clsx";
import { createPortal } from "react-dom";
import { useClickOutside } from "../hooks/useClickOutside";

const DialogContext = createContext();

function Dialog({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleDialog() {
    console.log("test");

    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <DialogContext value={{ isOpen, handleToggleDialog }}>
      {children}
    </DialogContext>
  );
}

Dialog.Button = function ({ size, children, className }) {
  const { handleToggleDialog, isOpen } = useContext(DialogContext);

  return (
    <Button
      size={size}
      type="button"
      className={clsx(className)}
      onClick={(e) => {
        handleToggleDialog();
      }}
    >
      {children}
    </Button>
  );
};

Dialog.Window = function ({ children }) {
  const { isOpen, handleToggleDialog } = useContext(DialogContext);
  const ref = useClickOutside(true, handleToggleDialog);

  useEffect(
    function () {
      if (!isOpen) return;

      document.body.style.overflow = "hidden";

      return () => (document.body.style.overflow = "auto");
    },
    [isOpen],
  );

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed top-0 left-0 grid h-svh w-full place-items-center overflow-hidden bg-neutral-950/50 px-6">
      <div className="window w-full rounded-md bg-neutral-0 p-6" ref={ref}>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Dialog;
