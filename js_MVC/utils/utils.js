function getEle(querryID) {
  return document.querySelector(querryID);
}
function getObjectConstructor(
  title,
  accountID,
  fullname,
  email,
  password,
  date,
  basicSalary,
  workHour
) {
  if (title == "Sếp") {
    return new Director(
      accountID,
      fullname,
      email,
      password,
      date,
      basicSalary,
      title,
      workHour
    );
  }
  if (title == "Trưởng phòng") {
    return new Leader(
      accountID,
      fullname,
      email,
      password,
      date,
      basicSalary,
      title,
      workHour
    );
  }
  if (title == "Nhân viên") {
    return new Staff(
      accountID,
      fullname,
      email,
      password,
      date,
      basicSalary,
      title,
      workHour
    );
  }
}

function deleteEmployee(rowIndex, employeeList) {
  employeeList.splice(rowIndex, 1);
}
function findEmployeeByRank(findQuerry, employeeList) {
  findQuerry=findQuerry.trim().toLowerCase()
  return employeeList.filter((ele) => {
    return ele.rankingEmployee().trim().toLowerCase() == findQuerry;
  });
}
function findIndexOfEmployee(searchObj, employeeList) {
  return employeeList.indexOf(
    employeeList.find((ele) => {
      return ele.getAccountID() == searchObj.getAccountID();
    })
  );
}

function getDataFromMainList(employeeList) {
  var resList = [];
  employeeList.forEach((element) => {
    var resObj = {
      accountID: element.getAccountID(),
      fullname: element.getFullName(),
      email: element.getEmail(),
      password: element.getPassword(),
      date: element.getDate(),
      basicSalary: element.getBasicSalary(),
      title: element.getTitle(),
      workHour: element.getWorkHour(),
    };
    resList.push(resObj);
  });
  return resList;
}
