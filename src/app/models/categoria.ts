export class Categoria {

    private _id: string;
    private _nome: string;
    private _descricao: string;

    constructor(nome: string, descricao: string) {
        this._nome = nome;
        this._descricao = descricao;
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
    public get id(): string {
        return this._id;
    }
    public set id(v: string) {
        this._id = v;
    }
}
