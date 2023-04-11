import React, { useEffect, useState } from "react";

function Increment2() {
  const [val, setVal] = useState(0);

  useEffect(() => {
    console.log("component mounted and/or updated...");
  });

  const handleClick = () => {
    setVal((prevVal) => prevVal + 1);
  };

  return (
    <div>
      <p>{val}</p>
      <button type="button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default Increment2;
