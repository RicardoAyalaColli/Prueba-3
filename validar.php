<?php
if(!empty($_POST['usuario']) && !empty($_POST['password'])){
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];
    if($usuario == "admin" && $password == "12345"){
        header("LOCATION: html\admin.php");
    }else{
        echo"Usuario o Contraseña incorrecta"; 
    }

}else{
    echo"Los campos se encuentran vacios";
}