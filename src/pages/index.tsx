import Botao from "../components/Button"
import Formulario from "../components/Form"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import useClientes from "../hooks/useClientes"

export default function Home() {

  const {
    cliente,
    clientes,
    tabelaVisivel,
    exibirTabela,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente
  } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        { tabelaVisivel ?
          (<>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="gray" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>

            <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente} />
          </>) : (
            <Formulario cliente={cliente} cancelado={exibirTabela} clienteAlterado={salvarCliente} />
          )}
      </Layout>
    </div>
  )
}
