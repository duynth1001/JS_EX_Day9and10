function resetForm() {
  getEle("#tknv").value=''
  getEle("#name").value=''
  getEle("#email").value=''
  getEle("#password").value=''
  getEle("#datepicker").value=''
  getEle("#luongCB").value=''
  getEle("#chucvu").value='Chọn chức vụ'
  getEle("#gioLam").value=''
}
function clearFormNoti() {
  showMessage(`#tbTKNV`, "");
  showMessage(`#tbTen`, "");
  showMessage(`#tbEmail`, "");
  showMessage(`#tbMatKhau`, "");
    showMessage(`#tbNgay`, "");
  showMessage(`#tbLuongCB`, "");
  showMessage(`#tbChucVu`, "");
  showMessage(`#tbGiolam`, "");
}
function validateFormData(
  accountID,
  fullname,
  email,
  password,
  date,
  basicSalary,
  title,
  workHour
) {
  var flag = true;

  //account
  flag &=
    kiemTraRong(accountID, `#tbTKNV`, "Vui lòng nhập tài khoản") &&
    kiemTraDoDai(
      accountID,
      4,
      6,
      `#tbTKNV`,
      "Vui lòng nhập tài khoản với độ dài từ 4 đến 6 ký số"
    );
    

  //fullname
  flag &=
    kiemTraRong(fullname, `#tbTen`, "Vui lòng nhập họ và tên") &&
    kiemTraChuoi(fullname, `#tbTen`, "Vui lòng nhập tên chỉ có chữ");

  //email
  flag &=
    kiemTraRong(email, `#tbEmail`, "Vui lòng nhập email") &&
    kiemTraEmail(email, `#tbEmail`, "Vui lòng nhập email đúng định dạng");
  //password
  flag &=
    kiemTraRong(password, `#tbMatKhau`, "Vui lòng nhập mật khẩu") &&
    kiemTraMatKhau(
      password,
      `#tbMatKhau`,
      "Vui lòng nhập mật khẩu từ 6 đến 10 ký tự(chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
    );

  //date
  flag &=
    kiemTraRong(date, `#tbNgay`, "Vui lòng nhập ngày") &&
    kiemTraNgay(date, `#tbNgay`, "Vui lòng nhập ngày với định dạng mm/dd/yyyy");

  //basic salary
  if (kiemTraSo(basicSalary, `#tbLuongCB`, "Vui lòng chỉ nhập định dạng số")) {
    if (basicSalary < 1000000 || basicSalary > 20000000) {
      showMessage(
        `#tbLuongCB`,
        "Vui lòng nhập lương cơ bản từ 1 000 000 đến 20 000 000"
      );
      flag &= false;
    } else {
      showMessage(`#tbLuongCB`, "");
    }
  } else {
    flag &= false;
  }

  // //title
  if (title === "Chọn chức vụ") {
    showMessage(`#tbChucVu`, "Vui lòng chọn chức vụ");
    flag &= false;
  } else {
    showMessage(`#tbChucVu`, "");
  }

  //work hour
  if (kiemTraSo(workHour, `#tbGiolam`, "Vui lòng chỉ nhập định dạng số")) {
    if (workHour < 80 || workHour > 200) {
      showMessage(`#tbGiolam`, "Vui lòng nhập giờ làm từ 80 đến 200 giờ");
      flag &= false;
    } else {
      showMessage(`#tbGiolam`, "");
    }
  } else {
    flag &= false;
  }

  return flag;
}

function retriveFormData() {
  var accountID = getEle("#tknv").value;
  var fullname = getEle("#name").value;
  var email = getEle("#email").value;
  var password = getEle("#password").value;
  var date = getEle("#datepicker").value;
  var basicSalary = +getEle("#luongCB").value;
  var title = getEle("#chucvu").value;
  var workHour = +getEle("#gioLam").value;
  //validate
  if (
    !validateFormData(
      accountID,
      fullname,
      email,
      password,
      date,
      basicSalary,
      title,
      workHour
    )
  ) {
    return null;
  }
  return getObjectConstructor(
    title,
    accountID,
    fullname,
    email,
    password,
    date,
    basicSalary,
    workHour
  );
}
function renderEmployeeList(employeeList) {
  var contentHTML = "";
  employeeList.forEach((element) => {
    var employeeEle = element;
    contentTr = `
        <tr>
      <td>${employeeEle.getAccountID()}</td>
      <td>${employeeEle.getFullName()}</td>
      <td>${employeeEle.getEmail()}</td>
      <td>${employeeEle.getDate()}</td>
      <td>${employeeEle.getTitle()}</td>
      <td>${employeeEle.totalSalary()}</td>
      <td>${employeeEle.rankingEmployee()}</td>
      <td>
      <button class="btn btn-warning" onclick="editEmployeeView(
        '${employeeList.indexOf(element)}'
      )">Sửa</button>
      <button class="btn btn-danger" onclick="deleteEmployeeView('${employeeList.indexOf(
        element
      )}')">Xóa</button>
    </td>
        </tr>
        `;
    contentHTML += contentTr;
  });
  getEle("#tableDanhSach").innerHTML = contentHTML;
}
