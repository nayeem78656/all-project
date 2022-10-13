const img = document.getElementById("myimage");
let btn = document.querySelectorAll("button")
btn[0].addEventListener("click",()=>{
    img.src="images/lightOn.png"
})
btn[1].addEventListener("click",()=>{
    img.src="images/lightOff.png"
})