// // ? 1- figure out how to generate fibonacci numbers
// public static ulong[] productFib(ulong prod)
// {
//     ulong F1 = 0;
//     ulong F2 = 1;
//     ulong t = 0;


//     while (F1 * F2 < prod)
//     {
//         t = F1 + F2;
//         F1 = F2;

//         F2 = t;

//     }
//     ulong[] fib;
//     if (F1*F2 == prod)
//     {
//         fib = new ulong[3] { F1, F2, 1 };
//     }else
//     {
//         fib = new ulong[3] { F1, F2, 0 };
//     }

//     return fib;
// }


let prod = 5895

function F(prod) {
    let F1 = 0;
    let F2 = 1;
    let t = 0;

    while (F1 * F2 < prod)
    {
        t = F1 + F2;
        F1 = F2;
        F2 = t;
    }

    if(F1 * F2 == prod) {
        return [F1, F2, true]
    }else {
        return [F1, F2, false]
    }
}


console.log(F(prod))
    // return F(n) * F(n + 1) == prod ? [F(n), F(n + 1), 1] :
// function productFib(prod) {

//     function F (n) {
//         if(n == 1) return 1;
//         if(n == 0) return 0;
//         let condition = n * n+1;

//         if(condition !== prod){
//             console.log(`Condition :: ${condition}`, `Fibonacci :: ${n}`)
//             return F(F(n-1) + F(n-2))
//         }
//         else {
//             return `${F(n-1) + F(n-2)}`;
//         }
//     }

//     console.log(F(5))
// }


// productFib(4895) //  [55, 89, true])
// productFib(5895) //  [89, 144, false])
// productFib(74049690) // [6765, 10946, true])
// productFib(84049690) // [10946, 17711, false])
// productFib(193864606) // [10946, 17711, true])
// productFib(447577) // [610, 987, false])
// productFib(602070) // [610, 987, true]