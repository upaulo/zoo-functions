const data = require('../data/zoo_data');

const getEmployeesCoverage = (param) => {
  if (!param) {
    return data.employees.map((employee) => {
      const fullName = `${employee.firstName} ${employee.lastName}`;
      const species = employee.responsibleFor.map((speciesId) => {
        const speciesInfo = data.species.find((specie) => specie.id === speciesId);
        return speciesInfo.name;
      });
      const locations = species.map((speciesName) => {
        const speciesInfo = data.species.find((specie) => specie.name === speciesName);
        return speciesInfo.location;
      });

      return {
        id: employee.id,
        fullName,
        species,
        locations,
      };
    });
  }

  if (param.name || param.id) {
    const employerFound = data.employees
      .find((e) => e.firstName === param.name || e.lastName === param.name || e.id === param.id);

    if (employerFound) {
      const fullName = `${employerFound.firstName} ${employerFound.lastName}`;
      const species = employerFound.responsibleFor.map((speciesId) => {
        const speciesInfo = data.species.find((specie) => specie.id === speciesId);
        return speciesInfo.name;
      });
      const locations = species.map((speciesName) => {
        const speciesInfo = data.species.find((specie) => specie.name === speciesName);
        return speciesInfo.location;
      });

      return {
        id: employerFound.id,
        fullName,
        species,
        locations,
      };
    }
  }

  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
