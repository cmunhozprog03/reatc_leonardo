export default function Lista(props){
  return(
    <div>
      <h1>Lista de Filhos</h1>
      <ul style=
        {{ 
          listStyle: "none",
          padding : 25 
          }}>
        {props.children}
      </ul>
    </div>
    
  )
}