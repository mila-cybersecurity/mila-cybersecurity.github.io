/* Estilo general del "escritorio" */
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Tahoma, sans-serif;
    background-color: #3A6EA5; /* Color de fondo azul */
}

/* Estilo del escritorio */
#desktop {
    position: relative;
    width: 100vw; /* Ajuste para el tamaño completo de la pantalla */
    height: 100vh; /* Ajuste para el tamaño completo de la pantalla */
}

/* Estilo de los íconos en el escritorio */
.icon {
    width: 80px;
    text-align: center;
    color: black;
    position: absolute; /* Para que se puedan colocar en posiciones específicas */
}

.icon img {
    width: 48px;
    height: 48px;
}

.icon p {
    font-size: 12px;
    margin-top: 5px;
}

/* Estilo de las ventanas emergentes */
.window {
    position: fixed;
    background-color: #E0E0E0;
    border: 2px solid #000;
    width: 500px; /* Aumentar el ancho */
    height: 400px; /* Aumentar la altura */
    display: none;
    z-index: 10;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
}

/* Estilo del encabezado de las ventanas */
.window-header {
    background-color: #007BFF; /* Color de fondo del encabezado */
    color: white;
    padding: 10px;
    cursor: move;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Contenido de la ventana */
.window-content {
    padding: 10px;
    font-size: 14px;
    display: flex;
    flex-wrap: wrap; /* Permitir que los íconos se envuelvan */
    justify-content: center; /* Centrar íconos */
}

/* Estilo para los iconos dentro de la ventana */
.window .icon {
    width: 80px; /* Ancho de los íconos */
    text-align: center;
    margin: 10px; /* Espacio entre íconos */
}

/* Estilo para el botón de cerrar */
.window-header button {
    background-color: red; /* Color del botón de cerrar */
    color: white;
    border: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
}

/* Estilo para el botón de redimensionar */
.window-header button:nth-child(2) {
    background-color: #007BFF; /* Color de fondo para botón de redimensionar */
    margin-left: 5px; /* Espacio entre el botón de cerrar y el de redimensionar */
}

/* Responsividad */
@media (max-width: 600px) {
    .icon {
        width: 60px; /* Ajuste para pantallas pequeñas */
        margin: 10px;
    }

    .window {
        width: 90%; /* Ajuste de ancho para móviles */
        height: 90%; /* Ajuste de altura para móviles */
    }

    .window-header {
        font-size: 16px; /* Tamaño de fuente más grande en móviles */
    }

    .icon img {
        width: 36px; /* Ajuste del tamaño del ícono en móviles */
        height: 36px; /* Ajuste del tamaño del ícono en móviles */
    }
}
