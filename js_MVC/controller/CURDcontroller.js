// Write to local
function wirteLocal(employeeList, localDB) {
  localStorage.setItem(
    localDB,
    JSON.stringify(employeeList)
  );
}
//read from local
function readLocal(jsonData) {
  return JSON.parse(jsonData).map(function (item) {
    return getObjectConstructor(
      item.title,
      item.accountID,
      item.fullname,
      item.email,
      item.password,
      item.date,
      item.basicSalary,
      item.workHour
    );
  });
}


