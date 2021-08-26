
function acao1() {
  console.log("ação1")
}

function acao5(e) {
  console.log(e)
}

export default function borat() {
  function acao2() {
    console.log("ação2")
  }
  return (

    <div>
      <input type="text" onChange={(e) => console.log(e.target.value) }/>
      <button onClick={acao1}>Click 01</button>
      <button onClick={acao2}>Click 02</button>
      <button onClick={function () {
        console.log("ação3")
      }}>Click 03</button>
      <button onClick={() => console.log("ação 4")}>
        Click 04
      </button>
      <button onClick={acao5}>
        Click 05
      </button>
      <button onClick={e => acao5(e.altKey)}>
        Click 05 v2
      </button>
   </div>

    
  )
}