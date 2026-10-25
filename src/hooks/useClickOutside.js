import { useEffect, useRef } from "react";

export function useClickOutside(capture = true, handler) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClose(e) {
        if (!ref.current || ref.current.contains(e.target)) return;

        handler();
      }

      document.body.addEventListener("click", handleClose, true);

      return () =>
        document.body.removeEventListener("click", handleClose, true);
    },
    [handler],
  );

  return ref;
}
