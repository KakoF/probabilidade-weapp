export interface ISorteio {
    nome: string;
    rangeNumeros: { item1: number, item2: number };
    concurso: string;
    data: Date;
    local: string;
    dezenasOrdemSorteio: string[];
    dezenas: string[];
    trevos: string[];
}
