/**
 * Nome do decorator (anotação).
 * Uso: @ImprimirTempoDeExecucao() sem argumento
 * Uso: @ImprimirTempoDeExecucao(true) com argumento
 */
export function ImprimirTempoDeExecucao(isEmSegundos: boolean = false) {
    return function (referenciaDoAlvo: any, nomeDoMetodo: string, descriptor: PropertyDescriptor) {
        const metodoOrigianl = descriptor.value;

        //sobrescreve o método original
        descriptor.value = function (...args: any[]) {

            console.log("====[Decorator]====");
            console.log(`[Decorator] Parâmetros passados para o método: [${nomeDoMetodo}] foram: ${JSON.stringify(args)}`);

            const inicio = performance.now();
            //invoca o método original
            const resultInvokMetodoOriginal = metodoOrigianl.apply(this, args);
            const fim = performance.now();

            console.log(getMsgResultadoExecucao(nomeDoMetodo, inicio, fim));
            return resultInvokMetodoOriginal;
        }

        return descriptor;
    }

    function getMsgResultadoExecucao(nomeDoMetodo: string, inicio: number, fim: number): string {
        let tempo = (fim - inicio);
        let unidade = 'ms';

        if (isEmSegundos) {
            tempo /= 1000;
            unidade = 's';
        }
        return `[Decorator] O tempo de execução do método: [${nomeDoMetodo}] foi ${tempo.toFixed(5)} ${unidade}`;
    }
}

/**
 * Anotação para determinar tempo de espera, sempre que a função for chamada.
 */
export function Throttle(intervaloInvocacaoMS: number = 500) {
    return function (referenciaDoAlvo: any, nomeDoMetodo: string, descriptor: PropertyDescriptor) {

        const metodoOrigianl = descriptor.value;
        let timer = 0;

        descriptor.value = function (...args: any[]) {
            //verifica se existem algum evento associado ao método.
            if (event) event.preventDefault();
            clearInterval(timer);
            timer = setTimeout(() => metodoOrigianl.apply(this, args), intervaloInvocacaoMS);
        }

        return descriptor;
    }
}