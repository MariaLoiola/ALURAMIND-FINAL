function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play(); /*Agora podemos tentar fazer o som da tecla 
pom tocar ao ser executado. Para isso, adicionamos o ponto depois de chamar o id #, assim
aparece uma lista de funções. Escolhemos a play()*/ /*Em seguida, criamos uma função para
poder executar o botão, já que é necessária uma ação, e colocamos a função play dentro da
função criada */

/*O ponto após da função entra no elemento html e busca todas as funcionalidade daquele
elemento*/
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSomPom;
    contador = contador + 1;
    console.log(contador);
}

//---------document.querySelector('.tecla_pom').onclick = tocaSomPom; 

/*Aqui utilizamos a função document. para acessar
o documento HTML, depois o querySelector para selecionar a classe desejada para futuras
alterações, ou seja, trouxemos o botão para o documento JS */

/*Utilizamos o atributo onclick para dizer que quando a tecla pom for precisona, é para 
executar a função tocaSomPom (neste caso a função vai atuar como o valor do atributo)*/

/*Na função onclick é necessário retirar o parenteses da função, para que a função seja 
guardada dentro do atributo onclick, peculiaridade do arquivo JS*/

/*Lista de Elementos: Auxiliam na organização dos códigos. Imagine que tivesse que colocar o som de cada
tecla de um piano, o código ficaria gigantesco, horrivel de trabalhar

O querySelectAll() busca todos os elementos que possuem o seletor declarado

Para saber se trabalhamos com lista, no JS, a função vem com colchetes []

Referências no JS devem ser declaradas com base nos valores que vao receber e guardar. É ideal que a lista
sempre armazene o mesmo valor, que não mude em algum momento. Como é valor constante declaramos com const
e o nome da lista

O evento de clicar, onclick, não é colocado na lista, mas em cada elemento da lista, ou seja, os elementos
de uma lista devem ser acessados individualmente, mesmo se em querySelectAll(). A lista é construida com
[], no qual adicionamos o indice da lista, como 0, 1, 2. Apos declarar o elemento, pode-se utilizar os atributos
novamente, como onclick

O console.log vai acessar o contador até que a condição seja falsa
*/