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

/*
<div class="card">
    <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text"></p>
        </div>
</div>
*/
const cardContainer = document.getElementById('card_container');

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