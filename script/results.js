function allShipsAreValid() {
    var invalid = document.querySelectorAll('.invalid')
    if (invalid.length>0) return false
    else return true
}

function showResults() {
    addContentFromHTML('#results', 'results.html')
    hideResultsWithX()

    var shipsAttending = countTheShips()
    if (shipsAttending.length==0) console.log('no ships selected!')
    console.log(shipsAttending)

    var initiativeOrder = []
    
}

function hideResultsWithX() {
    $('#results').on('click', '.close', function() {
        $('#results').hide()
    })
}

function countTheShips() {
    var inputs = document.getElementsByTagName('input')
    var shipsAttending = []
    for (var i=0; i<inputs.length; i++) {
        if (inputs[i].value>0) {
            for (var j=0; j<inputs[i].value; j++) {
                if (inputs[i].classList[0]=='player') {
                    shipsAttending.push([recordTable[chosenRace][inputs[i].name], 'player'])
                } else shipsAttending.push([recordTable[enemyRace][inputs[i].name], 'enemy'])
            }
        }
    }
    return shipsAttending
}
