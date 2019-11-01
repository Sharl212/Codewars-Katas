function solution(s) {
    if (s.length <= 1) return 0

    const length = s.length;
    const stack = []

    for (let i = 0; i < length; i++) {
        let char = s[i]

        switch (char) {
            case '{':
                stack.push('}')
                break;
            case '[':
                stack.push(']')
                break;
            case '(':
                stack.push(')')
                break;
            case ']':
            case ')':
            case '}':
                if (stack.length < 1) return 0
                stack
                let char = stack.pop()
                if (char !== s[i]) {
                    return 0
                }
                break;
        }
    }

    if (!!stack.length) {
        return 0;
    } else {
        return 1
    }
}

t = solution("[[()()]")
t
arr = []

debugger;