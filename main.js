let bookgallery = document.getElementById("hotelGallery");
let searchBar = document.getElementById("searchBar"); // search bar
let searchButton = document.getElementById("searchButton"); // button
let hotels = searchBar.value;
searchBar.addEventListener("change", function (event) {
  event.preventDefault();
  hotels = event.target.value;
});
// for click
searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  bookgallery.innerHTML = "";
  searchForHotel();
});
//for enter
searchBar.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    bookgallery.innerHTML = "";
    searchForHotel();
  }
});
function searchForHotel() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6a026ecb73msh88968b50c7eca35p1b01b2jsnb9b174e632af",
      "X-RapidAPI-Host": "apidojo-booking-v1.p.rapidapi.com",
    },
  };
  fetch(
    `https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete?text=${hotels}&languagecode=en-us`,
    options
  )
    .then((response) => response.json())
    .then((response) => bookResponse(response))
    .catch((err) => console.error(err));
}
function bookResponse(response) {
  let res = response;
  for (let x = 0; x < res.length; x++) {
    console.log(res[x]);
    var galleryItem = `
        <div class="bookingItem">
            <img src="${res[x].image_url}" alt="" />
            <p>${res[x].label}</p>
            <p>${res[x].country}</p>
            <p>${res[x].timezone}</p>
        </div>
    `;
    bookgallery.innerHTML += galleryItem;
  }
}
// bookResponse()
