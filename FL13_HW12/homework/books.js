const booksDefault = [
{
	'id': '01',
	'title': 'TED Talks: The Official TED Guide to Public Speaking',
	'author': 'Chris J. Anderson',
	'img': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533406303l/41044212._SY475_.jpg',
	'description': 'This book explains how the miracle of powerful public speaking is achieved...'
},
{
	'id': '02',
	'title': 'Dracula',
	'author': 'Bram Stoker',
	'img': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387151694l/17245.jpg',
	'description': 'A rich selection of background and source materials is provided in three areas'
},
{
	'id': '03',
	'title': '11/22/63',
	'author': 'Stephen King',
	'img': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327876792l/10644930.jpg',
	'description': 'Life can turn on a dime—or stumble into the extraordinary, as it does for Jake Epping, school.'
}
];

if(!window.localStorage.getItem('books')) {
	localStorage.setItem('books', JSON.stringify(booksDefault));
}