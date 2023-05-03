function fibonacci(number) {
    let a = 0, b = 1, c = 0;
  
    while (c < number) {
      c = a + b;
      a = b;
      b = c;
    }
  
    if (c === number) {
      return number + " pertence à sequência de Fibonacci.";
    } else {
      return number + " não pertence à sequência de Fibonacci.";
    }
  }
  
