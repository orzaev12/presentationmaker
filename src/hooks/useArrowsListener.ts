import { useEffect } from "react";
import { useAppActions, useAppSelector } from "../store/types.ts";

function useArrowsListeners() {
  const slides = useAppSelector((state) => state.presentation.slides);
  const indexOfCurrentSlide = useAppSelector(
    (state) => state.presentation.indexOfCurrentSlide,
  );
  const { createSetCurrentSlide } = useAppActions();

  useEffect(() => {
    const handleKeydownEvent = (event: KeyboardEvent) => {
      if (event.key) {
        if (
          indexOfCurrentSlide !== slides.length - 1 &&
          (event.key === "ArrowDown" || event.key === "ArrowRight")
        ) {
          createSetCurrentSlide(indexOfCurrentSlide + 1);
        }
        if (
          indexOfCurrentSlide > 0 &&
          (event.key === "ArrowLeft" || event.key === "ArrowUp")
        ) {
          createSetCurrentSlide(indexOfCurrentSlide - 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeydownEvent);

    return () => window.removeEventListener("keydown", handleKeydownEvent);
  }, [indexOfCurrentSlide]);
}

export { useArrowsListeners };
