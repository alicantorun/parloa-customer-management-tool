import { useState, useEffect, useCallback } from "react";

export default function useWindowSize() {
  const isClient = typeof window === "object";

  const getSize = useCallback(() => {
    return {
      width: isClient && window.innerWidth,
      height: isClient && window.innerHeight,
    };
  }, [isClient]);

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect((): void | (() => void | undefined) => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getSize, isClient]);

  return windowSize;
}
