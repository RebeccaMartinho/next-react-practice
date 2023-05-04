interface CirculoProps {
  texto: string;
  quasePerfeito?: boolean;
}

export default function Circulo(props: CirculoProps) {
  return (
    <div
      className={`
    flex justify-center items-center w-64 h-64 bg-cyan-500 text-black text-3xl ${
      props.quasePerfeito ? 'rounded-4xl' : 'rounded-full'
    }`}
    >
      {props.texto}
    </div>
  );
}
