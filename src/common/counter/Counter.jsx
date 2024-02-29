import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const add = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <button>Add To Favorites</button>
    </div>
  );
};
