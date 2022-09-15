export function tempoParaSegundos(time:string){
const [horas='0',min='0',seconds='0']=time.split(':')

const horasEmSegundos = Number(horas)*3600
const minutosEmSegundos = Number(min)*60
return horasEmSegundos+minutosEmSegundos+Number(seconds)
}