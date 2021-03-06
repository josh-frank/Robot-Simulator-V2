document.addEventListener("DOMContentLoaded", function() {
  
  // initializes the board
  init();
  
  // ADD CODE HERE!
  
  // [ "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown" ]

  const movesContainer = document.querySelector( "ul#moves-container" );
  const movesStack = [];

  function addMoveToStack( event ) {
    let keypress = event.key;
    if ( keypress == "ArrowLeft" ) { movesStack.push( "left" ); }
    if ( keypress == "ArrowRight" ) { movesStack.push( "right" ); }
    if ( keypress == "ArrowUp" ) { movesStack.push( "up" ); }
    if ( keypress == "ArrowDown" ) { movesStack.push( "down" ); }
    if ( [ "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown" ].includes( keypress ) ) {
      renderStack();
    }
  }

  function renderStack() {
    movesContainer.innerText = "";
    movesStack.forEach(move => {
      const thisMove = document.createElement( "li" );
      thisMove.innerText = move;
      movesContainer.append( thisMove );
    });
  }

  function moveBot9000() {
    let currentMove = movesStack.shift();
    move(currentMove);
    renderStack();
  }
  
  function startMoving() {
    setInterval( moveBot9000, 500 );
  }

  function stopMoving() {
    clearInterval( moveBot9000 );
  }

  document.addEventListener( "keydown", addMoveToStack );
  document.querySelector( "button#move-button" ).addEventListener( "click", startMoving );
} );

// !movesStack.length -- true if movesStack is empty
// if ( !movesStack.length ) { stopMoving(); }
// () => {
//   if ( !movesStack.length ) {
//     stopMoving();
//   } else {
//     moveBot9000();
//   }
// }

