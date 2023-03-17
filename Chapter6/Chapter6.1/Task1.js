function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log( sumTo(100) );

function sumToRecursive(n) {
  if (n == 1) return 1;
  return n + sumToRecursive(n - 1);
}

console.log( sumToRecursive(100000) );

function sumToProgression(n) {
  return n * (n + 1) / 2;
}

console.log( sumToProgression(100) );

/*
Самый быстрый вариант - по формуле.
Самый медленный - с рекурсией, т.к. операций сложения столько же, сколько и в простом цикле, но тратится время на дополнительные вызовы

Посчитать с помощью рекурсии сумму чисел до 100000 не получится, так как будет превышение максимального стека вызовов. Хотя, вроде, это зависит от движка.
*/