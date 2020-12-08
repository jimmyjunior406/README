$(()=>{


// class Player  {
//     constructor (runStrength, passAccuracy) {
//         this.runStrength = runStrength,
//         this.passAccuracy = passAccuracy
//     }


//     $runTheBall() {
//         if (this.runStrength >= Math.floor)
//     }

//     $throwShort()//mathrandom this too

//     $throwDeep()//math random for fucking dayyys!!!
// }

// class Defense  {
//     constructor (runD, throwShortD, throwDeepD, blitz) {
//         this.runD = runD,
//         this.throwShortD = throwShortD,
//         this.throwDeepD = throwDeepD,
//         this.blitz = blitz
//      }

//     $runD() math

//     $throwShortD()

//     $throwLongD()

//     $blitz()


// }
// const player = {
//     currentPick: null
// }

// const defense = {
//     currentPick: null
// }


// const offensivePlays = [runBall, throwShort, throwDeep];



// const defensivePlays = [runD, shortD, deepD]








const $playGame = (event) => {
   event.preventDefault();

   const $runButton = $('<button>').text("Run the Ball").attr('id', 'run').addClass('offense');
    $('form').append($runButton);

    const $shortButton = $('<button>').text("Throw it Short").attr('id', 'short').addClass('offense');
    $('form').append($shortButton)

    const $longButton = $('<button>').text("Throw it Deep").attr('id', 'deep').addClass('offense');
    $('form').append($longButton)

    $('#play').remove();
    $('#modal').remove();
}
   




const $openButton = $('#open-modal');
const $modal = $('#modal');
const $closeButton = $('#close-modal');

const openModal = (event) => {
    $modal.css("display", "flex");
  }
const closeModal = (event) => {
    $modal.css("display", "none");
  }

$openButton.on('click', openModal);
$closeButton.on('click', closeModal);
    
    
    
$('#play').on('click', $playGame);
$('#run').on('click', $runBall);
$('#short').on('click', $throwShort);
$('#deep').on('click', $throwDeep);
    
});
    
    
    
    
    
    
    
    
    
    
    
    
 