const fatorial = num => {
  let result = 1;
    for (num; 0 < num; num -= 1){
      result *= num;
    }
  console.log(result);
}

fatorial(0)
