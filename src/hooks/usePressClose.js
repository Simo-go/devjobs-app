import { useEffect } from "react";

export function usePressClose(keys, ref, handler) {
  useEffect(
    function () {
      function closeOnEscape(e) {
        if (ref.current && keys.includes(e.key)) {
          handler();
        }
      }

      document.body.addEventListener("keyup", closeOnEscape);

      return () => document.body.removeEventListener("keyup", closeOnEscape);
    },
    [handler, keys, ref],
  );
}
