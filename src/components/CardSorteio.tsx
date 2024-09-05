"use client";

import { ISorteio } from "@/utils/interface/models/sorteio";

export default function CardSorteio({ sorteio }: { sorteio: ISorteio }) {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Resultado {sorteio.nome} do dia {sorteio.data.toLocaleString()}</h5>
            {sorteio.dezenasOrdemSorteio.join(",")}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
    );
}
