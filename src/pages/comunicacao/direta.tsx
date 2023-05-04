import Avo from "@/components/comunicacao/direta/Avo";

export default function PaginaDireta(){
  return (
    <div className="flex flex-col justify-center gap-5 items-center h-screen">
      <h1 className="text-5xl font-black mb-10">Comunicação Direta</h1>
      <Avo nome="Paulo" sobrenome="Silva"/>
      <Avo nome="Júlio" sobrenome="Miranda"/>
    </div>
  )
}
