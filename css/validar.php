<?php
if(!empty($_POST['usuario']) && !empty($_POST['password'])){
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];
    if($usuario == "admin" && $password == "12345"){
        header("LOCATION: html\admin.html");
    }else{
        ?>
        <?php
        include("index.html");
        ?>
        <p>
        <h1 class="bad">Usuario o contraseña incorrectos </h1>
        <?php
    }

}else{
    ?>
    <?php
    include("index.html");
    ?>
    <p>
    <h1 class="bad">Campos vacíos</h1>
    <?php
}
