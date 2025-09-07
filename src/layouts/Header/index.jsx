import "./header.scss"
import { ReactComponent as LogoSVG } from "@/assets/icons/logo.svg"
import { ReactComponent as BurgerSVG } from "@/assets/icons/icon-hamburger.svg"
import Burger from "@/components/Burger"

export default () => {
    return (
        <header className="header">
            <LogoSVG className="header__logo"/>
            <Burger />
            <nav>
                <ul className="header__nav">
                    <li>
                        <a href="" className="header__nav__item">home</a>
                    </li>
                    <li>
                        <a href="" className="header__nav__item">shop</a>
                    </li>
                    <li>
                        <a href="" className="header__nav__item">about</a>
                    </li>
                    <li>
                        <a href="" className="header__nav__item">contact</a>
                    </li>
                </ul>

                <button className="header__burgerMenu" data-js-burger-open><BurgerSVG /></button>
            </nav>
        </header>
    )
}