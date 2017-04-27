describe("Fizz Buzz ", function () {
  it("should be same value", function () {
    expect(fizzBuzz(1)).toEqual("1");
    expect(fizzBuzz(2)).toEqual("2");
    expect(fizzBuzz(4)).toEqual("4");
    expect(fizzBuzz(7)).toEqual("7");
  });

  it("should be Fizz when evenly divided with Three", function (){
    expect(fizzBuzz(3)).toEqual("Fizz");
    expect(fizzBuzz(6)).toEqual("Fizz");
    expect(fizzBuzz(9)).toEqual("Fizz");
    expect(fizzBuzz(12)).toEqual("Fizz");
  });

  it("should be Buzz when evenly divided with Five", function (){
    expect(fizzBuzz(5)).toEqual("Buzz");
    expect(fizzBuzz(10)).toEqual("Buzz");
  });

  it("should be FizzBuzz when evenly divided with Three and Five", function (){
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });
});
