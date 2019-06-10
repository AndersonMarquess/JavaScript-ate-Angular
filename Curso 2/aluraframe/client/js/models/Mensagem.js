class Mensagem {

    constructor(msg='') {
        this._msg = msg;
    }

    get msg() {
        return this._msg;
    }

    set msg(msg) {
        this._msg = msg;
    }
}