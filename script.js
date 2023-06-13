const gameBoard = (()=>{
    const factoryPlayer = (playerName,turn)=>{
        return({playerName,turn});
    }
    let isPlayer1Turn = true;
    const player1 = factoryPlayer('player1',isPlayer1Turn);
    const player2= factoryPlayer('player2',!isPlayer1Turn);
    let movesCounter = 0;

    const winningCombination = [
        [0,1,2],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [3,4,5],
        [6,7,8],
        [2,4,6]
    ]
    const playerMove =  (e)=>{
        cell = e.target;
        if (isPlayer1Turn? cell.classList.add('x') : cell.classList.add('circle'));
        isPlayer1Turn = !isPlayer1Turn;
        movesCounter++;
        winner = winCheck();
        isDraw = drawCheck();
        console.log(isDraw);
        if(isDraw) displayDraw();
        if(winner) displayWinner(winner);
    
    }
    winCheck = ()=>{
        isplayer1Win = winningCombination.some(combination =>{
            return combination.every(index =>{
                return cells[index].classList.contains('x')
            })
        })
        isplayer2Win = winningCombination.some(combination =>{
            return combination.every(index =>{
                return cells[index].classList.contains('circle')
            })
        })

       if(isplayer1Win) return 'Player 1'
       else if(isplayer2Win) return 'Player 2'
    }
    drawCheck = () =>{
        if (movesCounter == 9) return true;
    }

    function displayWinner(winner){
        winnerDisplay = document.getElementById("winnerSection");
        winnerName = document.getElementById("winnerName");
        winnerDisplay.classList.add('show');
        winnerName.textContent = `${winner} Wins!!!`;
    }

    function displayDraw(){
        winnerDisplay = document.getElementById("winnerSection");
        winnerName = document.getElementById("winnerName");
        winnerDisplay.classList.add('show');
        winnerName.textContent = `It is a Draw`;

    }
    
    startGame = (()=>{
        cells = document.querySelectorAll('[data-cell]');
        cells.forEach(cell => {
            cell.addEventListener("click",playerMove , {once : true})
        })
    })();
   
    const restartButton = document.getElementById('restartBtn');
    restartButton.addEventListener("click",()=>{
        location.reload();
    })

})();