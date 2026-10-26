import { useEffect, useRef } from "react";

export function useClickOutside(capture = true, ref, handler) {
  useEffect(
    function () {
      function handleClose(e) {
        if (!ref.current || ref.current.contains(e.target)) return;

        handler();
      }

      document.body.addEventListener("click", handleClose, capture);

      return () =>
        document.body.removeEventListener("click", handleClose, capture);
    },
    [handler, ref, capture],
  );
}
