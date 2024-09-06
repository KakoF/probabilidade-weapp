"use client";

import { ISorteio } from "@/utils/interface/models/sorteio";
import CardComponent from "../CardComponent";

export default function UltimosResultados({ sorteios }: { sorteios: ISorteio[] }) {
    return (
        <div>
            {sorteios.map((sorteio: ISorteio, index: any) => <CardComponent
                key={index}
                title={`Resultado ${sorteio.nome}`}
                content={sorteio.dezenasOrdemSorteio.join(",")}
                badge={sorteio.data.toLocaleString()} />)}
        </div>
    );
}
