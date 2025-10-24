const { species } = require('../data/zoo_data');

const countAnimals = (params) => {
  let animalsCount = {};

  if (!params) {
    species.forEach((specie) => {
      animalsCount[specie.name] = specie.residents.length;
    });
    return animalsCount;
  }

  const specieCount = species.find((specie) => specie.name === params.species);
  if (!specieCount) throw new Error('Espécie inexistente');

  if (params.sex) {
    const filteredResidents = specieCount.residents.filter((animal) => animal.sex === params.sex);
    animalsCount = filteredResidents.length;
    return animalsCount;
  }
  return specieCount.residents.length;
};

module.exports = countAnimals;
