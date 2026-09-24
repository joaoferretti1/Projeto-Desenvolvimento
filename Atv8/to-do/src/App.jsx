import { useState } from 'react'
import './App.css'

function App() {

  const [tarefas, setTarefas] = useState([])
  const [input, setInput] = useState("")

  function adicionarTarefa(event) {
    event.preventDefault()

    if (input.trim() === "") {
      return
    }

    const novaTarefa = {
      id: Date.now(),
      text: input
    }

    setTarefas([...tarefas, novaTarefa])
    setInput("")
  }

  function removerTarefa(id) {
    const novasTarefas = tarefas.filter(function(tarefa) {
      return tarefa.id !== id
    })

    setTarefas(novasTarefas)
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <form className="formulario" onSubmit={adicionarTarefa}>
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={input}
          onChange={function(event) {
            setInput(event.target.value)
          }}
        />

        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map(function(tarefa) {
          return (
            <li key={tarefa.id}>
              {tarefa.text}

              <button onClick={function() {
                removerTarefa(tarefa.id)
              }}>
                Remover
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App