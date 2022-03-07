const gameSummary = {
   numbers: 0,
   wins: 0,
   losses: 0,
   draws: 0,
}
const game = {
   playerHand: '',
   aiHand: '',
}

// Player hand selection
const hands = [...document.querySelectorAll('div.select img')];

hands.forEach(hand => hand.addEventListener('click', function () {
   game.playerHand = this.dataset.option;
   hands.forEach(hand => hand.style.boxShadow = '');
   this.style.boxShadow = '0 0 16px 4px green';
}));

// LET'S PLAY button
const btn = document.querySelector('.start');

btn.addEventListener('click', function () {

   // Check if hand was slected by the player
   if (!game.playerHand) {
      return alert('Please select a hand!');
   }

   // AI hand select
   function aiChoice() {
      return hands[Math.floor(Math.random() * 3)].dataset.option;
   }
   game.aiHand = aiChoice();

   // Game result
   function checkResult(player, ai) {
      if (player === ai) {
         return 'draw';
      } else if ((player === 'paper' && ai === 'rock') || (player === 'rock' && ai === 'scissors') || (player === 'scissors' && ai === 'paper')) {
         return 'win';
      } else {
         return 'loss';
      }
   };
   const gameResult = checkResult(game.playerHand, game.aiHand);

   // PUBLISH RESULTS
   // (player & ai choice)
   document.querySelector('[data-summary="your-choice"]').textContent = game.playerHand;
   document.querySelector('[data-summary="ai-choice"]').textContent = game.aiHand;
   // (number of games)
   document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;
   // (game winner)
   if (gameResult === 'draw') {
      document.querySelector('[data-summary="who-win"]').textContent = 'Draw :/';
      document.querySelector('[data-summary="who-win"]').style.color = 'gray';
      document.querySelector('p.draws span').textContent = ++gameSummary.draws;
   } else if (gameResult === 'win') {
      document.querySelector('[data-summary="who-win"]').textContent = 'You won!!!';
      document.querySelector('[data-summary="who-win"]').style.color = 'green';
      document.querySelector('p.wins span').textContent = ++gameSummary.wins;
   } else {
      document.querySelector('[data-summary="who-win"]').textContent = 'AI won :(';
      document.querySelector('[data-summary="who-win"]').style.color = 'red';
      document.querySelector('p.losses span').textContent = ++gameSummary.losses;
   }
   // End game
   function endGame(player, ai) {
      document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';
      game.playerHand = '';
      game.aiHand = '';

   }
   endGame();
});