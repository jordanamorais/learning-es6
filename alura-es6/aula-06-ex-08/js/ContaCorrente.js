class ContaCorrente extends Conta {

    atualiza(taxa) {
        
        return this._saldo = this._saldo + taxa;
    }   
}