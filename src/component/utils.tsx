import { useEffect } from "react";

/**
 * Hook that do callback clicks outside of the passed ref
 */
export const useOutsideAlerter = (ref: any, refBlock: any, callback: any) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        refBlock.current &&
        !refBlock.current.contains(event.target)
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export const scrollToDiv = (divId: string, callback?: any) => {
  const divElement = document.getElementById(divId);
  if (divElement) {
    const offset = divElement.offsetTop - 120; //100px is Navbar size
    window.scrollTo({ top: offset, behavior: "smooth" });
  }
  if (callback) {
    callback();
  }
};
