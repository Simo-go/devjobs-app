import { useEffect, useRef } from "react";

export function useClickOutside(capture = true, ref, handler) {
  useEffect(
    function () {
      function handleClose(e) {
        if (
          !ref.current ||
          ref.current.contains(e.target) ||
          e.target.closest("button")
        )
          return;
        console.log(e.target);

        console.log("closing on hit enter");

        handler();
      }

      document.body.addEventListener("click", handleClose, capture);

      return () =>
        document.body.removeEventListener("click", handleClose, capture);
    },
    [handler, ref, capture],
  );
}
