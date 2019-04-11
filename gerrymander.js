const exampleTests = [
    [
        'OOXXX',
        'OOXXX',
        'OOXXX',
        'OOXXX',
        'OOXXX'],
    // [
    //     'XOXOX',
    //     'OXXOX',
    //     'XXOXX',
    //     'XOXOX',
    //     'OOXOX'],
    // [
    //     'OXOOX',
    //     'XXOXO',
    //     'XOXXX',
    //     'XXOXX',
    //     'OXXOO'],
    // [
    //     'XXOXO',
    //     'XOXOX',
    //     'OXOXO',
    //     'XOXOX',
    //     'XXOXX'],//null
    // [
    //     'XXXXX',
    //     'OOOXO',
    //     'XXXOX',
    //     'OOOOO',
    //     'XXXXX']
].map(e => e.join('\n'));

gerrymander([
    'OOXXX',
    'OOXXX',
    'OOXXX',
    'OOXXX',
    'OOXXX'].join('/n'))

function gerrymander(str) {
    let arr = str.split('/n')
    let result = []
    let index = 0; // which part of the "xo"
    let xoIndex = 0;
    arr
    for(let i of arr) { // which part of the "arr"
        let xo = i.split('')
        index
        xoIndex
        if(index == 0 && xoIndex !== 4){
            test = xo[xoIndex]
            test
            xo
            result.push(1)
        }
        else if ( index == 1 && xoIndex == 0 ) {
            result.push(1)
        }
        xoIndex = xoIndex+1        
        index = index+1
        result
    }
}