import { useState } from "react";
const gifts=[
  "Cpu i9",
  "RTX 4060",
  "IP 16"
]
function App() {
  // const [couter,setCounter]=useState(1)
  // const handleIncrease =()=>
  // {
  //   setCounter(couter+1);
  // }
  const [gift,setGift] = useState(); 
  const [name,Setname]=useState();
  console.log(name);
  // const RamdomGift=()=>{
  //   var index=Math.floor(Math.random()*gifts.length)
  //   setGift(gifts[index]);
  // }

  return (
    <div className="App">
     {/* <h1>{couter}</h1>
     <button onClick={handleIncrease}>Increase</button> */}


     {/* <h1>{gift||'Chua lay thuong'}</h1>
     <button onClick={RamdomGift}>lay thuong</button> */}

     <input onChange={e=>Setname(e.target.value)}/>
     <button onClick={()=>Setname("Nguyen Van BBB")}>change</button>
    </div>
  );
}

export default App;
