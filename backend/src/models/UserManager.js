const Joi = require("joi");
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  validate(data, forCreation = true) {
    this.presence = forCreation ? "required" : "optional";

    const joiObject = {
      lastname: Joi.string().max(45).presence(this.presence),
      firstname: Joi.string().max(45).presence(this.presence),
      email: Joi.string().email().min(5).max(150).presence(this.presence),
      phone: Joi.string().max(10).presence(this.presence),
      address: Joi.string().max(255).presence(this.presence),
      city: Joi.string().max(45).presence(this.presence),
      zipcode: Joi.string().max(5).presence(this.presence),
    };

    if (forCreation)
      joiObject.password = Joi.string().max(255).presence(this.presence);
    else
      joiObject.password_hash = Joi.string().max(255).presence(this.presence);
    /* abortEarly: false ??? */
    return Joi.object(joiObject).validate(data, { abortEarly: false }).error;
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (lastname, firstname, email, phone, password_hash, address, city, zipcode) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.lastname,
        user.firstname,
        user.email,
        user.phone,
        user.password_hash,
        user.address,
        user.city,
        user.zipcode,
      ]
    );
  }

  /* {
    "lastname": "aubert",
    "firstname":"anthony",
    "email": "lkbhiug@gmail.com",
    "phone": "0696562382",
    "password_hash": "test2",
    "address": "5 rue du miracle",
    "city": "tours",
    "zipcode": "37000"
}
*/

  findByUserEmail(email) {
    return this.connection
      .query(`select * from  ${this.table} where email = ?`, [email])
      .then((result) => result[0]);
  }

  update(user, id) {
    return this.connection.query(
      `update ${UserManager.table} set ? where id = ?`,
      [user, id]
    );
  }
}

module.exports = UserManager;
