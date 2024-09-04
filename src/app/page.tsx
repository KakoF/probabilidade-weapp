
import UltimoResultado from "@/components/UltimoResultado";


export default async function Home() {
  const response = await fetch("http://localhost:5133/jogo")
  const data: any = await response.json()
  return (
    <main className="flex flex-col">
      <h1 className="text-4xl font-semibold dark:text-black">Probabilidade</h1>
      <select id="jogos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option defaultValue={0} disabled selected>Selecione o Jogo</option>
        {data.map((item: any) => <option key={item.id} value={item.id}>{item.nome}</option>)}
      </select>
      <UltimoResultado title="React" />
    </main>
  );
}
