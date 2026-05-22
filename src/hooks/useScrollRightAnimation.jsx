import { useEffect, useRef, useState } from "react";

const useScrollRightAnimation = (threshold = 0.15) => {
  const rightRef = useRef(null);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    const currentRef = rightRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowRight(entry.isIntersecting);
      },
      {
        threshold,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { rightRef, showRight };
};

export default useScrollRightAnimation;