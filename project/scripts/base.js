const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const listaItems = document.querySelectorAll('.navigation a');
const h2Item = document.querySelector('h2');

let element_a = document.getElementsByTagName('a');
let sel = 'Home';


for (var i = 0; i < element_a.length; i++) {
    element_a[i].addEventListener('click', function(event) {
		// Mudar página quando clicar no link
    });
}

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


document.addEventListener('DOMContentLoaded', () => {
    listaItems.forEach(item => {
        item.addEventListener('click', () => {
            tWayFinder(item)
        });
    });
});

function tWayFinder(item){
	listaItems.forEach(elem => {
		if (elem.textContent.trim() !== item.textContent.trim()) {
			elem.classList.remove('active');
		}
		else{
			elem.classList.add('active');
		}
	})
}
