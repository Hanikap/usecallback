import React, { useCallback, useEffect, useState } from "react";
import ChildA from "./ChildA";

function Usecallback() {
  const [todo, setTodo] = useState(0);
  const [add, setAdd] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleAddTodo = useCallback(() => {
    console.log("adding no.");
  }, [todo]);

  const resetError = () => {
    setHasError(false);
  };

  useEffect(() => {
    const handleError = (error) => {
      console.error("Error caught by error boundary:", error);
      setHasError(true);
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, [todo]);

  return (
    <div className="App">
      <h1>learn usecallback</h1>

      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>addition</button>

      {hasError ? (
        <div>
          <p>Something went wrong. Please try again later.</p>
          <button onClick={resetError}>Reset</button>
        </div>
      ) : (
        <ChildA todo={todo} handelTodo={handleAddTodo} />
      )}
    </div>
  );
}

export default Usecallback;
