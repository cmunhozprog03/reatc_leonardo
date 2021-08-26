import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function contador() {

  const [numero, setNumero] = useState(0)

 
  

  function dec() {
    setNumero(numero - 1)
  }
  
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
     }}>
      <h1>Contador</h1>
      <div>
        <ContadorDisplay numero={numero} />
      </div>
      <div>
        <button onClick={dec}>-</button>
        <button onClick={() => setNumero(numero + 1)}>+</button>
      </div>
      
    </div>
  )
}