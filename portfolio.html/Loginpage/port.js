var typed = new Typed('#element', {
    strings: ['Software Developer','Graphic Designer','Mentor', 'Educator.'],
    typeSpeed: 70,
  });


const prevEle = document.querySelector(".prev")
const nextEle = document.querySelector(".next")
const imgContainerEle = document.querySelector(".img-container")
const imgEle = document.querySelectorAll(".pr-img")

let currImg = 1;
let timeout;

nextEle.addEventListener("click", ()=>{
    currImg++
    clearInterval(timeout)
    updateImg()
})
prevEle.addEventListener("click", ()=>{
    currImg--
    clearTimeout(timeout)
    updateImg()
})

updateImg()

function updateImg(){
    if(currImg > imgEle.length){
        currImg = 1
    }else if(currImg < 1){
        currImg = imgEle.length
    }
    imgContainerEle.style.transform = `translateX(${-(currImg - 1) * 100}%)`

    timeout = setTimeout(()=>{
        currImg++
        updateImg()
    }, 2000)
}
