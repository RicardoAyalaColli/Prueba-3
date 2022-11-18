const user = document.querySelector("#btnUser");
const menu = document.querySelector("#despleUser");

user.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
}
);

const tresLineas = document.querySelector("#btnMenu");
const cincoLinks = document.querySelector("#mostrarMenu");
tresLineas.addEventListener("click", function(){
    cincoLinks.classList.toggle("mostrar");
}
);

const iconUser = document.querySelector("#iconUser");
const iconMenuUser = document.querySelector("#iconMenuUser");
iconUser.addEventListener("click", function(){
    iconMenuUser.classList.toggle("mostrar");
}
);
