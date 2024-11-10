import { useRef } from "react";
import { useKey } from "./useKey";
export default function SearchBar({ query, setQuery }) {
  const inputEl = useRef(null);
  useKey("Enter", function () {
    if (document.activeElement === inputEl) return;
    inputEl.current.focus();
    setQuery("");
  });
  // useEffect(
  //   function () {
  //     function callback(e) {

  //       if (e.code === "Enter") {

  //       }
  //     }

  //     document.addEventListener("keydown", callback);
  //     return () => document.addEventListener("keydown", callback);
  //   },
  //   [setQuery]
  // );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
