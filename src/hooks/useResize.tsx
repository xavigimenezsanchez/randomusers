import { useEffect } from "react";

export const useResize = (resizeFunction: Function) => {
  useEffect(() => {
    const resizeListener = () => {
      // Run resize function
      resizeFunction();
    };
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, [resizeFunction]);
};

export default useResize;
