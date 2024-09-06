'use client'

import BarChartTimeLine from "@/components/BarChartTimeLine";
import CardSorteio from "@/components/CardSorteio";
import { ILinhaTempo } from "@/utils/interface/models/linhaTempo";
import { ILoteria } from "@/utils/interface/models/loteria";
import { ISorteio } from "@/utils/interface/models/sorteio";
import { GetLinhaDoTempo, GetLoterias, GetSorteios } from "@/utils/requests/probabilidade.http";
import { useState, useEffect } from "react";


export default function Home() {

  let [loterias, setLoterias] = useState(new Array<ILoteria>)
  let [sorteios, setSorteios] = useState(new Array<ISorteio>)


  useEffect(() => {
    GetLoterias().then((res) => {
      setLoterias(res)
    });
  }, []);


  async function handleLoteria(event: React.ChangeEvent<any>): Promise<void> {
    var loteria = event.currentTarget.value;
    const sorteios: Array<ISorteio> = await GetSorteios(loteria);


    setSorteios(sorteios)

    var dezenas = sorteios.map(function (sorteio) {
      return sorteio.dezenas;
    }).reduce(function (pre, cur) {
      return pre.concat(cur);
    });
    setBarchart(loteria, dezenas)
  }


  async function setBarchart(loteria: string, dezenas: string[]) {
    var numeros: number[] = dezenas.map(i => Number(i))
    var response: ILinhaTempo = await GetLinhaDoTempo(loteria, numeros);
    console.log(response);
  }



  return (
    <main className="flex flex-col">
      <h1 className="text-4xl font-semibold dark:text-black">Probabilidade</h1>
      <select name="loteria" id="loteria" onChange={handleLoteria} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option defaultValue={0} disabled>Selecione o Jogo</option>
        {loterias.map((item: ILoteria) => <option key={item.id} value={item.id}>{item.nome}</option>)}
      </select>
      {sorteios.map((sorteio: ISorteio, index: any) => <CardSorteio key={index} sorteio={sorteio} />)}



    </main>
  );
}

//<CardSorteio sorteio={sorteios?.nome ?? ""} numbers={sorteios?.dezenasOrdemSorteio ?? new Array<string>} />
//<BarChartTimeLine />