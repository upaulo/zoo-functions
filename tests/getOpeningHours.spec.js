const { getOpeningHours, fix12 } = require('../src/getOpeningHours');

const zooOpen = 'The zoo is open';
const zooClosed = 'The zoo is closed';

const hours = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função getOpeningHours', () => {
  it('should return opening hours for a valid day and time (AM)', () => {
    const resultWednesday = getOpeningHours('Wednesday', '11:00-AM');
    expect(resultWednesday).toBe(zooOpen);
    const resultMonday = getOpeningHours('Monday', '09:30-am');
    expect(resultMonday).toBe(zooClosed);
  });

  it('should return opening hours for a valid day and time (PM)', () => {
    const resultWednesday = getOpeningHours('Wednesday', '11:00-PM');
    expect(resultWednesday).toBe(zooClosed);
    const resultSaturday = getOpeningHours('Saturday', '05:30-pm');
    expect(resultSaturday).toBe(zooOpen);
  });

  it('should return all schedule for an empty input', () => {
    const result = getOpeningHours();
    expect(result).toEqual(hours);
  });

  it('should throw an error for an invalid day', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('should throw an error if hour is not a number', () => {
    expect(() => getOpeningHours('Monday', 'nine:30-AM')).toThrow('The hour should represent a number');
  });

  it('should throw an error if minutes is not a number', () => {
    expect(() => getOpeningHours('Monday', '09:thirty-AM')).toThrow('The minutes should represent a number');
  });

  it('should throw an error for an invalid time format', () => {
    expect(() => getOpeningHours('Monday', '09:30-XX')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('should throw an error for an invalid hour range', () => {
    expect(() => getOpeningHours('Monday', '13:30-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('should throw an error for an invalid minutes range', () => {
    expect(() => getOpeningHours('Monday', '10:60-PM')).toThrow('The minutes must be between 0 and 59');
  });

  it('should convert 12 hours to 0 for opening and closing time', () => {
    const result = fix12(12, 12, 12);
    expect(result.h).toBe(0);
    expect(result.o).toBe(0);
    expect(result.c).toBe(0);
  });

  it('should handle 12:00-AM as midnight (0:00)', () => {
    const result = getOpeningHours('Wednesday', '12:00-AM');
    expect(result).toBe(zooClosed);
  });

  it('should handle 12:00-PM as noon (12:00)', () => {
    const result = getOpeningHours('Wednesday', '12:00-PM');
    expect(result).toBe(zooOpen);
  });

  it('should return "The zoo is closed" outside of opening hours (AM)', () => {
    const result = getOpeningHours('Wednesday', '07:30-AM');
    expect(result).toBe(zooClosed);
  });

  it('should return "The zoo is closed" outside of opening hours (PM)', () => {
    const result = getOpeningHours('Wednesday', '06:30-PM');
    expect(result).toBe(zooClosed);
  });
});
