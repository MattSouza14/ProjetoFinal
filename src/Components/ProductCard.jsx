import '../assets/tenisCardUm.png'

export default function ProductCard({desconto, imagem, nome, descricao, oldPrice, newPrice}){
  const produtos = [{
    nome: 'Tênis',
    descricao:'K-Swiss V8 - Masculino',
    oldPrice: '$200',
    newPrice:'$149.9',
    desconto:'%30 OFF',
    imagem: 'src/assets/tenisCardUm.png',
   
  },
  {
    nome: 'Tênis',
    descricao:'K-Swiss V8 - Masculinoo',
    oldPrice: '$200',
    newPrice:'$149.9',
    desconto:'%30 OFF',
    imagem: 'src/assets/tenisCardUm.png',
  

  },
  {
    nome: 'Tênis',
    descricao:'K-Swiss V8 - Masculino',
    oldPrice: '$200',
    newPrice:'$149.9',
    imagem: 'src/assets/tenisCardUm.png'
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  oldPrice: '$200',
  newPrice:'$149.9',
  imagem: 'src/assets/tenisCardUm.png'
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  oldPrice: '$200',
  newPrice:'$149.9',
  imagem: 'src/assets/tenisCardUm.png'
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  oldPrice: '$200',
  newPrice:'$149.9',
  imagem: 'src/assets/tenisCardUm.png'
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  oldPrice: '$200',
  newPrice:'$149.9',
  imagem: 'src/assets/tenisCardUm.png'
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  oldPrice: '$200',
  newPrice:'$149.9',
  imagem: 'src/assets/tenisCardUm.png'
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  oldPrice: '$200',
  newPrice:'$149.9',
  imagem: 'src/assets/tenisCardUm.png'
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  oldPrice: '$200',
  newPrice:'$149.9',
  imagem: 'src/assets/tenisCardUm.png'
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  oldPrice: '$200',
  newPrice:'$149.9',
  imagem: 'src/assets/tenisCardUm.png'
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  oldPrice: '$200',
  newPrice:'$149.9',
  imagem: 'src/assets/tenisCardUm.png'
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  oldPrice: '$200',
  newPrice:'$149.9',
  imagem: 'src/assets/tenisCardUm.png'
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  oldPrice: '$200',
  newPrice:'$149.9',
  imagem: 'src/assets/tenisCardUm.png'
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  oldPrice: '$200',
  newPrice:'$149.9',
  imagem: 'src/assets/tenisCardUm.png'
}
  
]

  return(
     
          
         <div className="products-grid">
            <div className="card-container">
                <div className ="image-container">
                 <h3 className="overlay">{desconto}</h3>
                  <img
                    src={imagem}
                    alt="Tênis"
                    className="img"
                  />
                </div>
                <div className="description">
                  <h4 className="title">{nome}</h4>
                  <p className="descricao">{descricao}</p>
                  <p className="price">
                    <span className="price"><s>{oldPrice}</s></span>
                    <span className="priceDiscount">{newPrice}</span>
                  </p>
                </div>
              </div>
              
              
            </div>
       
       
   
    )
}

