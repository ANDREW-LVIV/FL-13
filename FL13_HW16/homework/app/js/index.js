const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');

const HTTP_CODE_400 = 400;
const HTTP_CODE_201 = 201;
const READY_CODE_4 = 4;

function sendRequest(method, url, data = null) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.responseType = 'json';
		if(method === 'POST' || method === 'PUT'){
			xhr.setRequestHeader('Content-Type', 'application/json');
		}
		if(method === 'DELETE'){
			xhr.setRequestHeader('Authorization', 'admin');
		}
		xhr.onload = () => {
			if (xhr.readyState === READY_CODE_4 && xhr.status >= HTTP_CODE_400) {
				reject(xhr.response);
			} else if (xhr.readyState === READY_CODE_4 && xhr.status === HTTP_CODE_201) {
				reject(xhr.response);
		} else {
			resolve(xhr.response);
		}
	}
	xhr.onerror = () => {
		reject(xhr.response);
	}
	xhr.send(JSON.stringify(data));
});
}

let getItem = () => {
	sendRequest('GET', baseUrl + '/users')
	.then(data => loadItems(data))
	.catch(err => console.log(err));
}

form();
loading();
window.addEventListener('load', getItem());

function form(){
	const formAdd = document.createElement('div');
	formAdd.classList.add('form-add');
	formAdd.innerHTML = `<form>
	<input placeholder="Full Name" type="text" name="name" id="name" size="20" value=""/>	
	<input placeholder="Name" type="text" name="username" id="username" size="20" value=""/>
	<input id="submit" type="submit" class="btn" value="Add New User"/>
	</form>`;

	formAdd.addEventListener('submit', function(e) {
		e.preventDefault();
		addItem();
		document.getElementById('submit').disabled = true;
	})

	appContainer.append(formAdd);
	const listLoad = document.createElement('div');
	listLoad.setAttribute('id', 'loader');
	appContainer.append(listLoad);

	const listContent = document.createElement('div');
	listContent.setAttribute('id', 'list-content');
	appContainer.append(listContent);
}

function loadItems(data){
	loaded();
	resetFormAdd()
	const listBlock = document.createElement('div');
	listBlock.setAttribute('id', 'list-block');

	const table = document.createElement('table');
	const thead = document.createElement('thead');
	const tbody = document.createElement('tbody');
	
	thead.innerHTML = `<tr>
	<td>User ID</td>
	<td>Full Name</td>
	<td>Name</td>
	<td colspan=2></td>
	</tr>`;

	table.append(thead);

	data.forEach(element => {
		const tr = document.createElement('tr');
		tr.innerHTML = `
		<td>${element.id}</td>
		<td><input type="text" name="name" id="name_${element.id}" size="20" value="${element.name}"/></td>
		<td><input type="text" name="username" id="username_${element.id}" size="20" value="${element.username}"/></td>
		<td><button class="btn" onclick="updateItem('${element.id}')" id="updateBtn_${element.id}">Update</button></td>
		<td><button class="btn" onclick="deleteItem('${element.id}')" id="deleteBtn_${element.id}">Delete</button></td>
		`;
		tbody.append(tr);
	});

	table.append(tbody);
	listBlock.append(table);
	appContainer.append(listBlock);

	document.getElementById('list-content').innerHTML = document.getElementById('list-block').innerHTML;
	document.getElementById('list-block').remove();
}

function addItem() {
	loading();
	const name = document.getElementById('name').value;
	const username = document.getElementById('username').value;
	const body = {
		name: name,
		username: username
	}
	sendRequest('POST', baseUrl + '/users', body)
	.then(getItem())
	.catch(err => console.log(err));
}

function updateItem(id) {
	loading();
	document.getElementById('updateBtn_' + id).disabled = true;
	document.getElementById('deleteBtn_' + id).disabled = true;
	const name = document.getElementById('name_' + id).value;
	const username = document.getElementById('username_' + id).value;
	const body = {
		name: name,
		username: username
	}
	sendRequest('PUT', baseUrl + '/users/' + id, body)
	.then(getItem())
	.catch(err => console.log(err));
}

function deleteItem(id) {
	loading();
	sendRequest('DELETE', baseUrl + '/users/' + id)
	.then(getItem())
	.catch(err => console.log(err));
}

function loading() {
	document.getElementById('loader').style.display = 'block';
}
function loaded() {
	document.getElementById('loader').style.display = 'none';
}
function resetFormAdd() {
	document.getElementById('name').value = '';
	document.getElementById('username').value = '';
	document.getElementById('submit').disabled = false;
}