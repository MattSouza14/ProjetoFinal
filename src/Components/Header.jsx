
import '../assets/logoHeader.png'
import '../assets/carrinhoHeader.png'



export default function Header() {
    return (

        <header>
            <div class="header1">

                <div class="logo">
                    <img src="src\assets\logoHeader.png" alt="Digital College logo" width="253px" height="44px"/>
                </div>
            
                <div class="">
                    <form action="">
                        <input type="text" name="" id="" placeholder="Pesquisar produto..."/>
                    </form>
                </div>
                
                <div class="">
                    <a href="#" class="cadastre-se">Cadastre-se</a>
                    <button class="button1">Entrar</button>
                </div>
        
                <div class="carrinho">
                    <img src="src\assets\carrinhoHeader.png" alt="Carrinho" width="33px" height="29px"/>
                </div>
            </div>

            <nav>
                <a href="#" class="a-focus">Home</a>
                <a href="#" class="a1">Produtos</a>
                <a href="#" class="a1">Categorias</a>
                <a href="#" class="a1">Meus Pedidos</a>
            </nav>
        </header>
    )
}