import React, { useMemo, useState } from "react";
import Usecallback from "./Usecallback";
import ErrorBoundaryExample from "./ErrorBoundaryExample";

function App() {
//   const [add, setAdd] = useState(0);
//   const [count, setCount] = useState(10);

//   const multiCount = useMemo(function multiCount() {
//     console.log("usememo");
//     return count * 5;
//   },[count]);
  return (
    <div className="App">
        <Usecallback/>
      {/* <h1>use memo hook</h1>
      
      <h1>{add}</h1>
      <h1>{count}</h1>
      <h1>{multiCount}</h1>
      <button onClick={() => setAdd(add + 1)}>addition</button>

      <button onClick={() => setCount(count * 10)}>count</button> */}
    </div>
  );
}

export default App;
