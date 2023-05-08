import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
  const [ativo, setAtivo] = useState<number>(0)

  function alternarVisibilidade(indice: number) {
    if( indice === ativo){
      setAtivo(-1)
    } else {
      setAtivo(indice)
    }
  }
  return (
    <div className=" flex flex-col gap-2 w-[90%] md:w-3/4">
      <Pergunta 
        texto={"Quem descobriu o Brasil?"} 
        resposta={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo, quidem recusandae possimus praesentium cupiditate in laboriosam expedita nobis, ea placeat sint quod culpa maxime quibusdam suscipit? Tempore, adipisci similique?"} 
        alternarVisibilidade={alternarVisibilidade} 
        indice={0} 
        aberta={ativo === 0}
      />
      <Pergunta texto={"O que é Javascript?"} 
        resposta={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo, quidem recusandae possimus praesentium cupiditate in laboriosam expedita nobis, ea placeat sint quod culpa maxime quibusdam suscipit? Tempore, adipisci similique?"} 
        alternarVisibilidade={alternarVisibilidade} 
        indice={1} aberta={ativo === 1}
      />
      <Pergunta texto={"O que é Typescript?"} 
        resposta={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo, quidem recusandae possimus praesentium cupiditate in laboriosam expedita nobis, ea placeat sint quod culpa maxime quibusdam suscipit? Tempore, adipisci similique?"} 
        alternarVisibilidade={alternarVisibilidade} 
        indice={2} 
        aberta={ativo === 2}
      />
      <Pergunta 
        texto={"O que é um framework?"} 
        resposta={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo, quidem recusandae possimus praesentium cupiditate in laboriosam expedita nobis, ea placeat sint quod culpa maxime quibusdam suscipit? Tempore, adipisci similique?"} 
        alternarVisibilidade={alternarVisibilidade} 
        indice={3} 
        aberta={ativo === 3}
      />
    </div>
  )
}
