/*Método para desplegar botón cerrar sesión desde boón para móviles*/

/*const userMov = document.querySelector("#btnMenuMov");
/*const menuSesionMov = document.querySelector("#despleUser");*/

/*userMov.addEventListener("click", btn1);
    /*menuSesionMov.classList.toggle("mostrar");
}
);

/*Método para desplegar botón cerrar sesión desde botón para móviles*/

/*const user = document.querySelector("#btnUser");
const menuSesion = document.querySelector("#despleUser");
    user.addEventListener("click", function(){
    menuSesion.classList.toggle("mostrar");
}
);


const iconUser = document.querySelector("#btnMenuMov");
const iconMenuUser = document.querySelector("#mostrarMenu");
iconUser.addEventListener("click", function(){
    iconMenuUser.classList.toggle("mostrar");
}
);*/












   document.querySelector('.ocultar2').addEventListener('click', ()=>{
    event.stopPropagation();
    document.querySelector('.despleUsuario').classList.toggle('mostrar2')
   })
   
   window.onclick = function (e) {
    document.querySelector('.despleUsuario').classList.remove('mostrar2')
    
   };





   document.querySelector('.ocultar').addEventListener('click', ()=>{
    event.stopPropagation();
    document.querySelector('.despleUsuario').classList.toggle('mostrar1')
   })
   
   window.onclick = function (e) {
    document.querySelector('.despleUsuario').classList.remove('mostrar1')
    
   };





document.querySelector('.btnMenuMov').addEventListener('click', ()=>{
    event.stopPropagation();
    document.querySelector('.despleMenu').classList.toggle('mostrar')
   })
   
   window.onclick = function (e) {
    document.querySelector('.despleMenu').classList.remove('mostrar')
   };







