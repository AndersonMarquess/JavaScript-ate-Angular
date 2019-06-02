/* Retorna o elemento de acordo com a tag/classe especificada */
var titulo = document.querySelector(".titulo-principal");
// Imprime os dados com a tag
console.log(titulo);
// Impre apenas o conteúdo da tag
console.log(titulo.textContent);

document.querySelector("title").innerText = "little italy? never heard about...";