import React, { useState } from 'react'
import Form from '../components/form'
import { List } from '../components/list'
import Cronometro from '../components/cronometro'
import style from '../pages/style.module.scss'
import { Itask } from '../types/tarefa'

function App() {
  const [tasks, setTasks] = useState<Itask[]>([])
  const [selecionado, setSelecionado] = useState<Itask>()

  function selecionaTarefa(tarefaSelecionada: Itask) {
    setSelecionado(tarefaSelecionada)
    setTasks(tarefasAnteriores =>
      tarefasAnteriores.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      }))
    )
  }
  function finalizaTarefa() {
    if (selecionado) {
      setSelecionado(undefined)
      setTasks(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true
            }
          }
          return tarefa
        })
      )
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selecionaTarefa={selecionaTarefa}
        task={''}
        time={''}
        selecionado={false}
        completado={false}
        id={''}
      />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizaTarefa} />
    </div>
  )
}

export default App
