let video = document.querySelector(".video-container")
//let play = document.querySelector(".play")
let btn = document.querySelector(".switch-btn")

btn.addEventListener("click", function(){
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide")
        video.pause()
    }else{
        btn.classList.remove("slide")
        video.play()
    }
})

const preLoader = document.querySelector(".preloader")

window.addEventListener("load", function(){
    preLoader.classList.add('hide-preloader')
})