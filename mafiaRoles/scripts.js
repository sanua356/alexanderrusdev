//Переменные
let generatePackRolesBtn = document.querySelector("#generatePackRoles"); //Получает кнопку "Сгенерировать колоду"
let roles = document.querySelectorAll(".getValueSelectedRole"); //Получает массив обьектов с ролями и их количеством
let rolesCount = roles.length; //Получает количество всех возможных ролей для генерации
let arrayRoles = []; //Создание пустого массива, в котором будет хранится пак выбранных ролей 
let errorsCheck = false; //Проверка на наличие ошибок

generatePackRolesBtn.addEventListener("click", () => { //Отслеживание клика на кнопку генерации ролей
    errorsCheck = false; //Обновить переменную ошибок к дефолту
    arrayRoles = []; //Очистить пак ролей
    for (let i = 0; i < rolesCount; i++) { //Цикл получения всех ролей в массив arrayRoles (С уже выбраным количеством каждой роли)
        for (let j = 0; j < roles[i].value; j++) {
            arrayRoles.push(roles[i].dataset.role); //Загрузка очередного элемента в массив пака ролей
        }
    }
    shuffleTheDeck(); //Функция случайного перемешивания ролей в массиве
    if (arrayRoles.length == 0) { //Проверка ошибки на то, если в паке нет выбранных ролей
        alert("Ошибка, вы не выбрали ни одной карты для игры");
        errorsCheck = false; //Сбросить к дефолту переменную наличия ошибок
    } else {//Если ошибок не обнаружено
        alert("Колода сгенерирована, можете начинать раздачу ролей");
        errorsCheck = true;
        endOfDistributionFlag = false; // Переменная-флаг конца показа ролей на экране
        getRoleBtn.innerHTML = "Нажмите для получения роли"; //Переменная вывода роли на экран
    }
});

function shuffleTheDeck() { //Функция случайного перемешивания пака в массиве 
    for (let i = 0; i < 100; i++) { //Цикл перемешивания
        arrayRoles.sort(() => Math.random() - 0.5); //Случайная сортировка
    }
};

let getRoleBtn = document.getElementById("role"); //Получить обьект роли, чтобы после получить дата-атрибуты конкретно каждой роли
let counterVisibleRolesScreen = 0; //Счётчик уже показанных на экране ролей
let endOfDistributionFlag = false; //Флаг конца показа ролей
let roleShowTime = 3000; //Время показа роли на экране

function changeTimeViewRoleToScreen(timeInputValue){//Функция смены времени показа роли на экране
    roleShowTime = timeInputValue * 1000;
    document.getElementById("timeViewRoleToScreenValue").innerHTML = "Секунд: " + timeInputValue;
}

role.addEventListener("click", () => { //Событие клика для показа очережной роли на экране
    if(!endOfDistributionFlag){ //Если конец показа не достигнут
        if (errorsCheck) { //Если нет ошибок
            getRoleBtn.innerHTML = "Вы: " + arrayRoles[counterVisibleRolesScreen]; //Показать очередную роль на экране
            errorsCheck = false; //Флаг запрета клика, пока не показана старая роль
            setTimeout(() => { // Таймер показа роли на экране на определённое время
                getRoleBtn.innerHTML = "Нажмите для получения роли"; //Скрыть роль с экрана (Поставить "заглушку через время после показа")
                errorsCheck = true;
            }, roleShowTime);
            if (counterVisibleRolesScreen + 2 <= arrayRoles.length) {//Проверка на конец выдачи пака
                counterVisibleRolesScreen++;//Если не конец, добавить 1 к счётчику показа ролей
            } else {//Если конец
                counterVisibleRolesScreen = 0;//Обнулить счётчик показа ролей
                endOfDistributionFlag = true;//Поставить флаг конца показа в true
            }
        } else {//Если возники ошибки 
            alert("Ошибка. Возможно: \n1.Колода для раздачи пуста. \n2.Предыдущая роль еще не пропала с экрана показа ролей. \n3.Какой-нибудь косяк разрабочика :)");
        }
    }else{//Если флаг конца показа в true
        getRoleBtn.innerHTML = "Раздача законечена. Сгенерируйте новую колоду.";
    }
});


function getRandomInt(min, max) { // Функция генерации случайного числа в ограниченом диапазоне
    return Math.floor(Math.random() * (max - min + 1) + min); //Вернуть из функции случайное число
}

// Раздача ролей логика end

//Кнопка - как раздать роли?

//Закрыть popup
function openAndclosePopups(objectPopup){ //Функция показа модальных окон на экране (Вызывается непосредственно из HTML через onclick)
    document.querySelector("." + objectPopup.dataset.popups).classList.toggle("hideAndShowPopup");//Вставить/удалить класс показа окна на элемент
}
