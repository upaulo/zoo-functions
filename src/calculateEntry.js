const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  let child = 0;
  let adult = 0;
  let senior = 0;

  entrants.forEach((entrant) => {
    if (entrant.age < 18) child += 1;
    if (entrant.age >= 18 && entrant.age < 50) adult += 1;
    if (entrant.age >= 50) senior += 1;
  });

  return { child, adult, senior };
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const entrantCounts = countEntrants(entrants);

  const { adult, senior, child } = data.prices;

  const childCost = entrantCounts.child * child;
  const adultCost = entrantCounts.adult * adult;
  const seniorCost = entrantCounts.senior * senior;

  return childCost + adultCost + seniorCost;
};

module.exports = { calculateEntry, countEntrants };
