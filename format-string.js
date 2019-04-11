function list(names) {
    if(names.length < 1) return '';
    if(names.length == 1) return names[0].name
    let result = '';

    for (let { name } of names) {
        if (name == names[0].name) { // first item in array
            result = name;
        } else if (names[names.length - 1].name == name) { // last item in array
            result += ` & ${name}`
        } else {
            result += `, ${name}`
        }
    }
    
    return result
}

console.log(list([{ name: 'Bart' }]))
