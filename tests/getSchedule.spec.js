const getSchedule = require('../src/getSchedule');

const defaultValue = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

describe('9 - Implemente a função `getSchedule` para disponibilizar um cronograma com os horários de visita da semana disponíveis para cada espécie de animal', () => {
  it('se for passado um animal, deverá retornar um array com os dias em que ele está em exibição', () => {
    {
      const actual = getSchedule('lions');
      const expected = ['Tuesday', 'Thursday', 'Saturday', 'Sunday'];
      expect(actual).toEqual(expected);
    }

    {
      const actual = getSchedule('penguins');
      const expected = ['Tuesday', 'Wednesday', 'Sunday', 'Saturday'];
      expect(actual).toEqual(expected);
    }
  });

  it('sem parâmetros, retorna os horários de cada dia e os animais que estarão em exibição', () => {
    const actual = getSchedule();
    expect(actual).toEqual(defaultValue);
  });

  it('se passado um parâmetro de tipo errado, retorna os horários de cada dia e os animais que estarão em exibição', () => {
    const actual = getSchedule(123);
    expect(actual).toEqual(defaultValue);
  });

  it('caso os parâmetros não sejam nem um animal e nem um dia, retorna os horários de cada dia e os animais que estarão em exibição', () => {
    const actual = getSchedule('qualquercoisa');
    expect(actual).toEqual(defaultValue);
  });

  it('se "Monday" for passado por parâmetro, deverá informar que o zoológico está fechado', () => {
    const actual = getSchedule('Monday');

    const expected = {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };

    expect(actual).toEqual(expected);
  });

  it('se um dia for passado, retorna somente o horário daquele expediente e os animais em exibição no dia', () => {
    {
      const actual = getSchedule('Tuesday');

      const expected = {
        Tuesday: {
          officeHour: 'Open from 8am until 6pm',
          exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
        },
      };

      expect(actual).toEqual(expected);
    }

    {
      const actual = getSchedule('Wednesday');

      const expected = {
        Wednesday: {
          officeHour: 'Open from 8am until 6pm',
          exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
        },
      };

      expect(actual).toEqual(expected);
    }
  });
});
