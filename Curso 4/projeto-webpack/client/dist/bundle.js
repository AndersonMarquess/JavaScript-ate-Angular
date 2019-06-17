/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Negociacao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index_js__ = __webpack_require__(1);


let Negociacao = class Negociacao {

    constructor(_data = __WEBPACK_IMPORTED_MODULE_0__util_index_js__["g" /* obrigatorio */]('data'), _quantidade = __WEBPACK_IMPORTED_MODULE_0__util_index_js__["g" /* obrigatorio */]('quantidade'), _valor = __WEBPACK_IMPORTED_MODULE_0__util_index_js__["g" /* obrigatorio */]('valor')) {

        Object.assign(this, { _quantidade, _valor });
        this._data = new Date(_data.getTime());
        Object.freeze(this);
    }

    get volume() {

        return this._quantidade * this._valor;
    }

    get data() {

        return new Date(this._data.getTime());
    }

    get quantidade() {

        return this._quantidade;
    }

    get valor() {

        return this._valor;
    }

    equals(negociacao) {

        return JSON.stringify(this) == JSON.stringify(negociacao);
    }
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bind_js__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Bind_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConnectionFactory_js__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DaoFactory_js__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__DaoFactory_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ApplicationException_js__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__ApplicationException_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HttpService_js__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ProxyFactory_js__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__decorators_Debounce_js__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__decorators_Debounce_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__decorators_Controller_js__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__decorators_Controller_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Obrigatorio_js__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__Obrigatorio_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__decorators_BindEvent_js__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_9__decorators_BindEvent_js__["a"]; });











/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationException; });
/* unused harmony export isApplicationException */
/* harmony export (immutable) */ __webpack_exports__["b"] = getExceptionMessage;
let ApplicationException = class ApplicationException extends Error {

    constructor(msg = '') {

        super(msg);
        this.name = this.constructor.name;
    }
};

const exception = ApplicationException;

function isApplicationException(err) {

    return err instanceof exception || Object.getPrototypeOf(err) instanceof exception;
}

function getExceptionMessage(err) {

    if (isApplicationException(err)) {
        return err.message;
    } else {
        console.log(err);
        return 'Não foi possível realizar a operação.';
    }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View; });
let View = class View {

    constructor(seletor) {

        this._elemento = document.querySelector(seletor);
    }

    update(model) {

        this._elemento.innerHTML = this.template(model);
    }

    template(model) {

        throw new Error('Você precisa implementar o método template');
    }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__negociacao_Negociacao_js__ = __webpack_require__(0);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__negociacao_Negociacao_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__negociacao_NegociacaoDao_js__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__negociacao_NegociacaoService_js__ = __webpack_require__(19);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__negociacao_NegociacaoService_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__negociacao_Negociacoes_js__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__negociacao_Negociacoes_js__["a"]; });





/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProxyFactory; });
let ProxyFactory = class ProxyFactory {

    static create(objeto, props, armadilha) {

        return new Proxy(objeto, {

            get(target, prop, receiver) {

                if (ProxyFactory._ehFuncao(target[prop]) && props.includes(prop)) {

                    return function () {

                        console.log(`"${prop}" disparou a armadilha`);
                        target[prop].apply(target, arguments);
                        armadilha(target);
                    };
                } else {

                    return target[prop];
                }
            },

            set(target, prop, value, receiver) {

                const updated = Reflect.set(target, prop, value);
                if (props.includes(prop)) armadilha(target);
                return updated;
            }

        });
    }

    static _ehFuncao(fn) {

        return typeof fn == typeof Function;
    }
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionFactory; });
const stores = ['negociacoes'];
let connection = null;
let close = null;

