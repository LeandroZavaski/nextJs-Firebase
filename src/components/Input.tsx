interface EntradaProps {
  texto: string
  tipo?: 'text' | 'number'
  valor: any
  somenteLeitura?: boolean
  className?: string
  valorAlterado?: (valor: any) => void
}

const Entrada = (props: EntradaProps) => {
  return (
    <div className={`flex flex-col ${props.className}`} >
      <label className="mb-4">
        {props.texto}
      </label>
      <input
        type={props.tipo ?? 'text'}
        value={props.valor}
        readOnly={props.somenteLeitura}
        placeholder="nome"
        onChange={e => props.valorAlterado?.(e.target.value)}
        className={`border-gray-900 rounded-lg
        focus:outline-none bg-gray-200
        px-4 py-2
        ${props.somenteLeitura ?? 'bg-white'}
        `}
      />
    </div>
  )
}

export default Entrada;