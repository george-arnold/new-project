'use strict';

function renderDogImages(response) {
  for (let i=0; i<response.message.length;i++ )
  $('.results').append(`<img src="${response.message[i]}" class="results-img">`);
}

function getDogImages() {
let userInput= $('#num-of-pics').val();
console.log (userInput);
  fetch('https://dog.ceo/api/breeds/image/random/'+userInput)
    .then(response => response.json())
    .then(responseJson => renderDogImages(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
 }


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImages();
  });
}

$(function() {
  watchForm();
});