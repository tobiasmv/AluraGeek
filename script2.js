const open_btn = document.querySelector( ".menu__btn")
const close_btn = document.querySelector( ".close__btn")
const menu = document.querySelectorAll('.menu__nav')

open_btn.addEventListener('click',()=>{menu.forEach(menu_element => menu_element.classList.add('active'))})
close_btn.addEventListener('click',()=>{menu.forEach(menu_element => menu_element.classList.remove('active'))})