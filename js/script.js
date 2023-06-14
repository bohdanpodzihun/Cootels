let btns = document.querySelectorAll('.button-more')

function showMore(buttons) {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let more = button.parentElement.nextElementSibling

            more.classList.toggle('visible')
            button.classList.toggle('button-more-other-color')
        })
    })
}

showMore(btns)

let anchors = document.querySelectorAll('a[href*="#"]')

function smoothScroll(anchrs) {
    anchrs.forEach(anch => {
        anch.addEventListener('click', (e)=> {
            e.preventDefault()

            let blockID = anch.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    })
}

smoothScroll(anchors)

let callButtons = document.querySelectorAll('#call')

function call(callBtns) {
    callBtns.forEach(btn => {
        btn.addEventListener('click', ()=> {
            window.location.href = 'tel:555222333'
        })
    })
}

call(callButtons)

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }