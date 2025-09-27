import { useEffect } from "react";

export function useScrollAnimation(className, activeClass) {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(activeClass);
  
          }
        });
      },
      { threshold: 0.2 } // ativa quando 20% do elemento aparece
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [className, activeClass]);
}