const image = document.getElementById('heroimage');
const div = document.getElementById('grid-container');

// Função para ajustar a altura do outro elemento com base na altura da imagem
function adjustheight() {
    const h = image.clientHeight; // Pegando a altura da imagem em pixels
    div.style.height = h + 'px'; // Definindo a altura do outro elemento
}

// Ajustando a altura quando a imagem for carregada
image.onload = adjustheight;

// Ajustando a altura quando a janela for redimensionada
window.onresize = adjustheight;