const data = require('../data/zoo_data');

const isManager = (id) => {
  const managers = data.employees.some((manager) => manager.managers.includes(id));
  return managers;
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const relatedEmployees = [];

    data.employees.forEach((employee) => {
      if (employee.managers.includes(managerId)) {
        relatedEmployees.push(`${employee.firstName} ${employee.lastName}`);
      }
    });

    return relatedEmployees;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
