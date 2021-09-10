let num = 70;

let isPrime = (num) => {
	if (num <= 1) {
		return false;
	}

	for (let i = 2; i <= num - 1; i++) {
		if (num % i == 0) {
			return false;
		} else {
			return true;
      console.log(i);
		};
	}
}

let factors = [];
factors.push(parseInt(1));

for (let i = 2; i <= (Math.floor(num / 2)); i++) {
  if (num % i == 0) {
    if (isPrime(i)) {
      factors.push(parseInt(i));
      console.log(i);
    } 
  }
}

let last = 1

console.log("Largest Prime Factor is", Math.max(factors));

console.log(factors);

factors.map((i) => {
  if (i > last) {
    last = i;
  }
})

console.log(last)


// Solution 2

// const num = 600851475143;
// const largestPrimeFactor = (num) => {
//    let res = Math.ceil(Math.sqrt(num));
//    const isPrime = (num) => {
//       let i, limit = Math.ceil(Math.sqrt(num));
//       for (i = 3; i <= limit; i += 2) {
//          if (num % i === 0) {
//             return false;
//          };
//       };
//       return true;
//    };
//    res = (res & 1) === 0 ? res - 1 : res;
//    while (!(num % res === 0 && isPrime(res))) {
//       res -= 2;
//    };
//    return res;
// }
// console.log(largestPrimeFactor(num));
