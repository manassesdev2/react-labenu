export const Item = ({label, value, onIncrement, onDecrement, onReset}) =>{
  return(
      <>
          <label>{label}</label>
          <p>{value}</p>
          <button onClick={()=> onIncrement()}> + </button>
          
          <button onClick={()=> onReset()}>RESTAURAR</button>

          <button onClick={()=> onDecrement()}> - </button>




      </>
  )

}