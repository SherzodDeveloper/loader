// setTimeout(function () {
//     // alert('hi')
// })

// setInterval(function () {
//     alert('hello')
// })

window.addEventListener('DOMContentLoaded', () =>{
    const loader = document.querySelector('.loader')
    setTimeout( () => {
        loader.style.opacity = '0'
        setTimeout(() => {
            loader.style.display = 'none'
        },500)
    },2000)
})