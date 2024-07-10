window.addEventListener("scroll", function(){
  const header = document.querySelector("header")
  const fixedNav = header.offsetTop
  if(window.pageYOffset > fixedNav){
    header.classList.add("fixed-nav")
  }else{
    header.classList.remove("fixed-nav")
  }
})



const menu = document.querySelector(".button-menu")
const nav = document.querySelector(".nav")
menu.addEventListener("click",function(){
  menu.classList.toggle("menu-active")
  nav.classList.toggle("nav-active")
} )