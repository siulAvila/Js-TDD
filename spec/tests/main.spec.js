import fizzBuzz from '../../src/main';

describe('Main', () => {
  describe('Smoke tests', () => {
    it('should exits fillBuzz', () => {
      expect(fizzBuzz).toBeTruthy();
    });
    it('should be a function', () => {
      expect(fizzBuzz).toBeInstanceOf(Function);
    });
  });

  describe('Test cases', () => {
    it('should return `fizz` if the number be divisible  by 3', () => {
      expect(fizzBuzz(9)).toEqual('Fizz');
    });

    it('should return `Buzz` if the number be divisible  by 5', () => {
      expect(fizzBuzz(10)).toEqual('Buzz');
    });

    it('should return `fizzBuzz` if the number be divisible  by 3 and 5', () => {
      expect(fizzBuzz(15)).toEqual('FizzBuzz');
    });

    it('should return the number itself if the test cases above are not met', () => {
      expect(fizzBuzz(11)).toEqual(11);
    });
  });
});
