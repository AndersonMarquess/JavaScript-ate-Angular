class Aluno {

    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {

    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
}

let avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];

let aprovados = avaliacoes
    .filter(function (prova) { return prova.nota >= 7; })
    .map(function (prova) { return prova.aluno.nome; });

console.log(aprovados);

// arrow func. com 1 parâmetro pode ser informado sem parênteses.
let aprovadosArrowFunction = avaliacoes
    .filter(p => p.nota >= 7)
    .map(p => p.aluno.nome);

console.log(aprovadosArrowFunction);