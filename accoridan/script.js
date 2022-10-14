const itemDiv = document.getElementsByClassName("item");
const iconOpen = document.getElementsByClassName("iconOpen");
const iconClose = document.getElementsByClassName("iconClose");

// console.log(itemDiv);

for(let i = 0; i<itemDiv.length; i++){
    iconClose[i].style.display = "none";
    itemDiv[i].addEventListener("click",() => {
        const result = itemDiv[i].classList.toggle("active");
        if(result){
            iconClose[i].style.display = "block";
            iconOpen[i].style.display = "none";
        }else{
            iconClose[i].style.display = "none";
            iconOpen[i].style.display = "block";
        }
    })
}