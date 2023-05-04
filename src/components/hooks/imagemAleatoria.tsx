import Image from "next/image";
import { useState } from "react";

export default function ImagemAleatoria() {
  const url = 'https://source.unsplash.com/featured/';
  const [pesquisa, alterarPesquisa] = useState<string>('abstract')
  const [tamanho, alterarTamanho] = useState<number>(300)

  function renderizarBotao(valor: string) {
    return (
      <button
        className={`bg-blue-500 px-4 py-2 rounded-md`}
        onClick={() => {
         alterarPesquisa(valor)
        }}
      >
        {valor}
      </button>
    );
  }
  return (
    <div className="flex flex-col gap-3 border border-zinc-50 p-7 rounded-md">
      <div className="flex justify-center gap-7 mb-5">
        <span>{pesquisa}</span>
        <span>{tamanho}x{tamanho}</span>
      </div>
      <Image className="rounded-md" src= {`${url}${tamanho}x${tamanho}?${pesquisa}`} height={300} width={300} alt="Imagem"/>
      <div className="flex gap-5">
      {renderizarBotao('abstract')}
      {renderizarBotao('city')}
      {renderizarBotao('person')}
      </div>
      <div>
        <input 
          type="number" 
          value={tamanho} 
          className="bg-zinc-800 p-2 rounded-md w-full"
          onChange={e => 
            {alterarTamanho(+e.target.value)}}
          />
      </div>
    </div>
  )
}
