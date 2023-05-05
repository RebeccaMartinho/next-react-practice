interface DisplayProps {
  valor: number
}

export default function Display(props: DisplayProps) {
  return (
    <div className="flex flex-1 justify-center items-center text-5xl p-5 font-black bg-zinc-800 rounded-md">
      {props.valor}
    </div>
  )
}