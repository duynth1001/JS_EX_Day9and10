function showMessage(idTag, message) {
  getEle(idTag).innerHTML = message;
  getEle(idTag).style.display = "block";
}

function kiemTraRong(value,idTag,message) {
  if (value.trim() == "") {
    showMessage(idTag,message)
    return false;
  } else {
    showMessage(idTag,'')
    return true;
  }
}

function kiemTraEmail(value,idTag,message) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  var isEmail = re.test(value);
  if (isEmail) {
    showMessage(idTag,'')
    return true;
  } else {
    showMessage(idTag,message)
    return false;
  }
}

function kiemTraChuoi(value,idTag,message) {
  const re =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/g;

  var isString = re.test(value);
  if (isString) {
    showMessage(idTag,'')
    return true;
  } else {
    showMessage(idTag,message)
    return false;
  }
}

function kiemTraMatKhau(value,idTag,message) {
  const re =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

  var isPassword = re.test(value);
  if (isPassword) {
    showMessage(idTag,'')
    return true;
  } else {
    showMessage(idTag,message)
    return false;
  }
}

function kiemTraDoDai(value, min, max,idTag,message) {
  var length = value.length;
  if (length >= min && length <= max) {
    showMessage(idTag,'')
    return true;
  } else {
    showMessage(idTag,message)
    return false;
  }
}

function kiemTraSo(value,idTag,message) {
  const re = /^[0-9]+$/;

  var isString = re.test(value);
  if (isString) {
    showMessage(idTag,'')
    return true;
  } else {
    showMessage(idTag,message)
    return false;
  }
}

function kiemTraNgay(value,idTag,message) {
  var re =
    /^((0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])[/](19|20)?[0-9]{2})*$/;
  var isString = re.test(value);
  if (isString) {
    showMessage(idTag,'')
    return true;
  } else {
    showMessage(idTag,message)
    return false;
  }
}

function kiemTraTrung(id, employeeList, idTag,message) {
  let viTri = employeeList.findIndex(function (element) {
    return element.getAccountID() == id;
  });
  if (viTri != -1) {
    //  tìm thấy
    showMessage(idTag,message)
    return false;
  } else {
    showMessage(idTag,'')
    return true;
  }
}