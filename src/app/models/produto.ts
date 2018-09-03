export class Produto {
    id: string;
    nome: string;
    descricao: string;
    preco: number;
    precoPromocional: number;
    isPromocao: boolean;
    estoque: number;
    dataValidade: Date;
    isPerecivel: boolean;
    dataCadastro: Date;
    isPublico: boolean;
    categoria: string;

    constructor(
        nome: string,
        descricao: string,
        preco: number,
        precoPromocional: number,
        isPromocao: boolean,
        estoque: number,
        dataValidade: Date,
        isPerecivel: boolean,
        isPublico: boolean,
        categoria: string
    ) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.precoPromocional = precoPromocional;
        this.isPromocao = isPromocao;
        this.estoque = estoque;
        this.dataValidade = dataValidade;
        this.isPerecivel = isPerecivel;
        this.dataCadastro = new Date();
        this.isPublico = isPublico;
        this.categoria = categoria;
    }
}
