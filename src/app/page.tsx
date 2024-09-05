'use client'

import BarChartTimeLine from "@/components/BarChartTimeLine";
import CardSorteio from "@/components/CardSorteio";
import { ILoteria } from "@/utils/interface/models/loteria";
import { ISorteio } from "@/utils/interface/models/sorteio";
import { GetLoterias, GetSorteios } from "@/utils/requests/probabilidade.http";
import { useState, useEffect } from "react";


export default function Home() {

  let [loterias, setLoterias] = useState(new Array<ILoteria>)
  let [sorteios, setSorteios] = useState(new Array<ISorteio>)

  useEffect(() => {
    GetLoterias().then((res) => {
      setLoterias(res)
    });;
  }, []);


  async function handleLoteria(event: React.ChangeEvent<any>): Promise<void> {
    const sorteios: Array<ISorteio> = await GetSorteios(event.currentTarget.value);
    setSorteios(sorteios)
  }



  return (
    <main className="flex flex-col">
      <h1 className="text-4xl font-semibold dark:text-black">Probabilidade</h1>
      <select name="loteria" id="loteria" onChange={handleLoteria} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option defaultValue={0} disabled>Selecione o Jogo</option>
        {loterias.map((item: ILoteria) => <option key={item.id} value={item.id}>{item.nome}</option>)}
      </select>
      {sorteios.map((sorteio: ISorteio, index: any) => <CardSorteio key={index} sorteio={sorteio} />)}
      <BarChartTimeLine />


    </main>
  );
}
//<CardSorteio sorteio={sorteios?.nome ?? ""} numbers={sorteios?.dezenasOrdemSorteio ?? new Array<string>} />