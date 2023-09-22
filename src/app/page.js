
export default function Home() {
  const lista = [
    {nome:"Rodrigo",idade:1,aluno:true},
    {nome:"Gerson",idade:19,aluno:true},
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next JS</h1>
      <ul>
        {
          lista.map(
            (item) => (
            <li key={item.nome}>
              {item.nome} - {item.idade} - {item.aluno}
            </li>
            )  
          )
        }
      </ul>
    </main>
  )
}
