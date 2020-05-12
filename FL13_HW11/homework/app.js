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
  node.firstElementChild.classList.toggle('open');  

}

tree(data, rootNode);