import { useState } from 'react'
import Cliente from '../core/Cliente';
import Botao from './Button';
import Entrada from "./Input";

interface FormularioProps {
  cliente: Cliente
  clienteAlterado?: (cliente: Cliente) => void
  cancelado?: () => void
}

const Formulario = (props: FormularioProps) => {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? '');
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);
  return (
    <div>
      {id ?
        (<Entrada texto="Codigo" valor={id} somenteLeitura />)
        : false
      }
      <Entrada
        texto="Nome"
        valor={nome}
        valorAlterado={setNome}
        className='mb-5'
      />
      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        valorAlterado={setIdade}
        className='mb-5'
      />
      <div className='flex justify-end mt-3'>
        <Botao cor='blue' className='mr-2' 
          onClick={() => props.clienteAlterado?.(new Cliente(nome, +idade, id))}>
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        
        <Botao 
          onClick={props.cancelado}>
          Cancelar
        </Botao>
      </div>
    </div>
  )
}

export default Formulario;