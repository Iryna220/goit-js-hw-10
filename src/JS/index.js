
import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
const breedSelect = document.querySelector('.breed-select');
const pLoader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
pLoader.style.display = "none"


fetchBreeds().then(data => {
    const formListEl = document.createElement("option");
    formListEl.value = "";
    formListEl.textContent = "Select a cat breed";
    breedSelect.appendChild(formListEl);


    data.forEach(breed => {
        const list = document.createElement("option");
        list.value = breed.id;
        list.textContent = breed.name;
        list.placeholder = "Select breed";
        breedSelect.appendChild(list);
    });

}).catch(err => console.log(err));

const onClick = evt => {
    const breedId = evt.target.value;
    breedSelect.value = ""
    pLoader.style.display = "block"
    fetchCatByBreed(breedId)
        .then(data => createMarkup(data))
        .catch(err => console.log(err));
};
const catById = breedSelect.addEventListener("change", onClick)


function createMarkup(data) {
    const imageUrl = data[0].url;
    const markup = data[0].breeds.map((breed) => {
        return `<img class="breed-image" alt=${breed.name} src=${imageUrl}>
    <div class="breed-container">
    <h2 class="breed-name"> ${breed.name}</h2>
    <p class="breed-temperament"> ${breed.temperament}</p>
    <p class="breed-description"> ${breed.description}</p>
</div>`;
    }).join("");

    catInfo.innerHTML = markup;
    pLoader.style.display = "none"
}




