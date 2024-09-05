import { ILoteria } from "../interface/models/loteria";
import { ISorteio } from "../interface/models/sorteio";

export async function GetJogos(): Promise<ILoteria[]> {
    const response = await fetch(`http://localhost:5133/loteria`);
    //const response = await fetch(`${process.env.URL_PROBABILIDADE_API}/jogo`);
    return await response.json() as ILoteria[];
}

export async function GetUltimaLoteria(loteria: string): Promise<ISorteio> {
    const response = await fetch(`http://localhost:5133/sorteio/${loteria}/ultima`);
    return await response.json() as ISorteio;
}