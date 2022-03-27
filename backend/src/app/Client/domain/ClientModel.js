class Client {
  constructor({ id, name, email, phone,carid,cityid }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.carid = carid;
    this.cityid = cityid;
  }
}

module.exports = Client;
