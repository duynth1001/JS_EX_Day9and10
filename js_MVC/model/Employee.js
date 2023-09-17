class Employee {
  #_accountID;
  #_fullname;
  #_email;
  #_password;
  #_date;
  #_basicSalary;
  #_title;
  #_workHour;

  constructor(
    accountID,
    fullname,
    email,
    password,
    date,
    basicSalary,
    title,
    workHour
  ) {
    this.#_accountID = accountID;
    this.#_fullname = fullname;
    this.#_email = email;
    this.#_password = password;
    this.#_date = date;
    this.#_basicSalary = basicSalary;
    this.#_title = title;
    this.#_workHour = workHour;
  }

  getAccountID() {
    return this.#_accountID;
  }
  setAccountID(accountID) {
    this.#_accountID = accountID;
  }
  getFullName() {
    return this.#_fullname;
  }
  setFullName(fullname) {
    this.#_fullname = fullname;
  }
  getEmail() {
    return this.#_email;
  }
  setEmail(email) {
    this.#_email = email;
  }
  getPassword() {
    return this.#_password;
  }
  setPassword(password) {
    this.#_password = password;
  }
  getDate() {
    return this.#_date;
  }
  setDate(date) {
    this.#_date = date;
  }
  getBasicSalary() {
    return this.#_basicSalary;
  }
  setBasicSalary(basicSalary) {
    this.#_basicSalary = basicSalary;
  }
  getTitle() {
    return this.#_title;
  }
  setTitle(title) {
    this.#_title = title;
  }
  getWorkHour() {
    return this.#_workHour;
  }
  setWorkHour(workHour) {
    this.#_workHour = workHour;
  }
  totalSalary() {}
  rankingEmployee() {
    if (this.getWorkHour() >= 192) {
      return "Xuất sắc";
    }
    if (this.getWorkHour() >= 176 && this.getWorkHour() < 192) {
      return "Giỏi";
    }
    if (this.getWorkHour() >= 160 && this.getWorkHour() < 176) {
      return "Khá";
    } else return "Trung bình";
  }
}
