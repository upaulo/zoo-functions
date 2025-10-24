const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};

  const employersFound = data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);

  return employersFound;
};

module.exports = getEmployeeByName;
