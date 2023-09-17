class Leader extends Employee {
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
    super(
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

  getAccountID() {
    return super.getAccountID();
  }
  setAccountID(accountID) {
    super.setAccountID(accountID);
  }
  getFullname() {
    return super.getFullName();
  }
  setFullname(fullname) {
    super.setFullName(fullname);
  }
  getEmail() {
    return super.getEmail();
  }
  setEmail(email) {
    super.setEmail(email);
  }
  getPassword() {
    return super.getPassword();
  }
  setPassword(password) {
    super.setPassword(password);
  }
  getDate() {
    return super.getDate();
  }
  setDate(date) {
    super.setDate(date);
  }
  getBasicSalary() {
    return super.getBasicSalary();
  }
  setBasicSalary(basicSalary) {
    super.setBasicSalary(basicSalary);
  }
  getTitle() {
    return super.getTitle();
  }
  setTitle(title) {
    super.setTitle(title);
  }
  getWorkHour() {
    return super.getWorkHour();
  }
  setWorkHour(workHour) {
    super.setWorkHour(workHour);
  }
  totalSalary() {
    super.totalSalary();
    return this.getBasicSalary() * 2;
  }
  rankingEmployee() {
    return super.rankingEmployee();
  }
}
