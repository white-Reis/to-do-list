import style from '../../pages/style.module.scss'
import Item from '../item'
import { Props } from '../../types/props'

export function List({ tasks, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>studies of the day</h2>
      <ul>
        {tasks.map(item => (
          <Item
            tasks={tasks}
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}
