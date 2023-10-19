const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    },
};

const pessoaPrototype = { ...falar, ...comer, ...beber };
// const pessoaPrototype = Object.assign({}, falar, comer, beber); - Ou desse jeito

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
};

const p1 = criaPessoa('Emerson', 'Thiago');
const p2 = criaPessoa('Luiz', 'Otavio');
console.log(p1);
console.log(p2);