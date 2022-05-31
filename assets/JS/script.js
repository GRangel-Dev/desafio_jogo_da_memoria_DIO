const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let blockBoard = false;


function flipcard(){
     if(blockBoard) return;
     if(this === firstCard) return;

     this.classList.add('flip');

     if(!hasFlippedCard){
          hasFlippedCard = true;
          firstCard = this;
          return;
     }

     secondCard = this;
     hasFlippedCard = false;
     checkForMath();
}

function checkForMath(){
     if(firstCard.dataset.card === secondCard.dataset.card){
      disableCards();
      return;    
     }

     unflipCards();
}

function disableCards(){
     firstCard.removeEventListener('click', flipcard);
     secondCard.removeEventListener('click', flipcard);
     
     resetBoard();
}

function unflipCards(){
     blockBoard = true;

     setTimeout(()=>{
          firstCard.classList.remove('flip');
          secondCard.classList.remove('flip');

          resetBoard();
     }, 1500);
}

function resetBoard(){
     [hasFlippedCard. blockBoard] = [false, false];
     [firstCard, secondCard] = [null, null];
}

(function shuffle(){
     cards.forEach((card) => {
          let ramdomPosition = Math.floor(Math.random() * 12);
          card.style.order = ramdomPosition;
     })
})();

cards.forEach((card) => {
     card.addEventListener('click', flipcard)
});





