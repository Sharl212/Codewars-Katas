$_$wp(1);
var $_$wvd1 = $_$w(1, 0), minEatingSpeed = function (piles, H) {
        $_$wf(1);
        let k = ($_$w(1, 1), 0);
        for (let pile = 0; $_$w(1, 2), pile < piles.length; pile++) {
            if ($_$w(1, 3), H <= 0) {
                return $_$w(1, 4);
            }
            if ($_$w(1, 5), piles[pile] < k) {
                $_$w(1, 6), piles[pile] = 0;
            } else {
                $_$w(1, 7), k = piles[pile];
            }
            $_$w(1, 8), H--;
        }
        $_$w(1, 9), $_$wv(1, 9, '1,9', 'k', k, '$_$ne', 1, 0, '');
        return $_$w(1, 10), k;
    };
$_$w(1, 11), piles = [
    30,
    11,
    23,
    4,
    20
];
$_$w(1, 12), H = 6;
$_$w(1, 13), minEatingSpeed(piles, H);
$_$wpe(1);