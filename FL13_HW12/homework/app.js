const root = document.getElementById('root');
let action;
let id;
const blockView = document.createElement('div');
blockView.classList.add('view');

let data = JSON.parse(window.localStorage.getItem('books'));

function load() {
	window.addEventListener('load', () => {
		let action = window.location.hash;
		let url = new URL(document.URL);
		let search_params = url.searchParams; 
		let id = search_params.get('id');
		setHash(action.slice(1), id);
	});
}

function setHash(action, id) {
	let state;
	if (action === 'add' && (!id || id === '')) {
		state = './index.html#add';
	}else if ((action === 'edit' || action === 'preview') && id) {
		state = `?id=${id}#${action}`;
	} else {
		state = './index.html';
	}
	window.history.pushState('', '', state);
	act(action, id);
}

function list(arr, node) {
	load();
	const blockList = document.createElement('div');
	blockList.classList.add('blockList');
	const block= document.createElement('div');
	block.classList.add('list');
	
	data.forEach(element => {
		const item = document.createElement('p');

		const link = document.createElement('a');
		const linkHref = document.createAttribute('href');
		linkHref.value = '?id='+element.id+'#preview';
		link.classList.add('nav-link');
		const linkText = document.createTextNode(element.title); 
		link.append(linkText);
		link.addEventListener('click', function () {
			setHash('preview', element.id); 
		});
		item.append(link);

		let editBtn = document.createElement('button');
		editBtn.classList.add('edit-btn');
		editBtn.innerHTML = 'edit';
		editBtn.addEventListener('click', () => {
			setHash('edit', element.id);
		});
		item.append(editBtn);

		block.append(item); 
	});

	let addBtn = document.createElement('button');
	addBtn.classList.add('add-btn');
	addBtn.innerHTML = 'ADD BOOK';
	addBtn.addEventListener('click', () => {
		setHash('add', false);
	});
	

	blockList.append(block);
	blockList.append(addBtn);
	node.append(blockList); 
	
}

function view(arr, node, id = false) {
	if(id === false){
		blockView.innerHTML = 'Select a Book';
	}else{
		let getObj = arr.find(item => item.id === id);
		blockView.innerHTML = `<div class='bookTilte'> ${getObj.title}</div>
		<div class='bookAuthor'> ${getObj.author}</div>
		<div class='bookImg'> <img src="${getObj.img}" alt="${getObj.title}"/></div>
		<div class='bookDescription'> ${getObj.description}</div>
		</div>`;
	}

	node.append(blockView); 
}

function bookForm(action, arr = false, id = false){
	let title;
	let author;
	let img;
	let description;
	let getObj
	if(action === 'add'){
		title = '';
		author = '';
		img = '';
		description = '';
	}
	if(action === 'edit') {
		getObj = arr.find(item => item.id === id);
		title = getObj.title;
		author = getObj.author;
		img = getObj.img;
		description = getObj.description;
	}

	const form = document.createElement('div');
	form.innerHTML = `<form>
	Title<br> <input placeholder="Book Title" type="text" name="title" id="title" size="30" value="${title}"/><br>
	Author<br> <input placeholder="Book Author" type="text" name="author" id="author" size="30" value="${author}"/><br>
	Img URL<br> <input placeholder="Img URL" type="text" name="img" id="img" size="30" value="${img}"/><br>
	Description<br> <textarea name="description" id="description" rows="10" cols="30" placeholder="Book Description">
	${description}</textarea><br>
	<input id="submit" type="submit" value="Save"/>
	<button>Cancel</button>
	</form>`;

	form.addEventListener('submit', function(e) {
		e.preventDefault();
		if(action === 'add'){
			save(
				document.getElementById('title').value,
				document.getElementById('author').value,
				document.getElementById('img').value,
				document.getElementById('description').value
				);
		}
		if(action === 'edit'){
			update(
				document.getElementById('title').value,
				document.getElementById('author').value,
				document.getElementById('img').value,
				document.getElementById('description').value,
				id
				);
		}
	})
	return form;
}

function save(title, author, img, description) {
	let id = new Date().getTime();
	const object = {
		id: id.toString(),
		title: title,
		author: author,
		img: img,
		description: description
	}
	data.push(object);
	localStorage.setItem('books', JSON.stringify(data));
}
function update(title, author, img, description, id=false) {
	let updatedList = data.map(item => {
		if (item.id === id) {
			item.title = title;
			item.author = author;
			item.img = img;
			item.description = description;
		}
		return item;
	});
	localStorage.setItem('books', JSON.stringify(updatedList));
}
function add(arr, node) {
	blockView.innerHTML = 'ADD a Book';
	blockView.append(bookForm('add'));
	node.append(blockView); 
}

function edit(arr, node, id) {
	blockView.innerHTML = 'EDIT a Book';
	blockView.append(bookForm('edit', arr, id));
	node.append(blockView); 
}

function act(action, id) {
	switch(action) {
		case 'preview':
		view(data, root, id);
		break;
		case 'add':
		add(data, root);
		break;
		case 'edit':
		edit(data, root, id);
		break;
		default:
		view(data, root, false);
	}
}

window.addEventListener('DOMContentLoaded', function () {
	list(data, root);
});