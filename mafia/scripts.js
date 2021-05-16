let generatePackRolesBtn = document.querySelector("#generatePackRoles");
let roles = document.querySelectorAll(".getValueSelectedRole");
let rolesCount = roles.length;
let arrayRoles = [];
let errorsCheck = false;

generatePackRolesBtn.addEventListener("click", () => {
    errorsCheck = false;
    arrayRoles = [];
    for (let i = 0; i < rolesCount; i++) {
        for (let j = 0; j < roles[i].value; j++) {
            arrayRoles.push(roles[i].dataset.role);
            console.log(arrayRoles[i]);
        }
    }
    shuffleTheDeck();
    if (arrayRoles.length == 0) {
        alert("Ошибка, вы не выбрали ни одной карты для игры");
        errorsCheck = false;
    } else {
        alert("Колода сгенерирована, можете начинать раздачу ролей");
        errorsCheck = true;
    }
});

function shuffleTheDeck() {
    for (let i = 0; i < 100; i++) {
        arrayRoles.sort(() => Math.random() - 0.5);
    }
};

let getRoleBtn = document.getElementById("role");
let counter = 0;

role.addEventListener("click", () => {
    if (errorsCheck) {
        getRoleBtn.innerHTML = "Вы: " + arrayRoles[counter];
        setTimeout(() => {
            getRoleBtn.innerHTML = "Нажмите для получения роли";
        }, 1000);
        if (counter + 2 <= arrayRoles.length) {
            counter++;
        } else {
            counter = 0;
        }
    } else {
        alert("Ошибка. Колода пуста.");
    }
});


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}