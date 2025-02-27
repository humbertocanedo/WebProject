// console.log("Hola desde javascript !!!");

// alert("hola");

// confirm("quieres borrar todo?");

// prompt("dime tu nombre");

const username = document.getElementById("username");
const password = document.getElementById("password");

const login = () => {
    // console.log(username.value, password.value);
    if (username.value === "humbe" && password.value === "123"){
        sessionStorage.setItem("name", "Humbe Canedo")
        window.location = "/pages/home.html";
    } 
    else {
        alert("credenciales incorrectas");
    }
};


const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", login);

password.addEventListener("keydown", (e) => {
    if (e.key === "'Enter"){
        login();
    }
});

send.addEventListener("click", () =>{
    CharacterData.value += "\n" +msg.value;
    msg,value = "";
})

