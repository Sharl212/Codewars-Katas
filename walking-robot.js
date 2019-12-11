/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
// starts at (0,0)
// -2: turn left 90 degrees (x)
// -1: turn right 90 degrees (y)
var robotSim = function (commands, obstacles) {
    let x = 0
    let y = 0
    let direction = 0;
    /*
    0 north (up)
    1 south (down)
    2 east (right)
    3 west (left)
    */
    for (let command of commands) {
        if (command == -1) {
            direction = 2
        } else if (command == -2) {
            direction = 3
        } else {
            while (command--) {
                if (direction == 0) y++ 
                else if (direction == 1) y--
                else if (direction == 2) x++
                else if (direction == 3) x--
            }
        }
    }
    x
    y
    let EuclideanDistance = x * x + y * y
    EuclideanDistance
    return EuclideanDistance
};

commands = [4, -1, 4, -2, 4]
obstacles = [[2, 4]]

robotSim(commands, obstacles)

// Output: 25
// Explanation: robot will go to (3, 4)