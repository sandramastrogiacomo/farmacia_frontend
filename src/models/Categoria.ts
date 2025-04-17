import Produto from "./Produto";

export default interface Categoria {
    nome: string;
    id: number;
    descricao: string;
    produto?: Produto [] | null;
}