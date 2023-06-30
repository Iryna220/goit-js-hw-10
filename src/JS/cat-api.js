const BASE_URL = "https://api.thecatapi.com/v1/";
const API_KEY = "live_u21Y5Igzf6bc5bGcRoQ2WJn4RVCcVNRckcdQ4GPdVUddRpaapl6Wd4Ffnyg1db3t";

export const fetchBreeds = function() {
    return fetch(`${BASE_URL}breeds?api_key=${API_KEY}`).
        then(resp => {
        if (!resp.ok) {
         Notify.failure("Oops! Something went wrong! Try reloading the page!")
        }
        return resp.json()
 })   
}

export const fetchCatByBreed = function(breedId) {
    return fetch(`${BASE_URL}images/search?&breed_ids=${breedId}&api_key=${API_KEY}`)
        .then(resp => {
            if (!resp.ok) {
                Notify.failure("Oops! Something went wrong! Try reloading the page!")
            }
            return resp.json()
        })
        .catch(err => console.log(err));
}