const image = document.getElementById("heroimage");
const div = document.getElementById("grid-container");

const chill = document.getElementById("chill");

let temperature = 20;
let windvelocity = 20;
let windchill = 0;

// Função para ajustar a altura do outro elemento com base na altura da imagem
function adjust() {
    let h = image.clientHeight;
    if (image.clientWidth <= 450)
    {
        h = 1.4*h;
    }
    else{
        h = image.clientHeight; // Pegando a altura da imagem em pixels
    }

    div.style.height = h + 'px'; // Definindo a altura do outro elemento
    if (temperature <= 10 && windvelocity >= 4.8){
        windchill= calculateWindChill(temperature, windvelocity);
        chill.textContent = windchill.toFixed(1) + "°C";
    }
    else{
        chill.textContent = "N/A";
    }
}

// Ajustando a altura quando a imagem for carregada
window.onload = adjust;

// Ajustando a altura quando a janela for redimensionada
window.onresize = adjust;

function calculateWindChill(temperature, windvelocity){
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windvelocity, 0.16) + 0.3965*temperature*Math.pow(windvelocity, 0.16);
}

