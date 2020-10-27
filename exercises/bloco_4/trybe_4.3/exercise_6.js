let num = 13;
let prime = 0;

for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
        prime += i;
    }
}

if (prime == num + 1 || prime == num) {
    console.log(num + " is prime")
} else {
    console.log(num + " is not prime")
}