"use client";

import { ISorteio } from "@/utils/interface/models/sorteio";
import BarChartTimeLine from "../BarChartTimeLine";
import { ILinhaTempo } from "@/utils/interface/models/linhaTempo";
import { GetLinhaDoTempo } from "@/utils/requests/probabilidade.http";
import { useEffect, useState } from "react";


export default function GraficoLinhaDoTempo({ loteria, sorteios }: { loteria: string, sorteios: Array<ISorteio> | undefined }) {
    let [linhatempo, setLinhatempo] = useState<ILinhaTempo | undefined>()

    useEffect(() => {
        if (sorteios !== undefined && sorteios.length) {
            var dezenas = Dezenas(sorteios);
            setBarchart(loteria, dezenas)
        }
    }, [loteria, sorteios]);


    function Dezenas(sorteios: Array<ISorteio>) {
        return sorteios.map(function (sorteio) {
            return sorteio.dezenas;
        }).reduce(function (pre, cur) {
            return pre.concat(cur);
        });
    }

    async function setBarchart(loteria: string, dezenas: string[]) {
        var numeros: number[] = dezenas.map(i => Number(i))
        var response: ILinhaTempo = await GetLinhaDoTempo(loteria, numeros);
        setLinhatempo(response);
    }

    return (
        <div>
            {(!linhatempo) ? <h1>No Bar</h1> : <BarChartTimeLine linhaTempo={linhatempo} />}
        </div>

    );

}



