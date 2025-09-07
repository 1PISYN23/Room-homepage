import "./secondsection.scss"
import { Image } from "minista"

export default () => {
    return (
        <section className="secondSection">
            <Image src="/src/assets/images/image-about-dark.jpg" className="secondSection__firstImage"/>
            <article className="secondSection__article">
                <h2 className="secondSection__article__title">ABOUT OUR FURNITURE</h2>
                <p className="secondSection__article__text">Our multifunctional collection blends design and function to suit your<br className="mainBr"/>
                individual taste.Make each room unique, or pick a cohesive theme that best<br className="mainBr"/>
                express your interests and whatinspires you. Find the furniture pieces you<br className="mainBr"/>
                need, from traditional to contemporary stylesor anything in between.<br className="mainBr"/>
                Product specialists are available to help you create your dream space.</p>
            </article>
            <Image src="/src/assets/images/image-about-light.jpg" className="secondSection__secondImage"/>
        </section>
    )
}