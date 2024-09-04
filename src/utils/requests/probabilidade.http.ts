import { IJogo } from "../interface/models/jogo";
import { ILoteria } from "../interface/models/loteria";

export async function GetJogos(): Promise<IJogo[]> {
    const response = await fetch(`http://localhost:5133/jogo`);
    //const response = await fetch(`${process.env.URL_PROBABILIDADE_API}/jogo`);
    return await response.json() as IJogo[];
}

export async function GetUltimaLoteria(loteria: string): Promise<ILoteria> {
    const response = await fetch(`http://localhost:5133/loteria/${loteria}/ultima`);
    return await response.json() as ILoteria;
}