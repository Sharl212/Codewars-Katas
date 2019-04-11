function score(dice) {
    if (dice.length !== 5) return 0;

    let diceStr = dice.sort().join('');
    diceStr
    let score = 0;
    const rules = [
        { reg: /111/, score: 1000 },
        { reg: /666/, score: 600 },
        { reg: /555/, score: 500 },
        { reg: /444/, score: 400 },
        { reg: /333/, score: 300 },
        { reg: /222/, score: 200 },
        { reg: /1/, score: 100 },
        { reg: /5/, score: 50 },
    ];

    rules.forEach(rule => {
        while (rule.reg.test(diceStr)) {
            diceStr
            diceStr = diceStr.replace(rule.reg, '');
            diceStr
            score += rule.score;
        }
    });
    diceStr
    score
    return score;
}

score([5, 1, 3, 4, 1])