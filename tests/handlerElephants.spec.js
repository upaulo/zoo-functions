const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('should return undefined if param is undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('should return "Parâmetro inválido, é necessário uma string" if param is not a string', () => {
    expect(handlerElephants(123)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('should return null if an unknown param is provided', () => {
    expect(handlerElephants('unknownParam')).toBe(null);
  });

  it('should return the count of residents if param is "count"', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('should return an array of elephant names if param is "names"', () => {
    const names = handlerElephants('names');
    expect(Array.isArray(names)).toBe(true);
    expect(names).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('should return the average age of elephants if param is "averageAge"', () => {
    const average = handlerElephants('averageAge');
    expect(typeof average).toBe('number');
    expect(average).toBe(10.5);
  });

  it('should return the location of elephants in Zoo', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('should return the popularity of elephants', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('should return the days when you can visit the elephants', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
