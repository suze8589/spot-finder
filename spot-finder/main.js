import "./style.css";

// Get elements by their ID
const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("results");

// Store all cards in an array
const allCards = Array.from(document.querySelectorAll(".card"));

let filteredCards = []; // Array to hold filtered results
let currentPage = 1; // Current page for pagination
const cardsPerPage = 4; // Number of cards to show per page

// Function to show cards for the current page
function showPage(page) {
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  // Clear the results container
  resultsContainer.innerHTML = "";
  console.log(startIndex, endIndex);

  // Show cards for the current page
  filteredCards.slice(startIndex, endIndex).forEach((card) => {
    resultsContainer.appendChild(card);
  });
}

// Update pagination display/show the current page
function updatePagination() {
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage); // Fixed typo here

  // Show the first page of the filtered results
  if (filteredCards.length > 0) {
    showPage(currentPage);
  } else {
    resultsContainer.innerHTML = "<p>No Results were Found! Search Again.</p>";
  }

  // Update the pagination numbers display
  document.getElementById(
    "page-number"
  ).textContent = ` ${currentPage} of ${totalPages}`;
  document.getElementById("prev-page").disabled = currentPage === 1;
  document.getElementById("next-page").disabled = currentPage === totalPages;
}

// Add event listeners for pagination buttons
// Left button
document.getElementById("prev-page").addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
    updatePagination();
  }
});

// Right button
document.getElementById("next-page").addEventListener("click", function () {
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
    updatePagination();
  }
});

// Perform search and update filtered results
function search() {
  const query = searchInput.value.toLowerCase();

  // Filter cards based on the search query
  filteredCards = allCards.filter((card) => {
    const name = card.querySelector("h2").textContent.toLowerCase();
    const country = card.querySelector("p").textContent.toLowerCase();
    return name.includes(query) || country.includes(query);
  });

  // Reset current page and update pagination
  currentPage = 1;
  updatePagination();
}

// Add event listener to the search input
searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    search();
  }
  console.log(searchInput.value);
});

// Initial display of cards
document.addEventListener("DOMContentLoaded", () => {
  filteredCards = allCards;
  showPage(currentPage); // Show the first page
  updatePagination(); // Update pagination display
});

/*import './style.css';

// Get elements by their ID
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');

//store all cards in an array
const allCards = Array.from(document.querySelectorAll('.card'));

let filteredCards = []; // Array to hold filtered results
let currentPage = 1; // current page for pagination
const cardsPerPage = 4; // Number of cards to show per page


//function to show cards for the current page
function showPage(page) {
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;


  //clear the results container
  resultsContainer.innerHTML = '';
  console.log(startIndex, endIndex);

  // Show cards for the current page
  filteredCards.slice(startIndex, endIndex).forEach(card => {
    resultsContainer.appendChild(card);
  });

}

// Update pagination display/show the current page
function updatePagination() {
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  // Show the first page  of the filtered results
  if (filteredCards.length > 0) {
    showPage(currentPage);
  } else {
    resultsContainer.innerHTML = '<p>No Results were Found! Search Again.</p>';
  }

  // Update the pagination numbers display
  document.getElementById('page-number').textContent = ` ${currentPage} of ${totalPages}`;
  document.getElementById('prev-page').disabled = currentPage === 1;
  document.getElementById('next-page').disabled = currentPage === totalPages;
}

//add event listeners for pagination buttons
//left button
document.getElementById('prev-page').addEventListener('click', function(){
  if(currentPage > 1){
    currentPage--;
    showPage(currentPage);
    updatePagination();
  }
});

//right button
document.getElementById('next-page').addEventListener('click', function(){
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  if(currentPage < totalPages){
    currentPage++;
    showPage(currentPage);
    updatePagination();
  }
});

//Perform search and update filtered results
function search() {
  const query = searchInput.value.toLowerCase();
 
//Filter cards based on the search query
  filteredCards = allCards.filter( card => {
    const name = card.querySelector('h2').textContent.toLowerCase();
    const country = card.querySelector('p').textContent.toLowerCase();
    return name.includes(query) || country.includes(query);
  });

// Reset current page and update pagination
  currentPage = 1;
  updatePagination();
  
}

// Add event listener to the search input
  searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      search();
    }
    console.log(searchInput.value);
  });


//Initial display of cards
document.addEventListener('DOMContentLoaded', () => {

filteredCards = allCards;
showPage(currentPage); // SHow the first page
updatePagination(); // Update pagination display
});*/
