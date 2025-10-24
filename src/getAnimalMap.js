const data = require('../data/zoo_data');

const getAllSpeciesLocation = (options) => {
  const { sex, sorted } = options || {};
  const locations = {};

  data.species.forEach((specie) => {
    const { name, location, residents } = specie;

    if (!locations[location]) {
      locations[location] = [];
    }

    if (options && options.includeNames) {
      const filteredResidents = residents
        .filter((resident) => !sex || resident.sex === sex)
        .map((resident) => resident.name);

      if (sorted) filteredResidents.sort();

      const speciesWithResidents = { [name]: filteredResidents };
      locations[location].push(speciesWithResidents);
    } else {
      locations[location].push(name);
    }
  });

  return locations;
};

const getAnimalMap = (options) => {
  if (!options || options.includeNames !== true) {
    return getAllSpeciesLocation();
  }

  return getAllSpeciesLocation(options);
};

module.exports = getAnimalMap;
