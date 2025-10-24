const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const speciesFound = [];

  ids.forEach((id) => {
    const idFound = data.species.find((specie) => specie.id === id);
    speciesFound.push(idFound);
  });
  return speciesFound;
};

module.exports = getSpeciesByIds;
