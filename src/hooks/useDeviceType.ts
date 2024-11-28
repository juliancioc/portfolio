import { useEffect, useState } from "react";

export const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    setLoading(false);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, loading };
};
