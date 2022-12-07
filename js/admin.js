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

document.querySelector('.ocultar2').addEventListener('click', ()=>{
    event.stopPropagation();
    document.querySelector('.despleUsuario').classList.toggle('mostrar2')
   })
   
   window.onclick = function (e) {
    document.querySelector('.despleUsuario').classList.remove('mostrar2')
    
   };



