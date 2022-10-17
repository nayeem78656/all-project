const text = document.querySelector("#textarea")
let totalChar = document.querySelector("#total_counter");
let remainChar = document.querySelector("#remain_counter");

let char  = 0;
const updateChar = () =>{
    char = text.value.length;
    totalChar.innerText = char;
    remainChar.innerText = 150-char;
};
text.addEventListener("keyup",updateChar);

const copyText = () =>{
    text.select();
    text.setSelectionRange(0,9999);//mobile version
    navigator.clipboard.writeText(text.value);//important
}