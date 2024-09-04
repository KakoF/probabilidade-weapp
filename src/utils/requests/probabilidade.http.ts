import { IJogo } from "../interface/models/jogo";

export default async function GetJogos(): Promise<IJogo[]> {
    const response = await fetch(`${process.env.URL_PROBABILIDADE_API}/jogo`);
    return await response.json() as IJogo[];
}