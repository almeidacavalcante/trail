export class Produto {

    private _id: string;
    private _nome: string;
    private _descricao: string;
    private _preco: number;
    private _precoPromocional: number;
    private _isPromocao: boolean;
    private _estoque: number;
    private _dataValidade: Date;
    private _isPerecivel: boolean;
    private _dataCadastro: Date;
    private _isPublico: boolean;
    private _categoria: string;

    constructor(
        id: string,
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
        this.id = id;
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
    public get id(): string {
        return this._id;
    }
    public set id(v: string) {
        this._id = v;
    }
    public get precoPromocional(): number {
        return this._precoPromocional;
    }
    public set precoPromocional(v: number) {
        this._precoPromocional = v;
    }
    public get categoria(): string {
        return this._categoria;
    }
    public set categoria(v: string) {
        this._categoria = v;
    }

    public get isPublico(): boolean {
        return this._isPublico;
    }
    public set isPublico(v: boolean) {
        this._isPublico = v;
    }
    public get isPromocao(): boolean {
        return this._isPromocao;
    }
    public set isPromocao(v: boolean) {
        this._isPromocao = v;
    }
}
