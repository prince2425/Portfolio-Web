import { useEffect, useRef, useState } from "react";

const useScrollAnimation = (threshold = 0.15) => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
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

  return { sectionRef, show };
};

export default useScrollAnimation;