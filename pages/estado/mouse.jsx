import { useState } from "react"

export default function mouse() {

  const [x, setX] = useState(0)
  

  const arrayY = useState(0)
  let y = arrayY[0]
  const alterarY = arrayY[1]

  const estilo = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f50c0c",
    color: "#fff",
    height: "100vh"
  }

  function quandoMover(ev) {
    setX(ev.clientX)
    alterarY(ev.clientY)
  }
  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <span>Eixo X: {x} </span>
      <span>Eixo Y: {y} </span>
    </div>
  )
}