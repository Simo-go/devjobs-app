import { useEffect } from "react";

export function usePressClose(keys, ref, handler) {
  useEffect(
    function () {
      function closeOnKeyPress(e) {
        if (ref.current && keys.includes(e.key)) {
          handler();
        }
      }

      document.body.addEventListener("keyup", closeOnKeyPress);

      return () => document.body.removeEventListener("keyup", closeOnKeyPress);
    },
    [handler, keys, ref],
  );
}
