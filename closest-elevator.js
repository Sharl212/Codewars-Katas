// https://www.codewars.com/kata/closest-elevator/train/javascript
function elevator(left, right, call) {
    if (left == call) {
        return "left"
    }
    else if (right + call <= 3 || right == call) {
        return "right"
    }
    else if (call == left == right) {
        return "right"
    }
}

console.log(elevator(2, 1, 2))