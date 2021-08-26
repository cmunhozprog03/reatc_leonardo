import { useState } from "react"

export default function formulario() {

  const [valor, setValor] = useState("inicial")

  function alterar() {
    setValor(valor + "!")
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",

     }}>
      <h1>Formulário</h1>
      <span>{ valor }</span>
      <input type="text" value={valor}
        onChange={e => setValor(e.target.value) }
      />
      <button onClick={alterar}>Alterar</button>
    </div>
  )
}