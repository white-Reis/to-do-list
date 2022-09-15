import { Itask } from "./tarefa";

export interface Props extends Itask {
  tasks: Itask[],
  selecionaTarefa:(tarefaSelecionada:Itask)=>void
}