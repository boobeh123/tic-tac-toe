alert('hello world');

// things we need:
// - event listeners to check for clicks which runs an update function
// - an

let grid = [[0,0,0],[0,0,0],[0,0,0]]
let key = {'XXX': 'p1', 'OOO': 'p2'}
let turn = 0
let marker = 'X'

function checkGrid(grid) {
    let remainingSpaces = 9
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] != 0) {
                remainingSpaces--
                if (remainingSpaces < 1) {
                    return 'Draw'
                }
            }

            let vertical = ''
            if (i == 0) {
                for (let q = 0; q < grid.length; q++) {
                    vertical += grid[q][j]
                }
            }
            if (key[vertical] != undefined) {
                return key[vertical]
            }
            
            let horizontal = ''
            if (j == 0) {
                for (let q = 0; q < grid[i].length; q++) {
                    horizontal += grid[i][q]
                }
            }
            if (key[horizontal] != undefined) {
                return key[horizontal]
            }

            let diagonal = ''
            if (i == 0 && j == 0) {
                for (let q = 0; q < grid.length; q++) {
                    diagonal += grid[i+q][j+q]
                }
            } else if (i == 0 && j == 2) {
                for (let q = 0; q < grid.length; q++) {
                    diagonal += grid[i+q][j-q]
                }
            }
            if (key[diagonal] != undefined) {
                return key[diagonal]
            }

        }
    }
    return 'Next turn'
}

console.log(checkGrid(grid))