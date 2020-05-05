import { sum, sub, div, mult } from '../../src/main';

describe('Calc', () => {
  beforeAll(() => {});
  describe('Smoke Tests', () => {
    it('Should exist the method `sum`', () => {
      expect(sum).toBeTruthy();
      expect(sum).toBeInstanceOf(Function);
    });

    it('Should exist the method `sub`', () => {
      expect(sub).toBeTruthy();
      expect(sub).toBeInstanceOf(Function);
    });

    it('Should exist the method `mult`', () => {
      expect(mult).toBeTruthy();
      expect(mult).toBeInstanceOf(Function);
    });
    it('Should exist methoe `div`,', () => {
      expect(div).toBeTruthy();
      expect(div).toBeInstanceOf(Function);
    });
  });

  describe('Sum', () => {
    it('Should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).toEqual(4);
    });
  });

  describe('Sub', () => {
    it('Should return 8 when `sub(16,8)`', () => {
      expect(sub(16, 8)).toEqual(8);
    });
  });

  describe('Div', () => {
    it('Should return 16 when `div(32,2)`', () => {
      expect(div(32, 16)).toEqual(2);
    });
    it('Should return `Not is possible division by 0`', () => {
      expect(div(32, 0)).toEqual('It is not possible divide by 0');
    });
  });

  describe('Mult', () => {
    it('Should return 64 when `mult(8,8)`', () => {
      expect(mult(8, 8)).toEqual(64);
    });
  });
});
