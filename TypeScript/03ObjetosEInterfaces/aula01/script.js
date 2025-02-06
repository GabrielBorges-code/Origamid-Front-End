var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Produto = /** @class */ (function () {
    function Produto(nome) {
        this.nome = nome;
    }
    return Produto;
}());
var Livro = /** @class */ (function (_super) {
    __extends(Livro, _super);
    function Livro(nome, autor) {
        var _this = _super.call(this, nome) || this;
        _this.autor = autor;
        return _this;
    }
    return Livro;
}(Produto));
var Jogo = /** @class */ (function (_super) {
    __extends(Jogo, _super);
    function Jogo(nome, jogadores) {
        var _this = _super.call(this, nome) || this;
        _this.jogadores = jogadores;
        return _this;
    }
    return Jogo;
}(Produto));
function buscarProduto(busca) {
    if (busca === "O Hobbit") {
        return new Livro("O Hobbit", "J R R Tolkien");
    }
    if (busca === "Dark Souls") {
        return new Jogo("Dark Souls", 1);
    }
    return null;
}
var produto = buscarProduto("Dark Souls");
if (produto instanceof Livro) {
    console.log(produto.autor);
}
if (produto instanceof Jogo) {
    // console.log(produto.nome);
}
if (produto instanceof Produto) {
    console.log(produto.nome);
}
var honda = {
    nome: "Honda",
};
console.log(honda instanceof Carro);
