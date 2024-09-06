'use server'

import { ILinhaTempo } from "../interface/models/linhaTempo";
import { ILoteria } from "../interface/models/loteria";
import { ISorteio } from "../interface/models/sorteio";

export async function GetLoterias(): Promise<ILoteria[]> {
    const response = await fetch(`http://localhost:5133/loteria`);
    //const response = await fetch(`${process.env.URL_PROBABILIDADE_API}/jogo`);
    return await response.json() as ILoteria[];
}

export async function GetSorteios(loteria: string): Promise<ISorteio[]> {
    const response = await fetch(`http://localhost:5133/sorteio/${loteria}/ultimos`);
    return await response.json() as ISorteio[];
}


export async function GetLinhaDoTempo(loteria: string, numeros: number[]): Promise<ILinhaTempo> {
    const response = await fetch(`http://localhost:5133/sorteio/linhaDoTempo/${loteria}`, {
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method: "POST",
        body: JSON.stringify(numeros),
    });
    return await response.json() as ILinhaTempo;
}