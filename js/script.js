/*
Ciao ragazzi,
esercizio di oggi: Our Team
nome repo: js-our-team
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
BONUS 3:
Permettere l'aggiunta di un nuovo membro del team
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro! :muscolo:
DATI PER ESERCIZIO
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	        Chief Editor	                angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	        Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	        Developer	                 scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	         barbara-ramos-graphic-designer.jpg
*/


// array contenente gli elementi del team

const ourTeam = [

    {
        'firstname': 'Wayne',
        'lastname': 'Barnett',
        'role': 'Founder & CEO',
        'img_profile': 'wayne-barnett-founder-ceo.jpg'
    },

    {
        'firstname': 'Angela',
        'lastname': 'Caroll',
        'role': 'Chief Editor',
        'img_profile': 'angela-caroll-chief-editor.jpg'
    },

    {
        'firstname': 'Walter',
        'lastname': 'Gordon',
        'role': 'Office Manager',
        'img_profile': 'walter-gordon-office-manager.jpg'
    },

    {
        'firstname': 'Angela',
        'lastname': 'Lopez',
        'role': 'Social Media Manager',
        'img_profile': 'angela-lopez-social-media-manager.jpg'
    },

    {
        'firstname': 'Scott',
        'lastname': 'Estrada',
        'role': 'Developer',
        'img_profile': 'scott-estrada-developer.jpg'
    },

    {
        'firstname': 'Barbara',
        'lastname': 'Ramos',
        'role': 'Graphic Designer',
        'img_profile': 'barbara-ramos-graphic-designer.jpg'
    },

]

const cardContainer = document.getElementById('card_container');
const inputContainer = document.getElementById('new_member');

/*
<div class="card">
    <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text"></p>
        </div>
</div>
*/
// per ciascuno degli oggetti presenti nell'array
for (let i = 0; i < ourTeam.length; i++) {
    let divCard = document.createElement('div');
    divCard.className = 'card m-2';
    cardContainer.appendChild(divCard);
    let imgCard = document.createElement('img');
    imgCard.src = `img/${ourTeam[i].img_profile}`;
    divCard.appendChild(imgCard);
    let bodyCard = document.createElement('div');
    bodyCard.classList.add('card-body');
    divCard.append(bodyCard);
    let nameCard = document.createElement('h3');
    nameCard.classList.add('text-center');
    nameCard.innerHTML = ourTeam[i].firstname +' '+ ourTeam[i].lastname;
    bodyCard.appendChild(nameCard);
    let roleCard = document.createElement('p');
    roleCard.classList.add('text-center');
    roleCard.innerHTML = ourTeam[i].role;
    bodyCard.appendChild(roleCard);
}


/*
<div class="input-group">
    <span class="input-group-text">First and last name</span>
    <input type="text" id="Firstname" class="form-control">
    <input type="text" id="Lastname" class="form-control">
</div>
*/
let inputDiv = document.createElement('div');
inputDiv.className = 'input-group w-75 mx-auto p-3';
inputContainer.appendChild(inputDiv);
let inputSpanDiv = document.createElement('span');
inputSpanDiv.classList.add('input-group-text');
inputSpanDiv.innerHTML = 'First and Last name';
inputDiv.appendChild(inputSpanDiv);
let inputFirstName = document.createElement('input');
inputFirstName.type = 'text';
inputFirstName.classList.add('form-control');
inputFirstName.setAttribute("id", "Firstname");
inputDiv.appendChild(inputFirstName);
let inputLastName = document.createElement('input');
inputLastName.type = 'text';
inputLastName.classList.add('form-control');
inputLastName.setAttribute("id", "Lastname");
inputDiv.appendChild(inputLastName);

/*
<div class="input-group mb-3">
    <label class="input-group-text" for="inputGroupFile01" id='imglabel'>Upload</label>
    <input type="file" class="form-control" id="inputGroupFile01">
</div>
*/
let inputImgDiv = document.createElement('div');
inputImgDiv.className = 'input-group mb-3 w-75 mx-auto p-3';
inputContainer.appendChild(inputImgDiv);
let inputLabelImgDiv = document.createElement('label');
inputLabelImgDiv.classList.add('input-group-text');
inputLabelImgDiv.setAttribute("for", "inputGroupFile01");
inputLabelImgDiv.setAttribute("id", "imglabel");
inputLabelImgDiv.innerHTML = 'Image';
inputImgDiv.appendChild(inputLabelImgDiv);
let inputImg = document.createElement('input');
inputImg.type = 'file';
inputImg.classList.add('form-control');
inputImg.setAttribute("id", "inputGroupFile01");
inputImgDiv.appendChild(inputImg);

/*
<div class="input-group">
    <span class="input-group-text">Role</span>
    <input type="text" id="Role" class="form-control">
</div>
*/
let inputDiv2 = document.createElement('div');
inputDiv2.className = 'input-group w-50 mx-auto';
inputContainer.appendChild(inputDiv2);
let inputSpanDiv2 = document.createElement('span');
inputSpanDiv2.classList.add('input-group-text');
inputSpanDiv2.innerHTML = 'Role';
inputDiv2.appendChild(inputSpanDiv2);
let inputRole = document.createElement('input');
inputRole.type = 'text';
inputRole.classList.add('form-control');
inputRole.setAttribute("id", "Role");
inputDiv2.appendChild(inputRole);

/*
<div class="input-group">
    <button type="button" class="btn btn-dark">Submit</button>
</div>
*/
let inputDivBtn = document.createElement('div');
inputDivBtn.className = 'input-group mx-auto justify-content-center p-3';
inputContainer.appendChild(inputDivBtn);
let inputBtn = document.createElement('button');
inputBtn.type = 'button';
inputBtn.className = 'btn btn-dark';
inputBtn.innerHTML = 'Submit';
inputDivBtn.appendChild(inputBtn);

// addEventListener sul bottone 
const inpBtnHtml = document.querySelector('.btn');
inpBtnHtml.addEventListener('click', function() {
    const fisrtNameVal = document.getElementById('Firstname').value;
    const lastNameVal = document.getElementById('Lastname').value;
    const imgVal = document.getElementById('inputGroupFile01').value;
    const roleVal = document.getElementById('Role').value;
    const newMember = {
        'firstname': fisrtNameVal,
        'lastname': lastNameVal,
        'role': roleVal,
        'img_profile': imgVal
    }
    //inserisco i dati all'interno del mio array principlae
    ourTeam.push(newMember);

    //generazione nuova card
    let divCardNew = document.createElement('div');
    divCardNew.className = 'card m-2';
    cardContainer.appendChild(divCardNew);
    let imgCardNew = document.createElement('img');
    imgCardNew.src = imgVal;
    divCardNew.appendChild(imgCardNew);
    let bodyCardNew = document.createElement('div');
    bodyCardNew.classList.add('card-body');
    divCardNew.append(bodyCardNew);
    let nameCardNew = document.createElement('h3');
    nameCardNew.classList.add('text-center');
    nameCardNew.innerHTML = fisrtNameVal +' '+ lastNameVal;
    bodyCardNew.appendChild(nameCardNew);
    let roleCardNew = document.createElement('p');
    roleCardNew.classList.add('text-center');
    roleCardNew.innerHTML = roleVal;
    bodyCardNew.appendChild(roleCardNew);
    cardContainer.appendChild(divCardNew);
})

console.log(ourTeam)


