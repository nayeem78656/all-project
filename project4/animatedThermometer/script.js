/* <span id="temp" class="fa"></span> */

const tempLoad = () => {
    let temp = document.getElementById("temp");
    console.log(temp);
    temp.innerHTML = "&#xf2cb";
    temp.style.color = "#ffffff";        
    setTimeout(() => {
            temp.innerHTML = "&#xf2ca";
            temp.style.color = "#ffff99";
        },1000);

        setTimeout(() => {
            temp.innerHTML = "&#xf2c9";
            temp.style.color = "#ff9966";
        },2000);

        setTimeout(() => {
            temp.innerHTML = "&#xf2c8";
            temp.style.color = "#ff6666";
        },3000);

        setTimeout(() => {
            temp.innerHTML = "&#xf2c7";
            temp.style.color = "red";
        },4000);
}
tempLoad();
setInterval(tempLoad,5000);

