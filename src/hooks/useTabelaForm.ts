import { useState } from "react"

const useTabelaForm = () =>{
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');

  const exibirFormulario = () => setVisivel('form');
  const exibirTabela = () => setVisivel('tabela');

  return{
    formularioVisivel: visivel === 'form',
    tabelaVisivel: visivel === 'tabela',
    exibirFormulario,
    exibirTabela
  }
}

export default useTabelaForm