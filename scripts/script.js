const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "imagens/banner-1.png") {
        myImage.setAttribute("src", "imagens/banner2.jpg");
    } else {
        myImage.setAttribute("src", "imagens/banner-1.png");
    }
}

let myButton = document.querySelector("button");
let myHeader = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor, digite o seu nome");
    if(!myName) {
        setUserName();
    } else {    
        localStorage.setItem("name", myName);
        myHeader.textContent = `Resident Evil 4 é legal, ${myName}`
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeader.textContent = `Resident Evil 4 é legal, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};