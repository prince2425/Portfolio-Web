import { useEffect, useRef, useState } from "react";

const useScrollLeftAnimation = (threshold = 0.15) => {
  const leftRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);

  useEffect(() => {
    const currentRef = leftRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowLeft(entry.isIntersecting);
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

  return { leftRef, showLeft };
};

export default useScrollLeftAnimation;