const data = require('../data/zoo_data');

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getDaySchedule(day) {
  const daySchedule = {
    officeHour: '',
    exhibition: [],
  };

  switch (day) {
    case 'Tuesday':
    case 'Wednesday':
      daySchedule.officeHour = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
      break;
    case 'Thursday':
    case 'Friday':
      daySchedule.officeHour = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
      break;
    case 'Saturday':
      daySchedule.officeHour = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
      break;
    case 'Sunday':
      daySchedule.officeHour = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
      break;
    default:
      daySchedule.officeHour = 'CLOSED';
      daySchedule.exhibition = 'The zoo will be closed!';
  }

  data.species.forEach((species) => {
    if (species.availability.includes(day)) {
      daySchedule.exhibition.push(species.name);
    }
  });

  return daySchedule;
}

function getAnimalSchedule(animalName) {
  const animal = data.species.find((species) => species.name === animalName);

  if (!animal) return [];

  return animal.availability;
}

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) {
    const schedule = {};
    daysOfWeek.forEach((day) => {
      schedule[day] = getDaySchedule(day);
    });

    return schedule;
  }

  if (daysOfWeek.includes(scheduleTarget)) {
    const daySchedule = getDaySchedule(scheduleTarget);
    return { [scheduleTarget]: daySchedule };
  }

  if (typeof scheduleTarget === 'string') { // test here
    const animalSchedule = getAnimalSchedule(scheduleTarget);
    if (animalSchedule.length > 0) {
      return animalSchedule;
    }
  }

  const schedule = {};
  daysOfWeek.forEach((day) => {
    schedule[day] = getDaySchedule(day);
  });

  return schedule;
};

module.exports = getSchedule;
