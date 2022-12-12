import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [amount, setAmoount] = useState<number>(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input type="number" value={amount} onChange={(e)=> setAmoount(e.target.valueAsNumber) } />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
};

export default Counter;