let ConnectionFactory = class ConnectionFactory {

    constructor() {

        throw new Error('Não é possível criar instâncias dessa classe');
    }

    static getConnection() {

        return new Promise((resolve, reject) => {

            if (connection) return resolve(connection);

            const openRequest = indexedDB.open('jscangaceiro', 2);

            openRequest.onupgradeneeded = e => {

                ConnectionFactory._createStores(e.target.result);
            };

            openRequest.onsuccess = e => {

                connection = e.target.result;

                close = connection.close.bind(connection);

                connection.close = () => {
                    throw new Error('Você não pode fechar diretamente a conexão');
                };

                resolve(e.target.result);
            };

            openRequest.onerror = e => {

                console.log(e.target.error);
                reject(e.target.error.name);
            };
        });
    }

    static _createStores(connection) {

        stores.forEach(store => {

            if (connection.objectStoreNames.contains(store)) connection.deleteObjectStore(store);

            connection.createObjectStore(store, { autoIncrement: true });
        });
    }

    static closeConnection() {

        if (connection) {
            close();
        }
    }
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegociacaoDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Negociacao_js__ = __webpack_require__(0);


let NegociacaoDao = class NegociacaoDao {

    constructor(connection) {

        this._connection = connection;
        this._store = 'negociacoes';
    }

    adiciona(negociacao) {

        return new Promise((resolve, reject) => {

            const request = this._connection.transaction([this._store], 'readwrite').objectStore(this._store).add(negociacao);

            request.onsuccess = e => resolve();
            request.onerror = e => {

                console.log(e.target.error);
                reject('Não foi possível salvar a negociação');
            };
        });
    }
    listaTodos() {

        return new Promise((resolve, reject) => {

            const negociacoes = [];

            const cursor = this._connection.transaction([this._store], 'readwrite').objectStore(this._store).openCursor();

            cursor.onsuccess = e => {

                const atual = e.target.result;

                if (atual) {

                    const negociacao = new __WEBPACK_IMPORTED_MODULE_0__Negociacao_js__["a" /* Negociacao */](atual.value._data, atual.value._quantidade, atual.value._valor);

                    negociacoes.push(negociacao);
                    atual.continue();
                } else {

                    resolve(negociacoes);
                }
            };

            cursor.onerror = e => {
                console.log(e.target.error);
                reject('Não foi possível listar nas negociações');
            };
        });
    }

    apagaTodos() {

        return new Promise((resolve, reject) => {

            const request = this._connection.transaction([this._store], 'readwrite').objectStore(this._store).clear();

            request.onsuccess = e => resolve();

            request.onerror = e => {
                console.log(e.target.error);
                reject('Não foi possível apagar as negociações');
            };
        });
    }
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
let HttpService = class HttpService {

    _handleErrors(res) {

        if (!res.ok) throw new Error(res.statusText);
        return res;
    }

    get(url) {

        return fetch(url).then(res => this._handleErrors(res)).then(res => res.json());
    }
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateConverter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DataInvalidaException_js__ = __webpack_require__(10);


let DateConverter = class DateConverter {

    constructor() {

        throw new Error('Esta classe não pode ser instanciada');
    }

    static paraTexto(data) {

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static paraData(texto) {

        if (!/\d{2}\/\d{2}\/\d{4}/.test(texto)) throw new __WEBPACK_IMPORTED_MODULE_0__DataInvalidaException_js__["a" /* DataInvalidaException */]();

        return new Date(...texto.split('/').reverse().map((item, indice) => item - indice % 2));
    }
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataInvalidaException; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_ApplicationException_js__ = __webpack_require__(2);


let DataInvalidaException = class DataInvalidaException extends __WEBPACK_IMPORTED_MODULE_0__util_ApplicationException_js__["a" /* ApplicationException */] {

    constructor() {

        super('A data deve estar no formato dd/mm/aaaa');
    }
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_NegociacaoController_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_index_js__ = __webpack_require__(4);



const controller = new __WEBPACK_IMPORTED_MODULE_0__controllers_NegociacaoController_js__["a" /* NegociacaoController */]();
const negociacao = new __WEBPACK_IMPORTED_MODULE_1__domain_index_js__["a" /* Negociacao */](new Date(), 1, 200);
const headers = new Headers();
headers.set('Content-Type', 'application/json');
const body = JSON.stringify(negociacao);
const method = 'POST';

const config = {
    method,
    headers,
    body
};

fetch('/negociacoes', config).then(() => console.log('Dado enviado com sucesso'));

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegociacaoController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_index_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_index_js__ = __webpack_require__(1);
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}





let NegociacaoController = (_dec = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["c" /* controller */]('#data', '#quantidade', '#valor'), _dec2 = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["b" /* bindEvent */]('submit', '.form'), _dec3 = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["d" /* debounce */](), _dec4 = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["b" /* bindEvent */]('click', '#botao-importa'), _dec5 = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["d" /* debounce */](), _dec6 = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["b" /* bindEvent */]('click', '#botao-apaga'), _dec(_class = (_class2 = class NegociacaoController {

    constructor(_inputData, _inputQuantidade, _inputValor) {

        Object.assign(this, { _inputData, _inputQuantidade, _inputValor });

        this._negociacoes = new __WEBPACK_IMPORTED_MODULE_2__util_index_js__["a" /* Bind */](new __WEBPACK_IMPORTED_MODULE_0__domain_index_js__["c" /* Negociacoes */](), new __WEBPACK_IMPORTED_MODULE_1__ui_index_js__["d" /* NegociacoesView */]('#negociacoes'), 'adiciona', 'esvazia');

        this._mensagem = new __WEBPACK_IMPORTED_MODULE_2__util_index_js__["a" /* Bind */](new __WEBPACK_IMPORTED_MODULE_1__ui_index_js__["b" /* Mensagem */](), new __WEBPACK_IMPORTED_MODULE_1__ui_index_js__["c" /* MensagemView */]('#mensagemView'), 'texto');

        this._service = new __WEBPACK_IMPORTED_MODULE_0__domain_index_js__["b" /* NegociacaoService */]();

        this._init();
    }

    _init() {
        var _this = this;

        return _asyncToGenerator(function* () {

            try {
                const dao = yield __WEBPACK_IMPORTED_MODULE_2__util_index_js__["f" /* getNegociacaoDao */]();
                const negociacoes = yield dao.listaTodos();
                negociacoes.forEach(function (negociacao) {
                    return _this._negociacoes.adiciona(negociacao);
                });
            } catch (err) {
                _this._mensagem.texto = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["e" /* getExceptionMessage */](err);
            }
        })();
    }

    adiciona(event) {
        var _this2 = this;

        return _asyncToGenerator(function* () {

            try {
                const negociacao = _this2._criaNegociacao();
                const dao = yield __WEBPACK_IMPORTED_MODULE_2__util_index_js__["f" /* getNegociacaoDao */]();
                yield dao.adiciona(negociacao);
                _this2._negociacoes.adiciona(negociacao);
                _this2._mensagem.texto = 'Negociação adicionada com sucesso';
                _this2._limpaFormulario();
            } catch (err) {
                _this2._mensagem.texto = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["e" /* getExceptionMessage */](err);
            }
        })();
    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

    _criaNegociacao() {

        return new __WEBPACK_IMPORTED_MODULE_0__domain_index_js__["a" /* Negociacao */](__WEBPACK_IMPORTED_MODULE_1__ui_index_js__["a" /* DateConverter */].paraData(this._inputData.value), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
    }

    importaNegociacoes() {
        var _this3 = this;

        return _asyncToGenerator(function* () {

            try {
                const negociacoes = yield _this3._service.obtemNegociacoesDoPeriodo();
                console.log(negociacoes);
                negociacoes.filter(function (novaNegociacao) {
                    return !_this3._negociacoes.paraArray().some(function (negociacaoExistente) {
                        return novaNegociacao.equals(negociacaoExistente);
                    });
                }).forEach(function (negociacao) {
                    return _this3._negociacoes.adiciona(negociacao);
                });

                _this3._mensagem.texto = 'Negociações do período importadas com sucesso';
            } catch (err) {
                _this3._mensagem.texto = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["e" /* getExceptionMessage */](err);
            }
        })();
    }

    apaga() {
        var _this4 = this;

        return _asyncToGenerator(function* () {

            try {
                const dao = yield __WEBPACK_IMPORTED_MODULE_2__util_index_js__["f" /* getNegociacaoDao */]();
                yield dao.apagaTodos();
                _this4._negociacoes.esvazia();
                _this4._mensagem.texto = 'Negociações apagadas com sucesso';
            } catch (err) {
                _this4._mensagem.texto = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["e" /* getExceptionMessage */](err);
            }
        })();
    }
}, (_applyDecoratedDescriptor(_class2.prototype, 'adiciona', [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'adiciona'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'importaNegociacoes', [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'importaNegociacoes'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'apaga', [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'apaga'), _class2.prototype)), _class2)) || _class);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bind; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProxyFactory_js__ = __webpack_require__(5);


let Bind = class Bind {

    constructor(model, view, ...props) {

        const proxy = __WEBPACK_IMPORTED_MODULE_0__ProxyFactory_js__["a" /* ProxyFactory */].create(model, props, model => {
            view.update(model);
        });

        view.update(model);

        return proxy;
    }
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNegociacaoDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnectionFactory_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_negociacao_NegociacaoDao_js__ = __webpack_require__(7);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




let getNegociacaoDao = (() => {
    var _ref = _asyncToGenerator(function* () {

        let conn = yield __WEBPACK_IMPORTED_MODULE_0__ConnectionFactory_js__["a" /* ConnectionFactory */].getConnection();
        return new __WEBPACK_IMPORTED_MODULE_1__domain_negociacao_NegociacaoDao_js__["a" /* NegociacaoDao */](conn);
    });

    return function getNegociacaoDao() {
        return _ref.apply(this, arguments);
    };
})();

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
function debounce(milissegundos = 500) {

    return function (target, key, descriptor) {

        const metodoOriginal = descriptor.value;

        let timer = 0;

        descriptor.value = function (...args) {

            if (event) event.preventDefault();
            clearInterval(timer);
            timer = setTimeout(() => metodoOriginal.apply(this, args), milissegundos);
        };

        return descriptor;
    };
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = controller;
function controller(...seletores) {

    const elements = seletores.map(seletor => document.querySelector(seletor));

    return function (constructor) {

        const constructorOriginal = constructor;

        const constructorNovo = function () {

            const instance = new constructorOriginal(...elements);
            Object.getOwnPropertyNames(constructorOriginal.prototype).forEach(property => {
                if (Reflect.hasMetadata('bindEvent', instance, property)) {

                    associaEvento(instance, Reflect.getMetadata('bindEvent', instance, property));
                }
            });
        };

        constructorNovo.prototype = constructorOriginal.prototype;

        return constructorNovo;
    };
}

function associaEvento(instance, metadado) {

    document.querySelector(metadado.selector).addEventListener(metadado.event, event => {
        if (metadado.prevent) event.preventDefault();
        instance[metadado.propertyKey](event);
    });
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = obrigatorio;
function obrigatorio(parametro) {

    throw new Error(`${parametro} é um parâmetro obrigatório`);
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindEvent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index_js__ = __webpack_require__(1);


function bindEvent(event = __WEBPACK_IMPORTED_MODULE_0__util_index_js__["g" /* obrigatorio */]('event'), selector = __WEBPACK_IMPORTED_MODULE_0__util_index_js__["g" /* obrigatorio */]('selector'), prevent = true) {

    return function (target, propertyKey, descriptor) {

        Reflect.defineMetadata('bindEvent', { event, selector, prevent, propertyKey }, Object.getPrototypeOf(target), propertyKey);

        return descriptor;
    };
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegociacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_HttpService_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Negociacao_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__ = __webpack_require__(2);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





let NegociacaoService = class NegociacaoService {

    constructor() {

        this._http = new __WEBPACK_IMPORTED_MODULE_0__util_HttpService_js__["a" /* HttpService */]();
    }

    obtemNegociacoesDaSemana() {

        return this._http.get('negociacoes/semana').then(dados => dados.map(objeto => new __WEBPACK_IMPORTED_MODULE_1__Negociacao_js__["a" /* Negociacao */](new Date(objeto.data), objeto.quantidade, objeto.valor)), err => {

            throw new __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__["a" /* ApplicationException */]('Não foi possível obter as negociações da semana');
        });
    }

    obtemNegociacoesDaSemanaAnterior() {

        return this._http.get('negociacoes/anterior').then(dados => dados.map(objeto => new __WEBPACK_IMPORTED_MODULE_1__Negociacao_js__["a" /* Negociacao */](new Date(objeto.data), objeto.quantidade, objeto.valor)), err => {

            throw new __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__["a" /* ApplicationException */]('Não foi possível obter as negociações da semana anterior');
        });
    }

    obtemNegociacoesDaSemanaRetrasada() {

        return this._http.get('negociacoes/retrasada').then(dados => dados.map(objeto => new __WEBPACK_IMPORTED_MODULE_1__Negociacao_js__["a" /* Negociacao */](new Date(objeto.data), objeto.quantidade, objeto.valor)), err => {
            throw new __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__["a" /* ApplicationException */]('Não foi possível obter as negociações da semana retrasada');
        });
    }

    obtemNegociacoesDoPeriodo() {
        var _this = this;

        return _asyncToGenerator(function* () {

            try {
                let periodo = yield Promise.all([_this.obtemNegociacoesDaSemana(), _this.obtemNegociacoesDaSemanaAnterior(), _this.obtemNegociacoesDaSemanaRetrasada()]);
                return periodo.reduce(function (novoArray, item) {
                    return novoArray.concat(item);
                }, []).sort(function (a, b) {
                    return b.data.getTime() - a.data.getTime();
                });
            } catch (err) {
                console.log(err);
                throw new __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__["a" /* ApplicationException */]('Não foi possível obter as negociações do período');
            };
        })();
    }
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Negociacoes; });
let Negociacoes = class Negociacoes {

    constructor() {

        this._negociacoes = [];
        Object.freeze(this);
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
    }

    paraArray() {

        return [].concat(this._negociacoes);
    }

    get volumeTotal() {

        return this._negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0);
    }

    esvazia() {

        this._negociacoes.length = 0;
    }
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_MensagemView_js__ = __webpack_require__(22);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__views_MensagemView_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_NegociacoesView_js__ = __webpack_require__(23);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__views_NegociacoesView_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_View_js__ = __webpack_require__(3);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Mensagem_js__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__models_Mensagem_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__converters_DataInvalidaException_js__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__converters_DateConverter_js__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__converters_DateConverter_js__["a"]; });







/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensagemView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_js__ = __webpack_require__(3);


let MensagemView = class MensagemView extends __WEBPACK_IMPORTED_MODULE_0__View_js__["a" /* View */] {

    template(model) {

        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }
};

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegociacoesView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__converters_DateConverter_js__ = __webpack_require__(9);



let NegociacoesView = class NegociacoesView extends __WEBPACK_IMPORTED_MODULE_0__View_js__["a" /* View */] {

    template(model) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.paraArray().map(negociacao => `
                    <tr>
                        <td>${__WEBPACK_IMPORTED_MODULE_1__converters_DateConverter_js__["a" /* DateConverter */].paraTexto(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>                        
                `).join('')}
            </tbody>
            
            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td>${model.volumeTotal}</td>            
                </tr>
            </tfoot>
            
        </table>               
        `;
    }
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mensagem; });
let Mensagem = class Mensagem {

    constructor(texto = '') {

        this._texto = texto;
    }

    get texto() {

        return this._texto;
    }

    set texto(texto) {

        this._texto = texto;
    }
};

/***/ })
/******/ ]);