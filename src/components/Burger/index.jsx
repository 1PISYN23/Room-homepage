import "./burger.scss"
import { ReactComponent as CloseSVG } from "@/assets/icons/icon-close.svg"

export default () => { 
    return (
        <section className="burgerMenu" data-js-burger-menu>  
            <button className="burgerMenu__buttonClose" data-js-burger-close><CloseSVG /></button>
            <ul className="burgerMenu__nav">
                <li><a href="" className="burgerMenu__nav__item">home</a></li>
                <li><a href="" className="burgerMenu__nav__item">shop</a></li>
                <li><a href="" className="burgerMenu__nav__item">about</a></li>
                <li><a href="" className="burgerMenu__nav__item">contact</a></li>
            </ul>
        </section>
    )
}