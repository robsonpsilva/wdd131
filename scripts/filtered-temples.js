const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const listaItems = document.querySelectorAll('.navigation a');
const h2Item = document.querySelector('h2');
const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Brazil Rio de Janeiro",
		location: "Rio de Janeiro, Brazil",
		dedicated: "2022, May, 8",
		area: 29966,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rio-de-janeiro-brazil/400x250/1-001db7326e638032470a02813c9e47191ef74b0e.jpeg"
	  },
	  {
		templeName: "Brazil Recife",
		location: "Recife, Brazil",
		dedicated: "2000, December, 15",
		area: 37200,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/recife-brazil/400x250/recife-brazil-temple-lds-700211-wallpaper.jpg"
	  },
	  {
		templeName: "Brazil Fortaleza",
		location: "Fortaleza, Brazil",
		dedicated: "2009, June, 2",
		area: 36000,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fortaleza-brazil/400x250/1-Fortaleza-Temple-Photo-2233938.jpg"
	  },
];

let element_a = document.getElementsByTagName('a');
let m1 = document.getElementById('m_1');
let sel = 'Home';


for (var i = 0; i < element_a.length; i++) {
    element_a[i].addEventListener('click', function(event) {
		opt = this.textContent;
        templeFilter(opt, temples);
    });
}

templeFilter('Home', temples);

function templeFilter(sel,templeList){
	h2Item.textContent = sel;
	temple_temp = templeList;
	if (sel === 'Old'){
		temple_temp = templeList.filter(function(templeOpt){return templeOpt.dedicated.substring(0,3) < '1900'});
	}
	if (sel === 'New'){
		temple_temp = templeList.filter(function(templeOpt){return templeOpt.dedicated.substring(0,3) > '2000'});
	}
	if (sel === 'Large'){
		temple_temp = templeList.filter(function(templeOpt){return templeOpt.area > 90000});
	}
	if (sel === 'Small'){
		temple_temp = templeList.filter(function(templeOpt){return templeOpt.area < 10000});
	}
	m1.innerHTML = '';
	for (let i = 0; i< temple_temp.length; i++){
		m1.innerHTML += `
		<div class = "m0_div">	
			<div class = "m1_div">
				<h3>Temple: ${temple_temp[i].templeName}</h3>
				<p><span>Location:</span> ${temple_temp[i].location}</p>
				<p><span>Dedicated:</span> ${temple_temp[i].dedicated}</p>
				<p><span>Size:</span> ${temple_temp[i].area} sq ft</p>
				<figure class="img_container">
					<img src="${temple_temp[i].imageUrl}" alt ="${temple_temp[i].templeName}" width="400" height="250" loading="lazy" class="img_tunning">
				</figure>
			</div>
		</div>
		`
	}
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
