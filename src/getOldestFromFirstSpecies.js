const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employerFound = data.employees.find((employer) => employer.id === id);
  if (!employerFound) return 'Funcionário não encontrado.';
  const firstSpecie = employerFound.responsibleFor[0];
  const specieFound = data.species.find((specie) => specie.id === firstSpecie);

  const { residents } = specieFound;
  if (residents.length > 0) {
    const oldestResident = residents.reduce((oldest, resident) => {
      if (resident.age > oldest.age) {
        return resident;
      }
      return oldest;
    });
    return [oldestResident.name, oldestResident.sex, oldestResident.age];
  }
  return 'Não há residentes nesta espécie.';
};

module.exports = getOldestFromFirstSpecies;
