export default function SoemntePar(props){

  const numeroPar = props.numero % 2 === 0

  return (
    <div>
      {numeroPar ? 
        <spav>{props.numero}</spav> :
        null}
    </div>
  )

  //return numeroPar ? <span>{props.numero}</span> : null

  // if (props.numero % 2 === 0) {
  //   return <span>{props.numero}</span>
  // } else {
  //   return null
  // }
}