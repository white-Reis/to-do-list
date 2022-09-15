import { useEffect, useState } from 'react'
import { tempoParaSegundos } from '../../common/date'
import style from '../../pages/style.module.scss'
import { Itask } from '../../types/tarefa'
import Botao from '../button'
import Relogio from '../relogio'

interface Props {
  selecionado: Itask | undefined
  finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
  const [time, setTime] = useState<number>()
  useEffect(() => {
    if (selecionado?.time) {
      setTime(tempoParaSegundos(selecionado.time))
    }
  }, [selecionado])

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTime(contador - 1)
        return regressiva(contador - 1)
      }
      finalizarTarefa()
    }, 1000)
  }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio time={time} />
      </div>
      <Botao
        onClick={() => {
          regressiva(time)
        }}
      >
        começar
      </Botao>
    </div>
  )
}
