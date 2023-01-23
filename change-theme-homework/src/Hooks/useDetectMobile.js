import { useEffect, useState } from "react";

const screen = 600;

const detectDevice = () => {
  return document.documentElement.getBoundingClientRect().width < screen
    ? true
    : false;
};

const useDetectMobile = () => {
  const [isMobile, setIsMobile] = useState(detectDevice());

  useEffect(() => {
    const handleDeviceChange = () => {
      setIsMobile(detectDevice());
    };

    window.addEventListener("resize", handleDeviceChange);
    return () => window.removeEventListener("resize", handleDeviceChange);
  }, []);

  return isMobile;
};

export default useDetectMobile;
