import { useEffect, useState } from "react";

const breakPoint = 600;

const detectDevice = () => {
  return document.documentElement.getBoundingClientRect().width < breakPoint
    ? "mobile"
    : "desktop";
};

const useDetectDevice = () => {
  const [device, setDevice] = useState(detectDevice());

  useEffect(() => {
    const handleResize = () => {
      setDevice(detectDevice());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};

export default useDetectDevice;
