import logo from '../assets/logoHeader.png'
import carrinho from '../assets/carrinhoHeader.png'
import styled from 'styled-components'
import Buttons from './Buttons'
import{NavLink, Link, useLocation} from 'react-router-dom'
import { Cores } from './Cores'

export let a = 'a1'

const HeaderStyled = styled.div`

    background-color: white;
    padding-top: 40px;
    padding-bottom: 30px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.09);
    
    
    .header1{
        display: flex;
        align-items: center;
        

        .logo{
            margin-left: 100px;
        }

        input[type=text] {
            font-weight: 400;
            font-size: 16px;
            width: 559px;
            height: 60px;
            padding: 20px;
            margin-left: 30px;
            border: none;
            border-radius: 8px;
            background-color: ${Cores.lightGray3};
        }
        input[type="text"]:focus {
                outline: none;
            }
        
        a{
            color: ${Cores.darkGray};
            margin-left: 50px;
        }

        .carrinho {
            margin-left: 30px;
        }
    }
    
    .cadastre-se {
        font-weight: 400;
        font-size: 16px;
        color: ${Cores.darkGray2};
        text-underline-offset: 5px;
    }

    nav {
       
        margin-left: 95px;
        width: 500px;
        margin-top: 40px;
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
    }
    .a-focus{
        color: ${Cores.primary};
        font-weight: 700;
        font-size: 16px;
        font-weight: bold;
        
        text-underline-offset: 7px;
    }
    
    .a1{
        color: ${Cores.darkGray2};
        font-weight: 400;
        font-size: 16px;
        text-decoration: none;
    }
`


export default function Header() {

    return (
        
        <HeaderStyled>
            <header>
                
            <div className="header1">

                <div className="logo">
                    <Link to='/'>
                    <img src={logo} alt="Digital College logo" width="253px" height="44px"/>
                    </Link>
                </div>
            
                <div className="">
                    <form action="" >
                        <input type="text" name="" id="" placeholder="Pesquisar produto..." />
                    </form>
                </div>
                
                <div className="">
                    <Link to="" href="#" className="cadastre-se">Cadastre-se</Link>
                    <Link to="">
                    <Buttons type={'PrimaryButton'} content={'Entrar'} ></Buttons>
                    </Link>
                </div>
                
                <div className="carrinho">
                    <Link to="/Carrinho">
                        <img src={carrinho} alt="Carrinho" width="33px" height="29px" />
                    </Link>
                </div>
            
            
            </div>

            <nav>
            <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? "a-focus" : "a1"
            }
            >
            Home
            </NavLink>
            <NavLink
            to="/ProductListing"
            className={({ isActive }) =>
                isActive ? "a-focus" : "a1"
            }
            >
            Produtos
            </NavLink>
                {/* <a href="#" className="a1">Produtos</a> */}
                <a href="#" className="a1">Categorias</a>
                <a href="#" className="a1">Meus Pedidos</a>
            </nav>
            </header>
        </HeaderStyled>
    )
}