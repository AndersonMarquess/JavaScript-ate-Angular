export interface Comparador<T> {
    isIgual(outro: T): boolean;
}