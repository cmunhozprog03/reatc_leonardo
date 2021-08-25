import Filho from "./filho";

export default function Pai(props) {
  return (
    <div>
      <h1>Familia { props.familia }</h1>
      <Filho nome="Chris" familia={props.familia}/>
      
      <Filho nome="Luiz" familia={props.familia} />
      <Filho {...props} nome="Caio" />
      
      
    </div>
  )
}