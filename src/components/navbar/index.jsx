import React from 'react'
import { Container, Logo, NavbarBackground ,Navigation,Nav, Buttons} from './index.styled'
import logo from '../../assets/logo.svg'
export default function Navbar() {
  return (
    <NavbarBackground>
        <Container>
            <Navigation>
             <Logo>
                 <a href="#">
                     <img src={logo} alt="" />
                 </a>
             </Logo>
             <Nav>
                 <ul>
                     <li><a href="#">Vakansiyalar</a></li>
                     <li><a href="#">Kandidatlar</a></li>
                     <li><a href="#">Kompaniyalar</a></li>
                     <li><a href="#">Xizmatlar</a></li>
                     <li><a href="#">Ta’lim</a></li>
                 </ul>
             </Nav>
             <Buttons>
                 <select>
                     <option value="uzb">O'zb</option>
                     <option value="eng">Eng</option>
                     <option value="rus">Rus</option>
                 </select>
                 <button>   Boshlash</button>
             </Buttons>
            </Navigation>
        </Container>
    </NavbarBackground>
  )
}
