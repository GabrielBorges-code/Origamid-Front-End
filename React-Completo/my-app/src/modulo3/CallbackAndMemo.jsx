// import React from "react";

import { useCallback, useMemo } from "react";
import { useState } from "react";

function slowOperation() {
  let c;

  for (let i = 0; i < 10000000; i++) {
    c = i + 1 / 10;
  }

  return c;
}



const CallbackAndMemo = () => {
  const [count, setCount] = useState(0);
  const t1 = performance.now();
  const value = useMemo(() => slowOperation(), []);

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  console.log("value", value);
  console.log("performace", performance.now() - t1);

  return (
    <div>
      <button onClick={handleClick}>contar</button>
      <p>{count}</p>
    </div>
  );
};

export default CallbackAndMemo;
