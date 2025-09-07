const initBurgerMenu = () => {
    const burgerMenu = document.querySelector("[data-js-burger-menu]")
    const burgerMenuOpen = document.querySelector("[data-js-burger-open]")
    const burgerMenuClose = document.querySelector("[data-js-burger-close]")
    console.log(burgerMenu)
    console.log(burgerMenuOpen)
    console.log(burgerMenuClose)

    burgerMenuOpen.addEventListener("click", (event) => {
        event.stopPropagation()
        burgerMenu.classList.add("is-visible")
    })

    burgerMenuClose.addEventListener("click", (event) => { 
        event.stopPropagation()
        burgerMenu.classList.remove("is-visible")
    })

    document.addEventListener("click", (event) => {
        if (!event.target.classList.contains("burgerMenu")) {
            burgerMenu.classList.remove("is-visible")
        }
    })
}

export default initBurgerMenu