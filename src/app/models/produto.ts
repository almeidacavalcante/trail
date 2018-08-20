export class Produto {

    private _nome: string;
    private _descricao: string;
    private _preco: number;
    private _estoque: number;
    private _dataValidade: Date;
    private _isPerecivel: boolean;
    private _dataCadastro: Date;

    constructor(
        nome: string,
        descricao: string,
        preco: number,
        estoque: number,
        dataValidade: Date,
        isPerecivel: boolean
    ) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.estoque = estoque;
        this.dataValidade = dataValidade;
        this.isPerecivel = isPerecivel;
        this.dataCadastro = new Date();
    }

    public get isPerecivel(): boolean {
        return this._isPerecivel;
    }
    public set isPerecivel(v: boolean) {
        this._isPerecivel = v;
    }
    public get dataValidade(): Date {
        return this._dataValidade;
    }

    public get dataValidadeCurta(): string {
        return this._dataValidade.toLocaleDateString();
    }

    public set dataValidade(v: Date) {
        this._dataValidade = v;
    }
    public get estoque(): number {
        return this._estoque;
    }
    public set estoque(v: number) {
        this._estoque = v;
    }
    public get preco(): number {
        return this._preco;
    }
    public set preco(v: number) {
        this._preco = v;
    }
    public get descricao(): string {
        return this._descricao;
    }
    public set descricao(v: string) {
        this._descricao = v;
    }
    public get nome(): string {
        return this._nome;
    }
    public set nome(v: string) {
        this._nome = v;
    }
    public get dataCadastro(): Date {
        return this._dataCadastro;
    }
    public set dataCadastro(v: Date) {
        this._dataCadastro = v;
    }
}
