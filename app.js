const cards = document.querySelectorAll('.card');
for (let card of cards) {
card.addEventListener( 'click', function() {
  cards.forEach(c => {
    if(c !== this) {
    c.classList.remove('is-flipped');
    c.classList.add('delayed');
    }
  })
  this.classList.toggle('is-flipped');
  this.classList.remove('delayed');
});
}