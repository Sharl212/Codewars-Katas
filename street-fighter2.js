function streetFighterSelection(fighters, position, moves) {
    let result = []
    let characterSelected = fighters[position[0]][position[0]];
    for (let j = 0; j < fighters.length; j++) {
        for (let i = 0; i < fighters[j].length; i++) {
            i
            j
            let characterIndex = fighters[j].indexOf(characterSelected);
            let lastCharacter = fighters[j].length - 1;
            let move = moves[i]

            switch (move) {
                case 'up':
                    characterIndex
                    // as long as the character exist in the first row
                    if (fighters[0].indexOf(characterSelected) !== -1) {
                        characterSelected = fighters[0][characterIndex]
                        result.push(characterSelected)
                    } else {
                        characterSelected = fighters[j][i]
                        result.push(characterSelected)
                        characterSelected
                    }
                    break;
                case 'down':
                    console.log(moves[i], fighters[i])
                    break;

                case 'right':
                    console.log(moves[i], fighters[i])
                    break;
                case 'left':
                    if (characterIndex !== -1 && characterIndex !== lastCharacter) {
                        characterSelected = fighters[j][characterIndex + lastCharacter]
                        result.push(characterSelected)
                        lastCharacter
                        characterIndex
                        characterSelected
                    } else {
                        characterIndex
                        test = fighters[j][characterIndex - i ]
                        test
                        characterSelected = fighters[j][characterIndex - 1]
                        result.push(characterSelected)
                        characterSelected
                    }
                    break;
            }
        }
    }
    result
    return result;
}

fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

moves = ["up", "left", "left", "left"];

streetFighterSelection(fighters, [0, 0], moves) // ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']