const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const species = data.species.find((specie) => specie.name === animal);

  if (!species) return false;

  return species.residents.every((resident) => resident.age >= age);
};

module.exports = getAnimalsOlderThan;
