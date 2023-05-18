import { useEffect, useState } from "react";
import { Item } from "./components/Item";
import { useCounter } from "./hooks/useCounter";
function App() {
  const quantity = useCounter(0)

  const [teste, setTeste] = useState("")

  const clique = () =>{
    let a = quantity.setA
    a("b")
  }

  useEffect(()=>{
    let a = quantity.setA
    a(teste)
    console.log(quantity.a)

  },[setTeste])
  return (

    <>  
      <h1>Carrinho</h1>

      <input value={teste} onChange={(e) => setTeste(e.target.value)}/>
      <Item
      label={"My Cart"}
      value={quantity.value}
      onIncrement = {quantity.increment}
      onDecrement = {quantity.decrement}
      onReset = {quantity.reset}

      />




    </>
  );
}

export default App;