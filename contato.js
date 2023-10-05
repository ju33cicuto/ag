const contactsList = [
    { name: "joão", contact: "joao@mail.com", type: "email" },
    { name: "pedro", contact: "999999999", type: "phone" },
    { name: "joana", contact: "888888888", type: "phone" },
    { name: "raissa", contact: "raissa@mail.com", type: "email" },
    { name: "maicon", contact: "maicon@mail.com", type: "email" },
    { name: "sandra", contact: "777777777", type: "phone" },
    { name: "lívia", contact: "livia@mail.com", type: "email" },
    { name: "caio", contact: "666666666", type: "phone" },
    { name: "larissa", contact: "555555555", type: "phone" },
    { name: "sávio", contact: "savio@mail.com", type: "email" },
  ];

  function createCard(object) {
    const licard = document.createElement('li');
    const divContainer = document.createElement('div');
    const pName = document.createElement('p');
    const pContact = document.createElement('p');
    const spanType = document.createElement('span');
    const btnRemove = document.createElement('button');

    pName.innerText = object.name;
    pContact.innerText = object.contact;

    divContainer.classList.add('card__container');
    btnRemove.classList.add('card__remove-button');
    licard.classList.add('card');

    if (object.type === 'email') {
        spanType.classList.add('email');
    } else {
        spanType.classList.add('phone');
    }

    // Criar o elemento svg com o ícone de lixeira
    const trashIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    trashIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    trashIcon.setAttribute('viewBox', '0 0 448 512');

    // Adicionar o path do ícone da lixeira ao svg
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute('d', 'M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z');

    // Definir atributos de estilo para o ícone
    trashIcon.setAttribute('width', '32');
    trashIcon.setAttribute('height', '32');
    trashIcon.style.fill = 'currentColor'; // Preenchimento da cor atual (pode ser personalizado)

    // Anexar o path ao svg e o svg ao botão
    trashIcon.appendChild(path);
    btnRemove.appendChild(trashIcon);

    btnRemove.addEventListener('click', function () {
        const index = contactsList.indexOf(object);

        contactsList.splice(index, 1);

        renderContacts(contactsList);
    });

    divContainer.append(spanType, pName, pContact);
    licard.append(divContainer, btnRemove);

    return licard;
}



  function renderContacts(array) {
    const list = document.querySelector('ul')

    list.innerHTML = '';

    for(let i = 0; i < array.length; i ++){
        const card = createCard(array[i]);

        list.appendChild(card);
    }
  }

function createNewContact(){
  const form = document.querySelector('.create__form')

  form.addEventListener('submit', function(event){
    event.preventDefault()
    
    const inpuName = document.querySelector("#input-name");
    const inputContact = document.querySelector("#input-contact");
    const selectType = document.querySelector("#select-type");
    
    //console.log(inpuName.value);
    //console.log(inputContact.value);
    //console.log(selectType.value);

    const newContact = {
      name: inpuName.value.toLowerCase(),
      contact: inputContact.value.toLowerCase(),
      type: selectType.value,
    }
    contactsList.push(newContact)
    renderContacts(contactsList)
  })
}

function searchContact(){
  const form = document.querySelector('.search__form');

  form.addEventListener('submit', function(event){
    event.preventDefault();

    const searchInput = document.querySelector('.search__input')

    const filteredContacts = [];

    for(let i = 0; i < contactsList.length; i++){
      const currentContact = contactsList[i]
      if(currentContact.name === searchInput.value){
        filteredContacts.push(currentContact)
      }
    }

    renderContacts(filteredContacts)
  })

  
}

  renderContacts(contactsList)
  createNewContact()
  searchContact()
  