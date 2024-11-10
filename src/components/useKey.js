import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        // console.log(e);
        if (e.key.toLowerCase() === key.toLowerCase()) {
          action();
          // console.log("closing");
        }
      }
      document.addEventListener("keydown", callback);
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
