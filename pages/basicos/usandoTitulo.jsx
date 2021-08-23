import Titulo from '../../components/Titulo'

export default function udandoTitulo(){
  return(
    <div>
      <Titulo 
        principal="Página de Cadastro"
        secundario="Incluir, Alterar e Excluir coisas!"
      />
      <Titulo 
        principal="Página de Login"
        secundario="Insira seu e-mail e senha"
        pequeno
      />

      
    </div>
  )
}