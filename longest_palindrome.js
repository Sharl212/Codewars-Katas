longestPalindrome = function (s) {
  if (s.length < 1) return 0
  if (s.length == 1) return 1
  for (let i = 0; i <= s.length; i++) {
    let subs = s.substr(i, s.length)
    let j = subs.length
    if (j >= 0) {
        let sub_subs_str = subs.substr(0,i)
        sub_subs_str
    }
  }
}

// longestPalindrome('a') //, 1)
// longestPalindrome('aa') //, 2)
// longestPalindrome('baa') //, 2)
// longestPalindrome('aab') //, 2)
// longestPalindrome('zyabyz')// , 6, 'Are you sure that is a palindrome?'
longestPalindrome('baabcd') //, 4
// longestPalindrome('baablkj12345432133d') //, 9
