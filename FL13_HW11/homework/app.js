const data = [
{
  'folder': true,
  'title': 'Pictures',
  'children': [
  {
    'title': 'logo.png'
  },
  {
    'folder': true,
    'title': 'Vacations',
    'children': [
    {
      'title': 'spain.jpeg'
    }
    ]
  }
  ]
},
{
  'folder': true,
  'title': 'Desktop',
  'children': [
  {
    'folder': true,
    'title': 'screenshots',
    'children': null
  }
  ]
},
{
  'folder': true,
  'title': 'Downloads',
  'children': [
  {
    'folder': true,
    'title': 'JS',
    'children': null
  },
  {
    'title': 'nvm-setup.exe'
  },
  {
    'title': 'node.exe'
  }
  ]
},
{
  'title': 'credentials.txt'
}
];

const rootNode = document.getElementById('root');

function tree(data, node) {
  const parent = document.createElement('ul');
  parent.classList.add('close');

  data.forEach(element => {
    const child = document.createElement('li');
    const item = document.createElement('p');
    const itemIco = document.createElement('i');
    itemIco.classList.add('material-icons');
    const ICO_DIR_OPENED = 'folder_open';
    const ICO_DIR_CLOSED = 'folder';

    if (element.folder) {

      itemIco.innerHTML = ICO_DIR_OPENED;

      item.addEventListener(
        'click',
        function() {
          itemIco.innerText === ICO_DIR_CLOSED ?
          itemIco.innerText = ICO_DIR_OPENED :
          itemIco.innerText = ICO_DIR_CLOSED;
          child.querySelector('.close').classList.toggle('open');
          event.stopPropagation();
        },
        true
        );
      item.classList.add('folder');
    }else{
      itemIco.append('insert_drive_file');
      item.classList.add('file');
    }

    // right click
    let menu = null;
    document.addEventListener('DOMContentLoaded', function(){
      menu = document.querySelector('.menu');
      menu.classList.add('off');
      item.addEventListener('contextmenu', showmenu);
      menu.addEventListener('mouseleave', hidemenu);
      addMenuListeners();
    });
    function addMenuListeners(){
      document.getElementById('rename').addEventListener('click', function () {
        item.classList.add('selectItem');
        itemRename();
      });
      document.getElementById('delete').addEventListener('click', itemDelete);
    }
    function itemRename(){
      console.log('rename clicked');
      hidemenu();
    }   
    function itemDelete(){
      console.log('delete clicked');
      hidemenu();
    }    
    function showmenu(ev){
      ev.preventDefault(); 
      const TWENTY = 20;
      console.log( ev.clientX, ev.clientY );
      menu.style.top = `${ev.clientY - TWENTY}px`;
      menu.style.left = `${ev.clientX - TWENTY}px`;
      menu.classList.remove('off');
    }
    
    function hidemenu(){
      const TWO_HUNDRED = '-200%';
      menu.classList.add('off');
      menu.style.top = TWO_HUNDRED;
      menu.style.left = TWO_HUNDRED;
      item.classList.remove('selectItem');
    }

    item.append(itemIco);
    item.append(element.title); 
    child.append(item); 

    if (element.children) {
      tree(element.children, child);
    } else {
      if (element.folder) {
        const empty = document.createElement('li');
        empty.classList.add('empty', 'close');
        empty.append('Folder is empty');
        child.append(empty);
      }
    }

    parent.append(child);

  });

  node.append(parent);
  node.firstElementChild.classList.remove('close'); 

}

tree(data, rootNode);

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
const contextdiv = document.createElement('div');
contextdiv.classList.add('context-menu');
contextdiv.innerHTML = `<ul class="menu">
<li class="menu-item" id="rename">Remane</li>
<li class="menu-item" id="delete">Delete Item</li>
</ul>`;
insertAfter(rootNode, contextdiv);