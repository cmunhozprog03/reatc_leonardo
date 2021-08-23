import Estilo from "../../components/Estilo";

export default function usandoEstilo() {
  return (
    <div>
      <Estilo numero={10} color="#000" />
      <Estilo numero={-1} color="indigo" direita/>
    </div>
  )
}