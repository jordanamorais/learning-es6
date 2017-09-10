class Conta {

    constructor(saldo=0) {

        this._saldo = saldo;
    }

    get saldo() {

        return this._saldo;
    }

    atualiza(taxa) {
        throw new Error('Você deve ter um método atualiza() também para poder sobrescrevê-lo');
    }
}