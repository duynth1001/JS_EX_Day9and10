var employeeList = [];
const Employee_Local = "Employee_Local";

//read from local
var jsonData = localStorage.getItem(Employee_Local);
if (jsonData != null) {
  employeeList = readLocal(jsonData);
  //render
  renderEmployeeList(employeeList);
}

//add new Employee
getEle("#btnThem").addEventListener("click", () => {
  $("#myModal").modal("toggle");
  clearFormNoti();
  resetForm();
  getEle("#tknv").disabled = false;
  getEle("#btnThemNV").disabled = false;
  getEle('#btnCapNhat').disabled=true;
});

getEle("#btnThemNV").addEventListener("click", () => {
  //validate
  formObj = retriveFormData();
  if (formObj === null) {
    return;
  }
  if (!kiemTraTrung(formObj.getAccountID(), employeeList, `#tbTKNV`, 'Tài khoản đã tồn tại, vui lòng chọn tên tài khoản khác')) {
    return
  }
  employeeList.push(formObj);
  //write to local
  unblockList = getDataFromMainList(employeeList);
  wirteLocal(unblockList, Employee_Local);
  //render
  $("#myModal").modal("hide");
  renderEmployeeList(employeeList);
});

//delete Employee
function deleteEmployeeView(rowIndex) {
  deleteEmployee(rowIndex, employeeList);
  //update to local
  unblockList = getDataFromMainList(employeeList);
  wirteLocal(unblockList, Employee_Local);
  renderEmployeeList(employeeList);
}

//find Employee
getEle("#btnTimNV").addEventListener("click", () => {
  var findQuerry = getEle("#searchName").value;
  foundList = findEmployeeByRank(findQuerry, employeeList)
  if (foundList.length==0) {
    alert('Không tìm thấy nhân viên theo yêu cầu')
  }
  else
  renderEmployeeList(foundList);
});

//update Employee
function editEmployeeView(rowIndex) {
  $("#myModal").modal("toggle");
  getEle("#tknv").disabled = true;
  getEle("#btnThemNV").disabled = true;
  getEle('#btnCapNhat').disabled=false;
  clearFormNoti();
  var resObj = employeeList[rowIndex];
  getEle("#tknv").value = resObj.getAccountID();
  getEle("#name").value = resObj.getFullName();
  getEle("#password").value = resObj.getPassword();
  getEle("#email").value = resObj.getEmail();
  getEle("#datepicker").value = resObj.getDate();
  getEle("#luongCB").value = resObj.getBasicSalary();
  getEle("#chucvu").value = resObj.getTitle();
  getEle("#gioLam").value = resObj.getWorkHour();
}
getEle("#btnCapNhat").addEventListener("click", () => {
  //validate
  formObj = retriveFormData();
  if (formObj === null) {
    return;
  }
  var index = findIndexOfEmployee(formObj, employeeList);
  employeeList[index] = formObj;
  //update local
  unblockList = getDataFromMainList(employeeList);
  wirteLocal(unblockList, Employee_Local);
  $("#myModal").modal("hide");
  renderEmployeeList(employeeList);
});
