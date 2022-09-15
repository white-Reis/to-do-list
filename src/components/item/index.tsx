import style from '../../pages/style.module.scss'
import { Props } from '../../types/props'

export default function Item({
  task,
  time,
  selecionado,
  completado,
  id,
  selecionaTarefa
}: Props) {
  return (
    <li
      className={`${style.item} ${selecionado && style.itemSelecionado} ${
        completado && style.itemCompletado
      }`}
      onClick={() =>
        !completado &&
        selecionaTarefa({
          task,
          time,
          selecionado,
          completado,
          id
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  )
}
