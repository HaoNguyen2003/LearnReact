import { useState } from "react";
const gifts=[
  "Cpu i9",
  "RTX 4060",
  "IP 16"
]
const Course=[
  {
    id:1,
    name:'OOP'
  },
  {
    id:2,
    name:'AI'
  },
  {
    id:3,
    name:'DB'
  }
]
function App() {
  // const [couter,setCounter]=useState(1)
  // const handleIncrease =()=>
  // {
  //   setCounter(couter+1);
  // }
  // const [gift,setGift] = useState(); 
  // const [name,Setname]=useState();
  const [checked,SetChecked]=useState(2);
  const [checkb,setCheckb]=useState([]);
  // const RamdomGift=()=>{
  //   var index=Math.floor(Math.random()*gifts.length)
  //   setGift(gifts[index]);
  // }

  function handleCheck(value)
  {
    setCheckb(prev =>{
      if (prev.includes(value)) {
        return prev.filter(item => item !== value); // Remove the item if it's already included
      } else {
        return [...prev, value]; // Add the item if it's not included
      }
  })}
  console.log(checkb)
  return (
    <div className="App">
     {/* <h1>{couter}</h1>
     <button onClick={handleIncrease}>Increase</button> */}


     {/* <h1>{gift||'Chua lay thuong'}</h1>
     <button onClick={RamdomGift}>lay thuong</button> */}

     {/* <input onChange={e=>Setname(e.target.value)}/>
     <button onClick={()=>Setname("Nguyen Van BBB")}>change</button> */}

{Course.map(value => (
  <div key={value.id}>
    <input
      type="radio"
      checked={checked === value.id}
      onChange={() => SetChecked(value.id)} // Use onChange instead of onClick for radio buttons
    />
    {value.name}
  </div>
))}

{Course.map(value => (
  <div key={value.id}>
    <input
      type="checkbox"
      checked={checkb.includes(value.id)}
      onClick={() => handleCheck(value.id)} // Wrap in arrow function
    />
    {value.name}
  </div>
))}

    </div>
  );
}

export default App;
