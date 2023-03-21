
let employee = {
  name: "Sam",
  streetAddress: "11 Broadway"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Create a new object by spreading the original employee object
  const updatedEmployee = { ...employee };
  
  // Update the value for the specified key in the new object
  updatedEmployee[key] = value;
  
  // Return the updated object
  return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const { [key]: deletedValue, ...newEmployee } = employee;
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}