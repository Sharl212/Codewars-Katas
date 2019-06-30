function decrypt(str) {
    return str.split('').map(l => {
        let charNumber = l.charCodeAt()
        let translation = ''
        if(l !== ' ') {
            translation += (String.fromCharCode(charNumber - 3))
        }else {
            translation += ' '
        }
        return translation;
    }).join('')
}

console.log(decrypt("FIRST LEGION ATTACK EAST FLANK"));
