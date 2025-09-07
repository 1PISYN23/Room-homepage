import "./firstsection.scss";
import { Image } from "minista"
import { ReactComponent as IconArrow } from "@/assets/icons/icon-arrow.svg"
import { ReactComponent as IconLeft } from "@/assets/icons/icon-angle-left.svg"
import { ReactComponent as IconRight } from "@/assets/icons/icon-angle-right.svg"

export default () => {
    return (
        <section className="firstSection">
            <Image src="/src/assets/images/desktop-image-hero-1.jpg" className="firstSection__image" id="slideImage" data-js-images/>
            <Image src="/src/assets/images/mobile-image-hero-1.jpg" className="firstSection__mobileImage" id="slideImageMobile" data-js-image-mobile/>
            <article className="firstSection__article">
                <h1 className="firstSection__article__title" data-js-text-title>Discover innovative <br/>ways to decorate</h1>
                <p className="firstSection__article__text" data-js-text-description>We provide unmatched quality, comfort, and style for property<br className="mainBr"/>
                owners across the country. Our experts combine form and<br className="mainBr"/>
                function in bringing your vision to life. Create a room in your<br className="mainBr"/>
                own style with our collection and make your property a<br className="mainBr"/>
                reflection of you and what you love.</p>
                <button className="firstSection__article__button">
                    <span className="firstSection__article__button-item">SHOP NOW</span>
                    <IconArrow className="firstSection__article__button-icon"/>
                </button>
                <div className="firstSection__article__leftRight">
                    <button className="firstSection__article__leftRight-itemLeft" data-js-button-left><IconLeft /></button>
                    <button className="firstSection__article__leftRight-itemRight" data-js-button-right><IconRight /></button>
                </div>
            </article>
        </section>
    )
}