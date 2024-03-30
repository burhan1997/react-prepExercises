import { useState, useEffect, useDebugValue } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useDebugValue(
    windowSize,
    (value) => `Window size: ${value.width} x ${value.height}`
  );

  return windowSize;
}

export default useWindowSize;
