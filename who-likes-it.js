function likes (names) {
  const namesLength = names.length
  if (namesLength < 1) return 'no one likes this'
  if (namesLength == 1) return `${names[0]} likes this`
  let result = ''
  const lastName = names[namesLength - 1]
  const secondName = names[1]
  const beforeLastName = names[namesLength - 2]
  names.map((name, index) => {
    switch (namesLength) {
      // theres two names and we're at the first name
      case 2: {
        if (name !== lastName) {
          result += `${name} and`
        } else {
          result += ` ${name}`
        }
        break;
      }
      case 3: {
        // theres three names
        if (name !== lastName && name !== beforeLastName) {
          result += `${name}, `
        } else if (name == lastName) {
          result += `and ${name}`
        } else {
          result += `${name} `
        }
        break;

      }
      // more than 3 names
      case (namesLength > 3 ? namesLength : null): {
        if (index <= 1) {
          // display first two names only
          if (name !== secondName) {
            result += `${name}, `
          } else {
            result += `${name} and ${namesLength - 2} others`
          }
        }
        break;
      }
    }
  })
  result += ' like this'
  return result
}

// likes([]) //, 'no one likes this');
// likes(['Peter']) //, 'Peter likes this');
// likes(['Jacob', 'Alex']) //, 'Jacob and Alex like this');
// likes(['Max', 'John', 'Mark']) //, 'Max, John and Mark like this');
likes(['Alex', 'Jacob', 'Mark', 'Max']) //, 'Alex, Jacob and 2 others like this');
