export default function Caixa(props: any) {
  return <div className={`
  bg-purple-400 flex justify-center items-center rounded-md p-2 w-64 h-64 text-lg`
  }> {props.children}
  
   </div>;
   
}
