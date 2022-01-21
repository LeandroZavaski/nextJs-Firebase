import { useEffect, useState } from "react"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../pages/firebase/db/ColecaoCliente"
import useTabelaForm from "./useTabelaForm"

const useClientes = () => {

  const repo: ClienteRepositorio = new ColecaoCliente();

  const {
    tabelaVisivel, 
    exibirFormulario, 
    exibirTabela
  } = useTabelaForm();

  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio);

  const obterTodos = () => {
    repo.obterTodos().then(clientes => {
      setClientes(clientes);
      exibirTabela();
    })
  }

  const selecionarCliente = (cliente: Cliente) => {
    console.log(`Editar: ${cliente.nome}`);
    setCliente(cliente);
    exibirFormulario();
  }

  const excluirCliente = async (cliente: Cliente) => {
    await repo.excluir(cliente);
    obterTodos();
  }

  const novoCliente = () => {
    setCliente(Cliente.vazio);
    exibirFormulario();
  }

  const salvarCliente = async (cliente: Cliente) => {
    await repo.salvar(cliente);
    obterTodos();
  }

  useEffect(obterTodos, []);

  return {
    tabelaVisivel,
    exibirTabela,
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos
  }
}

export default useClientes;