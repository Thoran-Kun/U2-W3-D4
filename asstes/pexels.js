// prendo l'URL di pexels
const pexelsURL = "https://www.pexels.com/it-it/api/documentation/"
const API_KEY = "I4Rf3ZW27ACB7DOlwbOWnK3xNBVFRAD60hiVtMSdFEkxp1hCd9yH1tRg"
const documentPhoto =
  "https://www.pexels.com/it-it/api/documentation/#photos-search"
const hamsters = "https://api.pexels.com/v1/search?query=hamsters"
const tiger = "https://api.pexels.com/v1/search?query=tigers"

// invio la richiesta al browser
const getData = function () {
  fetch(hamsters, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error("Risposta errata")
      }
    })
    .then((data) => {
      console.log("immagine:", data)
      const images = document.querySelectorAll("img")
      const photos = data.photos
      // sostituisco le immagini alla pressione del bottone
      images.forEach((img, i) => {
        if (photos[i]) {
          img.src = photos[i].src.medium
        }
      })
    })
    .catch((err) => {
      console.log("errore dal Server", err)
    })
}
document.getElementById("btn-hamsters").addEventListener("click", getData)

const getData2 = function () {
  fetch(tiger, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error("Risposta errata")
      }
    })
    .then((data) => {
      console.log("immagine:", data)
      const images = document.querySelectorAll("img")
      const photos = data.photos
      // sostituisco le immagini alla pressione del bottone
      images.forEach((img, i) => {
        if (photos[i]) {
          img.src = photos[i].src.medium
        }
      })
    })
    .catch((err) => {
      console.log("errore dal Server", err)
    })
}
document.getElementById("btn-tigers").addEventListener("click", getData2)
