(function (context) {
  function fizzBuzz(number) {
    return fizz(number) + buzz(number) + sayNumber(number);
  }

  function fizz(number) {
    return {
      true: 'Fizz',
      false: ''
    }[isFizz(number)];
  }

  function buzz(number) {
    return {
      true: 'Buzz',
      false: ''
    }[isBuzz(number)];
  }

  function sayNumber(number) {
    return {
      true: '',
      false: number.toString()
    }[isFizz(number) || isBuzz(number)];
  };

  function isFizzBuzz(number) {
    return number % 15 === 0;
  }

  function isFizz(number) {
    return number % 3 === 0;
  }

  function isBuzz(number) {
    return number % 5 === 0;
  }

  context.fizzBuzz = fizzBuzz;
})(window)