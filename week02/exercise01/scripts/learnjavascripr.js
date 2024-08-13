const article = document. querySelector('article');
article.innerHTML += ' my article test';
article.style.textAlign='right';

// Creating an element

const paragraph = document.createElement('p');

// Appending a paragraph inside my article element

article.appendChild(paragraph);
paragraph.textContent = 'Hello world!';
