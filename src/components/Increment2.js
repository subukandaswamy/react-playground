import React, { useEffect, useState } from "react";

function Increment2({ step }) {
  const [val, setVal] = useState(20);

  useEffect(() => {
    console.log("mounted and/or updated");
  }, [val]);

  //const name = 'subu'

  const handleClick = () => {
    console.log(val);
    setVal((prevVal) => prevVal + step);
  };

  return (
    <div>
      <p>{val}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Increment2;
