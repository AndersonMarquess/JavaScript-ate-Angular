System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function ImprimirTempoDeExecucao(isEmSegundos = false) {
        return function (referenciaDoAlvo, nomeDoMetodo, descriptor) {
            const metodoOrigianl = descriptor.value;
            descriptor.value = function (...args) {
                console.log("====[Decorator]====");
                console.log(`[Decorator] Parâmetros passados para o método: [${nomeDoMetodo}] foram: ${JSON.stringify(args)}`);
                const inicio = performance.now();
                const resultInvokMetodoOriginal = metodoOrigianl.apply(this, args);
                const fim = performance.now();
                console.log(getMsgResultadoExecucao(nomeDoMetodo, inicio, fim));
                return resultInvokMetodoOriginal;
            };
            return descriptor;
        };
        function getMsgResultadoExecucao(nomeDoMetodo, inicio, fim) {
            let tempo = (fim - inicio);
            let unidade = 'ms';
            if (isEmSegundos) {
                tempo /= 1000;
                unidade = 's';
            }
            return `[Decorator] O tempo de execução do método: [${nomeDoMetodo}] foi ${tempo.toFixed(5)} ${unidade}`;
        }
    }
    exports_1("ImprimirTempoDeExecucao", ImprimirTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
