let idSelecionado
let valoresEncontrados = []



function renderizarCardClicado() {
  produtoSelecionadoPorClick = valoresEncontrados;
  img = produtoSelecionadoPorClick[0].img;
  nome = produtoSelecionadoPorClick[0].nome;
  tamanho = produtoSelecionadoPorClick[0].tamanho;
  cor = produtoSelecionadoPorClick[0].cor;
  valor = produtoSelecionadoPorClick[0].valor;
  categoria = produtoSelecionadoPorClick[0].categoria;
}

const pgCategoria = document.querySelector('.pgCategoria')
function preencherCatalogoPgcategoria() {
  ROUPAS.blusas.forEach((blusas) => {
    const novaLi = document.createElement('li');
    const link = document.createElement('a');
    const imagem = document.createElement('img');
    link.href = '#';
    imagem.src = `.${blusas.img}`;
    imagem.alt = 'blusa';
    imagem.dataset.id = blusas.id
    console.log(imagem)
    
    link.addEventListener('click', (event) => {
      event.preventDefault();
      idSelecionado = event.target.dataset.id;
      localStorage.clear()
      localStorage.setItem('novoId', idSelecionado);


      window.scrollTo({ top: 80, behavior: 'smooth' });

      valoresEncontrados = []
      encontrarValoresPorId(idSelecionado, ROUPAS)
      renderizarCardClicado()

      preencherProdutoSelecionado();
    })

    link.appendChild(imagem);
    novaLi.appendChild(link);

    const ulblusas = pgCategoria.querySelector('#blusaPghome');
    ulblusas.appendChild(novaLi);


  })
}
//
preencherCatalogoPgcategoria();

const idRoupa = localStorage.getItem('idRoupaSelecionada')
console.log(idRoupa);



function encontrarValoresPorId(id, objeto) {
  ;

  // Procurar na categoria "blusa"
  objeto.blusas.forEach((blusa) => {
    if (blusa.id === id) {
      valoresEncontrados.push(blusa);
    }
  });



  // return valoresEncontrados;
  return valoresEncontrados

}

encontrarValoresPorId(idRoupa, ROUPAS);

let produtoSelecionadoPorClick = valoresEncontrados;
let img = produtoSelecionadoPorClick[0].img;
let nome = produtoSelecionadoPorClick[0].nome;
let tamanho = produtoSelecionadoPorClick[0].tamanho;
let cor = produtoSelecionadoPorClick[0].cor;
let valor = produtoSelecionadoPorClick[0].valor;
let categoria = produtoSelecionadoPorClick[0].categoria;


function produtoSelecionado() {
  let teste =
    `<div class="produto-mais-vendido">
  <a href="../${categoria}.html">
   <img class="img-mais-vendido" src=".${img}"
   alt="${nome}">
   </a>
   </div>
   <div id="descProduto" class="desc-prod-home">
 <p>Produto </p><span>${nome}</span>
 <p>Tamanho </p><span>${tamanho}</span>
 <p>Cor </p><span>${cor}</span>
 <p>R$ </p><span>${valor}</span>
 <a class="botao-comprar" href="../html/carrinho.html">Comprar</a>
  
  <a class=" carrinho-btn" href="../html/carrinho.html"><img src="../img/carrinho.svg" alt="" srcset="" id="carrinhoBtn"></a>
 
</div>`

  return teste
}


function preencherProdutoSelecionado() {
  const pgCategoriaProdutoSelecionado = document.querySelector('.produto-mais-vendido')
  pgCategoriaProdutoSelecionado.innerHTML = produtoSelecionado();
}




preencherProdutoSelecionado();