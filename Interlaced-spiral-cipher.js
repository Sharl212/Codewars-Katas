const InterlacedSpiralCipher = {};

InterlacedSpiralCipher.encode = function (str) {
    let square = []
    let size = Math.ceil(str.length ** 0.5)
    let breakPoint = Math.ceil(size / 2)
    let startPoint = 0;
    breakPoint
    size

    let cacheRow, cacheCol
    for (let col = 0; col < size; col++) {
        square[col] = []
        for (let row = 0; row < size; row++) {
            if (row !== startPoint && row <= breakPoint || col !== startPoint && col <= breakPoint) {
                square[col][row] = 0
            } else if (square[cacheCol] !== undefined && square[cacheCol][cacheRow] == '1') {
                if(cacheRow+1 >= size){
                    square[cacheCol+1][cacheRow] = '2'
                }else {
                    square[cacheCol][cacheRow+1] = '2'
                }
                cacheCol = col
                cacheRow = row
                square[col][row] = '1'
            } else {
                cacheCol = col
                cacheRow = row
                square[col][row] = '1'
            }
        }
    }

    console.log(square)
};

InterlacedSpiralCipher.decode = function (str) {
    //your code goes here. you can do it!
};



let phrase1A = `Romani_ite_domum`;
let phrase1B = `Rntodomiimuea  m`;
InterlacedSpiralCipher.encode(phrase1A)
InterlacedSpiralCipher.decode(phrase1B)
// let phrase2A = `Sic transit gloria mundi`;
// let phrase2B = `Stsgiriuar i ninmd l otac`;
// InterlacedSpiralCipher.encode(phrase2A)
// InterlacedSpiralCipher.decode(phrase2B)