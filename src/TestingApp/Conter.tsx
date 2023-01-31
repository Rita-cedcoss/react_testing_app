import React, { useState } from "react";

const Conter = () => {
  const [count, setCount] = useState(1);
  //function for increment
  const increment = () => {
    setCount(count + 1);
  };
  // function for decrement
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="col-6 m-auto text-center mt-5">
      <h4>Counter App Testing</h4>
      <div
        className="btn-group border mt-2 m-auto "
        role="group"
        aria-label="Basic example"
      >
        <button type="button" className="btn btn-dark" onClick={increment}>
          +
        </button>
        <span className="fs-4 ps-3 pe-3" data-testId="count">
          {count}
        </span>
        <button type="button" className="btn btn-dark" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default Conter;
