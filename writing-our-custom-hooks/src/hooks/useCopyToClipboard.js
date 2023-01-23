import { useEffect, useState } from "react";

const useCopyToClipboard = (duration) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = (value) => {
    if (typeof value === "number" || typeof value === "string") {
      navigator.clipboard.writeText(value);
      setIsCopied(true);
    } else {
      console.error("the entered type is not supported");
      setIsCopied(false);
    }
  };

  useEffect(() => {
    let timer;
    if (isCopied && duration) {
      timer = setTimeout(() => setIsCopied(false), duration);
    }
    return () => clearTimeout(timer);
  }, [isCopied, duration]);

  return { isCopied, copy };
};

export default useCopyToClipboard;
