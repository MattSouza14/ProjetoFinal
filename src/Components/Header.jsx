import '\src\Components\header.css'
export default function Header() {
    return (
        <header>
            <div class="row mb-5 mx-5 d-flex align-items-center header1">

                <div class="col-2 mx-5">
                    <img src="\src\assets\logoHeader.png" alt="Digital College logo" width="253px" height="44px"/>
                </div>
            
                <div class="col-5 mx-2">
                    <form action="">
                        <input type="text" name="" id="" placeholder="Pesquisar produto..."/>
                    </form>
                </div>
                
                <div class="col-3 ml-2">
                    <a href="#" class="mx-3 cadastre-se">Cadastre-se</a>
                    <button class="button1 mx-3">Entrar</button>
                </div>
        
                <div class="col-1">
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