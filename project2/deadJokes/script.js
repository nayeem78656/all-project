//        <div id="joke" class="joke">Awesome Joke is loading...</div>
// {/* <button id="jokeBtn" class="btn">Next Joke</button> */}

//GET https://icanhazdadjoke.com/

const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

/* const generateJokes = () => {
    fetch('https://icanhazdadjoke.com')
    .then((res) => {
        console.log(res.json());
    }).catch((error) => {
        console.log(error);
    })
}

jokeBtn.addEventListener('click',generateJokes);
generateJokes(); */

// const generateJokes = () => {
//     const setHeader ={
//         Headers:{
//             Accept: "application/json"
//         }
//     }
    
    /* 
        fetch('https://icanhazdadjoke.com',setHeader)
        .then((res) => {
            console.log(res.json());
        }).catch((error) => {
            console.log(error);
        }) */

    // fetch('https://icanhazdadjoke.com',setHeader)
    // .then((res) => res.json())
    // .then((data) => {
    //     jokes.innerHTML = data.joke;
    // }).catch((error) => {
    //     console.log(error);
    // })
// }


const generateJokes = async () => {
    try{
        const setHeader = {
            headers : {
                Accept : "application/json"
            }
        }
    const res = await fetch("https://icanhazdadjoke.com",setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
}catch(error){
    console.log(`the error is ${error}`);
}
}

jokeBtn.addEventListener('click',generateJokes);
generateJokes();















































