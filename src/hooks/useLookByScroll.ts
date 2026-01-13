import { useEffect } from "react";

export function useLockBodyScroll(lock: boolean) {
  useEffect(() => {
    document.body.style.overflow = lock ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lock]);
}
