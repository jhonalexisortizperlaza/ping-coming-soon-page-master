let email = document.querySelector('.contact__email');
let submit = document.getElementById('submit');
let or = document.querySelector(".span-active");


function validarEmail () {
    let expresionRegular = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(expresionRegular.test(email.value)) {
        console.log("El correo electronico es valido.");
        email.style.border = "1px solid hsl(0, 0%, 59%)";
        or.style.display = "none"
    }else {
        console.log("El correo electronico NO es valido.");
        email.style.border = "1px solid hsl(354, 100%, 66%)";
        or.style.display = "block"
    }
}

submit.addEventListener("click", () => {
    validarEmail();
})