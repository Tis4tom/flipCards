const cards = document.querySelectorAll('.card');
// select all cards on the page and with for of loop listen for click
for (let card of cards) {
card.addEventListener( 'click', function() {
 //for each card not 'this' clicked, set back to front facing
  cards.forEach(c => {
    if (c !== this) {
      c.classList.remove('is-flipped');
      c.classList.add('delayed');
    } 
  })
  this.classList.toggle('is-flipped');
  this.classList.remove('delayed');
});
}
