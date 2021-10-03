let employee = {
  streetAddress: "11 Broadway",
  name: "Sam",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}, employee, { [key]: value });
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
  return Object.assign(employee, { [key]: value });
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign(employee, { [key]: value });
}
function deleteFromEmployeeByKey(employee, key) {
  const newObject = Object.assign({}, employee);
  delete newObject[key];
  return newObject;
}
