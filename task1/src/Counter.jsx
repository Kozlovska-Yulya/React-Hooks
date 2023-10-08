import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>
        -
      </button>
      <span className="counter__value" onClick={() => setCounter(0)}>
        {counter}
      </span>
      <button
        className="counter__button"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
