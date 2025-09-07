import image1 from "../assets/images/desktop-image-hero-1.jpg"
import image2 from "../assets/images/desktop-image-hero-2.jpg"
import image3 from "../assets/images/desktop-image-hero-3.jpg"
import imageMob1 from "../assets/images/mobile-image-hero-1.jpg"
import imageMob2 from "../assets/images/mobile-image-hero-2.jpg"
import imageMob3 from "../assets/images/mobile-image-hero-3.jpg"

const scrollSections = () => {
    console.log("Logic of sroll")
    const imagesElemenet = document.querySelector("[data-js-images]")
    const imagesMobileElement = document.querySelector("[data-js-image-mobile]")
    const buttonLeftElement = document.querySelector("[data-js-button-left]")
    const buttonRightElement = document.querySelector("[data-js-button-right]")
    const textTitleElement = document.querySelector("[data-js-text-title]")
    const textDescription = document.querySelector("[data-js-text-description]")
    console.log(imagesElemenet)
    console.log(buttonLeftElement)
    console.log(buttonRightElement)
    console.log(textTitleElement)
    console.log(textDescription)

    const info = [
        {
            image: image1,
            mobileImage: imageMob1,
            textTitle: "Discover innovative ways to decorate",
            textDescriprion: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        },

        {
            image: image2,
            mobileImage: imageMob2,
            textTitle: "We are available all across the globe",
            textDescriprion: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        },

        {
            image: image3,
            mobileImage: imageMob3,
            textTitle: "Manufactured with the best materials",
            textDescriprion: "  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        },
    ]

    let index = 0

    const showSlide = () => {
        imagesElemenet.classList.add("fade-out")
        textTitleElement.classList.add("fade-out")
        textDescription.classList.add("fade-out")
        imagesMobileElement.classList.add("fade-out")

        if (window.innerWidth <= 425) {
            setTimeout(() => {
                imagesMobileElement.src = info[index].mobileImage
                imagesMobileElement.srcset = info[index].mobileImage
                textTitleElement.textContent = info[index].textTitle
                textDescription.textContent = info[index].textDescriprion
                imagesMobileElement.classList.remove("fade-out")
                textTitleElement.classList.remove("fade-out")
                textDescription.classList.remove("fade-out")
            }, 500)
        } else {
            setTimeout(() => {
                imagesElemenet.src = info[index].image
                imagesElemenet.srcset = info[index].image
                textTitleElement.textContent = info[index].textTitle
                textDescription.textContent = info[index].textDescriprion
                imagesElemenet.classList.remove("fade-out")
                textTitleElement.classList.remove("fade-out")
                textDescription.classList.remove("fade-out")
            }, 500)
        }
    }

    buttonLeftElement.addEventListener("click", () => {
        index = (index - 1 + info.length) % info.length
        showSlide()
    })

    buttonRightElement.addEventListener("click", () => {
        index = (index + 1) % info.length
        showSlide()
    })
}

export default scrollSections