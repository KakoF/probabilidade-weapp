"use client";

import { ISorteio } from "@/utils/interface/models/sorteio";

export default function CardSorteio({ sorteio }: { sorteio: ISorteio }) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="px-6 py-4">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Resultado {sorteio.nome}</h5>
                <p className="text-gray-700 text-base">
                    {sorteio.dezenasOrdemSorteio.join(",")}
                </p>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{sorteio.data.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
}
