import { useState } from "react";
function App() {
  const [couter,setCounter]=useState(1)
  const handleIncrease =()=>
  {
    setCounter(couter+1);
  }
  return (
    <div className="App">
     <h1>{couter}</h1>
     <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
