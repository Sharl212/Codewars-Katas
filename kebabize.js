function kebabize(str) {
    let kebabCase = '';
    for (let i = 0; i < str.length; i++) {
        const letter = str[i]
        if (/[A-Z]/g.test(letter) && str.indexOf(letter) > 0 && isNaN(str[0])) {
            kebabCase += `-${letter}`
        } else if (isNaN(letter)) {
            kebabCase += letter
        }
    }
    kebabCase
    return kebabCase.toLowerCase()
}

kebabize('79o0w') //'my-camel-cased-string'