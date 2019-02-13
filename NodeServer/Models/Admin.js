class Admin {
    constructor(id, username, email, password, phoneNumber, isActive) {
        this.Id = id
        this.Username = username;
        this.Email = email;
        this.Password = password;
        this.PhoneNumber = phoneNumber;
        this.lsActive = isActive;
    }
}
module.exports = Admin;
