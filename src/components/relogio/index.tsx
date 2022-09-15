import { match } from 'assert'
import style from '../../pages/style.module.scss'

interface Props {
  time: number | undefined
}

export default function Relogio({ time = 0 }: Props) {
  const min = Math.floor(time / 60)
  const seconds = time % 60
  const [minDezena, minUnidade] = String(min).padStart(2, '0')
  const [secondDezena, secondUnidade] = String(seconds).padStart(2, '0')
  return (
    <>
      <span className={style.relogioNumero}>{minDezena}</span>
      <span className={style.relogioNumero}>{minUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondDezena}</span>
      <span className={style.relogioNumero}>{secondUnidade}</span>
    </>
  )
}
