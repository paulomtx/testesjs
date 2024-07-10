async function buscarProduto(id){
    let resposta =await fetch (`https://fakestoreapi.com/products/${id}`)

    let produto= await resposta.json()

    console.log(produto.title)
}

buscarProdutos(1)