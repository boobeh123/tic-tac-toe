class TicTacToe {
    constructor() {
        // Properties
        this.spaces = document.querySelectorAll('.box')
        this.grid = [[0,0,0],[0,0,0],[0,0,0]];
        this.key = {'XXX': 'p1', 'OOO': 'p2'};
        this.turn = 0;
        this.marker = 'X';
    }    
    
    // Methods
    initialiseGame() {
        for (let i = 0; i < this.spaces.length; i++) {
            this.spaces[i].addEventListener('click', (e) => {
                this.drawsXO(i);
            })
        }
    }

    drawsXO(num) {
        this.spaces[num].textContent = this.marker;
        this.marker == 'X' ? this.marker = 'O' : this.marker = 'X'
    }

    // Method that checks the grid before applying the player marker
    
    checksGrid(grid) {
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
}

let test = new TicTacToe
test.initialiseGame()