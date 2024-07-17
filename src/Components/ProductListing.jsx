export default function ProductListing(array) {
   return (
      <div>
         {array.map((produto)=> ProductCard(produto.nome, produto.descricao, produto.desconto, produto.imagem, produto.oldPrice, produto.newPrice))}
      </div>
   )
}