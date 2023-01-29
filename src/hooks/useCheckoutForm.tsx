import React, { useState } from "react";

const UseCheckoutForm = (steps: React.ReactElement[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((idx) => {
      if (idx >= steps.length - 1) return idx;
      return idx + 1;
    });
  };

  const back = () => {
    setCurrentIndex((idx) => {
      if (idx <= 0) return idx;
      return idx - 1;
    });
  };

  const goto = (id: number) => {
    setCurrentIndex(id);
  };

  return {
    step: steps[currentIndex],
    currentIndex,
    next,
    back,
    goto,
  };
};

export default UseCheckoutForm;
