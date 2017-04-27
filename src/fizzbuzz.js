(function(){function fizzBuzz (number){
  if(isFizzBuzz(number)){
    return "FizzBuzz";
  }
  if(isBuzz(number)){
    return 'Buzz';
  }
  if(isFizz(number)){
    return 'Fizz';
  }
   return number.toString();
}

function isFizzBuzz(number){
  return number % 15 === 0;
}

function isFizz(number){
  return number % 3 === 0;
}

function isBuzz(number){
  return number % 5 === 0;
}
 
 window.fizzBuzz = fizzBuzz;
})()