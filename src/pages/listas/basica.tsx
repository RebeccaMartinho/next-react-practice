import TabelaSerieA from "@/components/listas/TabelaSerieA"
import { IconBallFootball } from "@tabler/icons-react"

export default function PaginaListaBasica() {
  const times =
    ['Botafogo',
    'Palmeiras',
    'Cruzeiro',
    'Fortaleza',
    'São Paulo',
    'Fluminense',
    'Grêmio',
    'Internacional',
    'Bahia',
    'Athletico-PR']
  return (
    <div className={`
      flex flex-col justify-center items-center h-screen
    `}>
      <h1 className="text-5xl flex items-center gap-2 font-black">
      <IconBallFootball size={50} stroke={1} className="text-green-500" />
      Tabela Série A</h1>
      <TabelaSerieA times={times}/>
    </div>
  )
}