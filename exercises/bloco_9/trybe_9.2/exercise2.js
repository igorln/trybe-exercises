const moreThan8000 = _ => {
  const myPromise = new Promise ((resolve, reject) => {
    numbers = [];
    for (let index = 0; index < 10; index += 1) {
      numbers.push(Math.round(Math.random() * 50))
    }
    const total = numbers.reduce((result, value) => result + (value*value), 0)
    const divisors = [2, 3 ,5 ,10];
    const array = [];
    divisors.forEach((value) => array.push(total/value))
    total < 8000 ? resolve(array) :  reject();
    }
  )
  myPromise
    .then((array) => array)
    .then((results) => results.reduce((result, value) => result + value, 0))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
}

moreThan8000();