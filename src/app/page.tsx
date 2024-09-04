'use client'

import UltimoResultado from "@/components/UltimoResultado";
import { IJogo } from "@/utils/interface/models/jogo";
import { ILoteria } from "@/utils/interface/models/loteria";
import { GetJogos, GetUltimaLoteria } from "@/utils/requests/probabilidade.http";
import { useState, useEffect } from "react";


export default function Home() {

  let [jogos, setJogos] = useState(new Array<IJogo>)
  let [loteria, setLoteria] = useState<ILoteria>()

  useEffect(() => {
    GetJogos().then((res) => {
      setJogos(res)
    });;
  }, []);


  async function handleLoteria(event: React.ChangeEvent<any>): Promise<void> {
    const ultimaLoteria: ILoteria = await GetUltimaLoteria(event.currentTarget.value);
    setLoteria(ultimaLoteria)
  }

  return (
    <main className="flex flex-col">
      <h1 className="text-4xl font-semibold dark:text-black">Probabilidade</h1>
      <select name="loteria" id="loteria" onChange={handleLoteria} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option defaultValue={0} disabled>Selecione o Jogo</option>
        {jogos.map((item: any) => <option key={item.id} value={item.id}>{item.nome}</option>)}
      </select>
      <UltimoResultado title={loteria?.nome ?? ""} numbers={loteria?.dezenasOrdemSorteio ?? new Array<string>} />
    </main>
  );
}
