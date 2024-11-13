const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des flèches
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Dots
const dots = document.querySelector('.dots');

// Slides
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('p');
let slide = 0;

// Ajout des event listeners des fleches
arrowLeft.addEventListener('click', function () {
	slide--;
    updateSlider();
    console.log(slide = (slide + slides.length) % slides.length);
	console.log('Flèche gauche cliquée');

});

arrowRight.addEventListener('click', function () {
	slide++;
    updateSlider();
    console.log(slide = (slide + slides.length) % slides.length);
	console.log('Flèche gauche cliquée');

});


// Création des dots
function initDots() 
{
	dots.replaceChildren();
    for (let i = 0; i < slides.length; i++) 
	{
        const dot = document.createElement('div');
        dot.classList.add('dot'); 
		
		if (i === slide)
			dot.classList.add('dot_selected'); 
	
        dots.appendChild(dot);
    }
}

//Update le carousel
function updateSlider() 
{
	/* 
	Tableau utilisé circulairement, modulo sa taille
	Si slide < 0
		(-1+4)%4 = 3 donc derniere slide
	Si slide > slides.length
		(4+4)%4 = 0 donc premiere slide
	*/
	slide = (slide + slides.length) % slides.length;

    bannerImg.src = "assets/images/slideshow/" + slides[slide].image;
	bannerText.innerHTML = slides[slide].tagLine;
	initDots();
}

// initialise les dots au début
initDots();
