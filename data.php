<?php
    $dato1 = $_GET['nombre'];
    $dato2 = $_GET['correo'];
    $dato3 = $_GET['password'];

    echo "Recibí: $dato1, $dato2, $dato3";

    // Datos de conexión a la base de datos
    $server = "localhost";
    $user = "DatoDelServidor";
    $password = "ConstraseñaDelServidor";
    $bd = "IDDeBaseDeDatos";

    // Conexión
    $cone = mysqli_connect($server, $user, $password, $bd);

    if(!$cone){
        die("Error: no se conectó a la base de datos.");
    }

    // Crear la sentencia a ejecutar en el server
    $sql = "INSERT INTO DatosP (Nombre, Correo, Password)VALUES('$dato1', '$dato2', '$dato3')";

    /// Ejecutar sentencia en el server
    if(mysqli_query($cone, $sql)){
        echo "1";
    } else {
        echo "0";
    }
?>

