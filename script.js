let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
// let items = document.querySelectorAll('.item')

prev.addEventListener('click', () => {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

next.addEventListener('click', () => {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length-2])
})