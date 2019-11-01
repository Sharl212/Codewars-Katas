/*
https://www.codewars.com/kata/dubstep/javascript
*/
function songDecoder(song){
    return song.split('WUB').filter(w => w !== '' && w !== ' ').join();
}

t = songDecoder("AWUBWUBWUBBWUBWUBWUBC")
t