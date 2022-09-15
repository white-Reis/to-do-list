import React, { useState } from 'react'
import Botao from '../button'
import style from '../../pages/style.module.scss'
import { Itask } from '../../types/tarefa'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<Itask[]>>
}

function Form({ setTasks }: Props) {
  const [task, setTask] = useState('')
  const [time, setTime] = useState('00:00')
  function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTasks(tarefasAntigas => [
      ...tarefasAntigas,
      {
        task,
        time,
        selecionado: false,
        completado: false,
        id: uuidv4()
      }
    ])
    setTask('')
    setTime('00:00')
  }
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="name">Task</label>
        <input
          required
          type="text"
          id="name"
          placeholder="write a task"
          value={task}
          onChange={event => {
            setTask(event.target.value)
          }}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="timer">Time</label>
        <input
          type="time"
          id="timer"
          step="1"
          value={time}
          onChange={event => {
            setTime(event.target.value)
          }}
          min="00:00:00"
          max="01:30:00"
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  )
}
export default Form