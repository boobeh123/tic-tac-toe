

alert('hello world');

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

            let line = ''

            if (i == 0) {
                for (let q = 0; q < grid.length; q++) {
                    line += grid[q][j]
                }
            } else if (j == 0) {
                for (let q = 0; q < grid[i].length; q++) {
                    line += grid[i][q]
                }
            }

            if (key[line] != undefined) {
                return key[line]
            }

            if (i == 0 && j == 0) {
                for (let q = 0; q < grid.length; q++) {
                    line += grid[i+q][j+q]
                }
            } else if (i == 0 && j == 2) {
                for (let q = 0; q < grid.length; q++) {
                    line += grid[i+q][j-q]
                }
            }

            if (key[line] != undefined) {
                return key[line]
            }

        }
    }
    return 'Next turn'
}

console.log(checkGrid(grid))
