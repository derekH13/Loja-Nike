let modalKey = 0;
let quantTenis = 1; // quantidade inicial de tenis no modal
let cart = []; // carinho

//============FUNÇÕES AUXILIARES================= 

const formatoReal = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const formatoMonetario = (valor) => {
    if (valor) {
        return valor.toFixed(2);
    }
}

const abrirModal = () => {
    document.querySelector('.tenisWindownArea').style.opacity = 0;
    document.querySelector('.tenisWindownArea').style.display = 'flex';
    setTimeout(() => document.querySelector('.tenisWindownArea').style.opacity = 1, 150); // basicamente fez uma transition
    console.log('derek');
} // abrir o modal

const fecharModal = () => {
    document.querySelector('.tenisWindownArea').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.tenisWindownArea').style.display = 'none';
        console.log('derek1');
    }, 150);

  

} // função de fechar o modal

const preencherDadosdosTenis = (tenisItem, item, index) => {
    tenisItem.setAttribute('data-key', index); // definir o numero de cada um
    tenisItem.querySelector('.imagem-item img').src = item.img; // por o map estar fazendo o parametro item passar por diferentes atributos do objeto ele acessa diferentes valores
    tenisItem.querySelector('.tenis-item-price').innerHTML = formatoReal(item.price[2]);
    tenisItem.querySelector('.tenis-item-name').innerHTML = item.name;
}

const preencherDadosModal = (item) => {
    document.querySelector('.tenisBig img').src = item.img;
    document.querySelector('.tenisInfo h1').innerHTML = item.name;
    document.querySelector('.tenisInfo-actualPrice').innerHTML = formatoReal(item.price[2]);
}

const pegarKey = (e) => {
    let key = e.target.closest('.tenis-item').getAttribute('data-key'); // Note que 'key' estava incorreto aqui
    quantTenis = 1; // garantir que a quantidade incial de pizzas é 1
    modalKey = key; // para manter a informação de qual pizza foi clicada
    return key;
}

const preencherTamanhospreco = (key) => {
    document.querySelectorAll('.tenisInfo-size').forEach((size, sizeIndex) => {
        size.addEventListener('click', (e) => { // Deve ser 'click' em vez de 'Click'
            document.querySelector('.tenisInfo-size.selected').classList.remove('selected');
            size.classList.add('selected');
            document.querySelector('.tenisInfo-actualPrice').innerHTML = formatoReal(pizzaJson[key].price[sizeIndex]); // Deve ser document.querySelector
        });
    });
}

const escolherTamanhospreco = (key) => {
document.querySelectorAll('.tenisInfo-size').forEach((size,sizeIndex) => {
    size.addEventListener('click', (e) => {
document.querySelector('.tenisInfo-size.selected').classList.remove('selected')

size.classList.add('selected')

document.querySelector('.tenisInfo-actualPrice').inerrHTML = formatoReal(pizzaJson[key].price[sizeIndex])
    })
})
}

function mudarQuantidadeMais() {

quantTenis += 1;
document.querySelector('.tenisInfo-qt').innerHTML = quantTenis
console.log('tenwwis')


}

const adicionaNoCarrinho = () => {
    document.querySelector('.tenisInfo-addButton').addEventListener('click', () => {
            console.log('add cart')
            //pegar dados da janela modal aberta
            console.log('tenis' + modalKey)
            //tamanho
        let size = document.querySelector('.tenisInfo-size.selected').getAttribute('data-key')
        console.log('tamanho' + size)

        console.log("quant " + quantTenis)

        let price = document.querySelector('.tenisInfo-actualPrice').innerHTML.replace('R$&nbso;', '')

        let identificador = pizzaJson[modalKey].id+'t'+size
    })
}



function mudarQuantidadeMenos(){
   
        if(quantTenis > 1){
            quantTenis--
            document.querySelector('.tenisInfo-qt').innerHTML = quantTenis
            console.log(quantTenis)
        }
    
    
}




pizzaJson.map((item, index) => { // vai percorer para cada index do objeto pizzaJson

    let tenisItem = document.querySelector('.tenis-item .tenis-model').cloneNode(true); // use cloneNode(true) para clonar com seus filhos
    document.querySelector('.tenis-item').append(tenisItem); // injeta a copia (tenis-item) por estar em uma repetição ela é injetada 8 vezes

    preencherDadosdosTenis(tenisItem, item, index);

// =====================tenis clicado==============

tenisItem.querySelector('#bloco a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Clicou na Tenis');

let chave = pegarKey(e);

abrirModal()// ao clicar na tenis para poder add em seu carrinho o elemento model fica em display flex fazenedo com que ele apareça

preencherDadosModal(item)

pegarKey(e)

preencherTamanhospreco(chave)

seleciona('.tenisInfo-qt').innerHTML = quantTenis;

escolherTamanhospreco(chave)

mudarQuantidade()

});


});


const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';


function animeScroll(){
    const windowTop= window.pageYOffset + ((window.innerHeight - 120));
    target.forEach(function(element){
      if((windowTop) > element.offsetTop){
        element.classList.add(animationClass);
      }else{
        element.classList.remove(animationClass);
      }
    
    
    })//separa todos o elementos que estão relacionados ao target
    }
    
    
    animeScroll();
    
    window.addEventListener('scroll', function(){
    animeScroll();
    })
    