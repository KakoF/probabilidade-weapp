'use client'

import UltimoResultado from "@/components/UltimoResultado";
import { ILoteria } from "@/utils/interface/models/loteria";
import { ISorteio } from "@/utils/interface/models/sorteio";
import { GetJogos, GetUltimaLoteria } from "@/utils/requests/probabilidade.http";
import { useState, useEffect } from "react";


export default function Home() {

  let [loteria, setLoterias] = useState(new Array<ILoteria>)
  let [sorteio, setSorteio] = useState<ISorteio>()

  useEffect(() => {
    GetJogos().then((res) => {
      setLoterias(res)
    });;
  }, []);


  async function handleLoteria(event: React.ChangeEvent<any>): Promise<void> {
    const ultimaLoteria: ISorteio = await GetUltimaLoteria(event.currentTarget.value);
    setSorteio(ultimaLoteria)
  }

  return (
    <main className="flex flex-col">
      <h1 className="text-4xl font-semibold dark:text-black">Probabilidade</h1>
      <select name="loteria" id="loteria" onChange={handleLoteria} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option defaultValue={0} disabled>Selecione o Jogo</option>
        {loteria.map((item: any) => <option key={item.id} value={item.id}>{item.nome}</option>)}
      </select>
      <UltimoResultado title={sorteio?.nome ?? ""} numbers={sorteio?.dezenasOrdemSorteio ?? new Array<string>} />
    </main>
  );
}
